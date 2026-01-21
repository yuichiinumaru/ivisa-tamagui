const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

const PORT = 6006;
const STATIC_DIR = path.join(__dirname, '../packages/ui/storybook-static');
const BASE_URL = `http://127.0.0.1:${PORT}`;

function killPort(port) {
    try {
        execSync(`fuser -k ${port}/tcp`, { stdio: 'ignore' });
        console.log(`Killed process on port ${port}`);
    } catch (e) {
        // Ignore if no process
    }
}

async function startServer() {
  killPort(PORT);
  console.log('Starting server...');
  // Bind to 127.0.0.1 explicitly
  const server = spawn('python3', ['-m', 'http.server', PORT, '--bind', '127.0.0.1', '--directory', STATIC_DIR]);

  server.stdout.on('data', (data) => { /* ignore access logs */ });
  server.stderr.on('data', (data) => console.error(`[Server ERR]: ${data}`));
  server.on('error', (err) => console.error(`[Server Failed]: ${err}`));
  server.on('close', (code) => console.log(`[Server Closed]: ${code}`));

  // Wait a bit for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  return server;
}

async function runAudit() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Load stories list
  const storiesJsonPath = path.join(STATIC_DIR, 'index.json');
  if (!fs.existsSync(storiesJsonPath)) {
      console.error(`Stories JSON not found at ${storiesJsonPath}`);
      return [];
  }
  const storiesData = JSON.parse(fs.readFileSync(storiesJsonPath, 'utf8'));
  let stories = Object.values(storiesData.entries);

  // Filter stories if args provided
  const filterArgs = process.argv.slice(2);
  if (filterArgs.length > 0) {
      const keywords = filterArgs[0].toLowerCase().split(' ');
      stories = stories.filter(story => {
          const fullText = (story.id + story.title + story.name).toLowerCase();
          return keywords.some(k => fullText.includes(k));
      });
      console.log(`Filtering for keywords: ${keywords.join(', ')}`);
  }

  console.log(`Found ${stories.length} stories to check.`);

  const errors = [];

  for (const story of stories) {
    console.log(`Checking ${story.id}...`);
    const storyUrl = `${BASE_URL}/iframe.html?id=${story.id}&viewMode=story`;

    const storyErrors = [];
    const consoleHandler = msg => {
      if (msg.type() === 'error') {
        // Filter out known harmless errors if needed, or specific noise
        if (!msg.text().includes('favicon.ico')) {
             storyErrors.push(msg.text());
        }
      }
    };
    const errorHandler = exception => {
      storyErrors.push(String(exception));
    };

    page.on('console', consoleHandler);
    page.on('pageerror', errorHandler);

    try {
      await page.goto(storyUrl, { waitUntil: 'networkidle', timeout: 5000 });

      // Interaction
      try {
          const interactive = page.locator('button, input, [role="button"], a').first();
          if (await interactive.count() > 0) {
              await interactive.click({ timeout: 500 });
          } else {
              await page.click('body', { timeout: 500 });
          }
      } catch (e) {
          // Ignore
      }

      await page.waitForTimeout(100);

    } catch (e) {
      storyErrors.push(`Navigation failed: ${e.message}`);
    }

    if (storyErrors.length > 0) {
      console.error(`[FAIL] ${story.title} - ${story.name}:`);
      storyErrors.forEach(e => console.error(`  - ${e}`));
      errors.push({ id: story.id, name: `${story.title} - ${story.name}`, errors: storyErrors });
    }

    // Cleanup listeners
    page.off('console', consoleHandler);
    page.off('pageerror', errorHandler);
  }

  await browser.close();
  return errors;
}

(async () => {
  const server = await startServer();
  try {
    const errors = await runAudit();
    if (errors.length > 0) {
        console.log('\n--- AUDIT FAILED ---');
        console.log(`${errors.length} stories have errors.`);
        process.exit(1);
    } else {
        console.log('\n--- AUDIT PASSED ---');
        process.exit(0);
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    server.kill();
  }
})();

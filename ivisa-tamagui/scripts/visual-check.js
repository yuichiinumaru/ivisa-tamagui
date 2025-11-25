const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const STORYBOOK_URL = 'http://localhost:6006';
const OUTPUT_DIR = path.join(__dirname, '../tests/visual-checks');

// Component IDs to check (based on Storybook auto-generated IDs)
// Format: <kind>-<name>--<story>
// Usually: primitives-ivisabutton--default
const STORIES_TO_CHECK = [
  'atoms-ivisabutton--primary',
  'atoms-ivisabutton--secondary',
  'atoms-ivisainput--default',
  'atoms-ivisainput--filled',
  'atoms-ivisatextarea--default',
  'atoms-ivisacheckbox--default',
  'molecules-card--default',
  'molecules-card--elevated',
  'molecules-dialog--default',
  'molecules-popover--default',
  'molecules-select--default',
  'molecules-date--calendar-demo',
  'molecules-date--date-picker-demo',
  'organisms-carousel--default',
  'organisms-carousel--sizes',
  'organisms-carousel--vertical',
  'organisms-command--default',
  'organisms-form--login',
  'organisms-form--complex',
  'organisms-datatable--default',
];

async function runHealthCheck() {
  console.log('🏥 Starting Storybook Health Check...');

  // Ensure output dir exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = {
    success: 0,
    failed: 0,
    errors: [],
  };

  // 1. Check Home/Index connectivity
  try {
    console.log(`\n🌐 Connecting to ${STORYBOOK_URL}...`);
    await page.goto(STORYBOOK_URL, { waitUntil: 'networkidle' });
    console.log('✅ Storybook is reachable');
  } catch (error) {
    console.error('❌ Failed to reach Storybook:', error.message);
    await browser.close();
    return;
  }

  // 2. Iterate through stories
  for (const storyId of STORIES_TO_CHECK) {
    const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${storyId}&viewMode=story`;
    console.log(`\n📸 Checking: ${storyId}`);

    const consoleLogs = [];
    const pageErrors = [];

    // listeners
    page.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
      }
    });
    page.on('pageerror', err => {
      pageErrors.push(err.message);
    });

    try {
      await page.goto(storyUrl, { waitUntil: 'networkidle' });
      
      // Wait a tiny bit for animations/mounting
      await page.waitForTimeout(500);

      // Visual Check: Screenshot
      const screenshotPath = path.join(OUTPUT_DIR, `${storyId}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      
      // Report
      if (consoleLogs.length > 0 || pageErrors.length > 0) {
        console.log('⚠️  Issues found:');
        consoleLogs.forEach(log => console.log(`   ${log}`));
        pageErrors.forEach(err => console.log(`   ERROR: ${err}`));
        results.errors.push({ id: storyId, logs: consoleLogs, errors: pageErrors });
      } else {
        console.log('✅ Clean render (no console errors)');
      }
      console.log(`   Saved screenshot to: tests/visual-checks/${storyId}.png`);
      
      results.success++;

    } catch (err) {
      console.error(`❌ Failed to check ${storyId}:`, err.message);
      results.failed++;
    }
    
    // Remove listeners for next iteration to avoid duplicate logging if we reused them (though we recreate mostly)
    page.removeAllListeners('console');
    page.removeAllListeners('pageerror');
  }

  await browser.close();

  console.log('\n📊 Summary:');
  console.log(`   Passed: ${results.success}`);
  console.log(`   Failed: ${results.failed}`);
  console.log(`   Stories with Console Errors: ${results.errors.length}`);
}

runHealthCheck();

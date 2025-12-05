import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORYBOOK_URL = 'http://localhost:6006';

// List of stories to check
const STORIES_TO_CHECK = [
  'atoms-button--default',
  'atoms-input--default',
  'atoms-input--filled',
  'atoms-checkbox--default',
  'molecules-card--default',
  'molecules-dialog--default',
  'molecules-select--default',
  'organisms-form--login',
  'organisms-datatable--default',
  'molecules-accordion--default',
  'molecules-tabs--default',
];

async function runAccessibilityCheck() {
  console.log('♿ Starting Accessibility Check (Axe)...');

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const finalResults = {
    success: 0,
    failed: 0,
    violations: [],
  };

  try {
    console.log(`\n🌐 Connecting to ${STORYBOOK_URL}...`);
    await page.goto(STORYBOOK_URL, { waitUntil: 'networkidle' });
  } catch (error) {
    console.error('❌ Failed to reach Storybook:', error.message);
    await browser.close();
    process.exit(1);
  }

  for (const storyId of STORIES_TO_CHECK) {
    const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${storyId}&viewMode=story`;
    console.log(`\n🔍 Checking: ${storyId}`);

    try {
      await page.goto(storyUrl, { waitUntil: 'networkidle' });
      await new Promise(resolve => setTimeout(resolve, 500)); // Wait for mount

      try {
          const results = await new AxeBuilder({ page })
              .disableRules(['landmark-one-main', 'page-has-heading-one', 'region', 'scrollable-region-focusable'])
              .analyze();

          if (results.violations.length === 0) {
              console.log('✅ No violations found');
              finalResults.success++;
          } else {
              console.log(`❌ ${results.violations.length} Violations found:`);
              results.violations.forEach(violation => {
                 console.log(`   - [${violation.impact}] ${violation.id}: ${violation.help}`);
              });
              finalResults.failed++;
              finalResults.violations.push({ id: storyId, violations: results.violations });
          }
      } catch (e) {
          console.log('❌ Error running Axe:');
          console.log(e.message);
          finalResults.failed++;
          finalResults.violations.push({ id: storyId, error: e.message });
      }

    } catch (err) {
      console.error(`❌ Failed execution for ${storyId}:`, err.message);
      finalResults.failed++;
    }
  }

  await browser.close();

  console.log('\n📊 Summary:');
  console.log(`   Passed: ${finalResults.success}`);
  console.log(`   Failed: ${finalResults.failed}`);

  if (finalResults.failed > 0) {
    process.exit(1);
  }
}

runAccessibilityCheck();

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    console.log('Connecting to Storybook at http://localhost:6006...');
    // Ensure Storybook is running before executing this script
    await page.goto('http://localhost:6006', { waitUntil: 'networkidle', timeout: 60000 });

    console.log('Page loaded. Checking for console errors...');
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.error(`CONSOLE ERROR: ${msg.text()}`);
        }
    });

    console.log('Taking screenshot of Home...');
    if (!fs.existsSync('verification')) {
        fs.mkdirSync('verification');
    }
    await page.screenshot({ path: 'verification/storybook-home.png' });

    // Todo: Iterate through stories if possible using Storybook API or navigation

    console.log('Visual check complete. Screenshot saved to verification/storybook-home.png');
  } catch (error) {
    console.error('Error during visual check:', error);
    console.log('Make sure Storybook is running (pnpm storybook)!');
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

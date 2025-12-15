# Automation & Tooling

## 1. Console Log Capture (Playwright)

To systematically capture console errors from all Storybook stories, we use a Playwright script.

### Strategy
1.  Launch Storybook (`yarn storybook`).
2.  Launch Playwright (`node scripts/capture-logs.js`).
3.  Playwright navigates to the Storybook iframe URL for each story.
4.  Captures `console.error` and `console.warn` events.
5.  Writes logs to `logs/YYYYMMDD-HHMMSS.log`.

### Implementation Plan (Future Task)
Create `scripts/capture-logs.js`:
```javascript
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Create log file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const logFile = path.join(__dirname, `../logs/${timestamp}-console.log`);
  const stream = fs.createWriteStream(logFile, { flags: 'a' });

  // Capture logs
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      const logLine = `[${msg.type().toUpperCase()}] ${msg.text()} @ ${msg.location().url}\n`;
      stream.write(logLine);
      console.log(logLine.trim());
    }
  });

  // Navigate to Storybook (Assuming it exposes a list of stories or we crawl)
  // Ideally, use Storybook's composition API or navigate to known stories.
  // For now, visiting the main preview endpoint:
  await page.goto('http://localhost:6006/iframe.html?id=atoms-button--default&viewMode=story');

  // TODO: Iterate over all stories (requires fetching story index from http://localhost:6006/index.json)

  await browser.close();
  stream.end();
})();
```

## 2. Architecture Linter

We use `scripts/lint-architecture.js` to enforce Design System rules that ESLint might miss or requires complex configuration for.

### Rules Enforced
*   **Forbidden Imports:** Prevents importing `Button`, `Input`, `Select`, etc., directly from `tamagui`. They must be imported from the local `packages/ui/src/atoms` or `molecules` directories to ensure consistent styling and behavior.

### Usage
```bash
yarn lint:arch
```

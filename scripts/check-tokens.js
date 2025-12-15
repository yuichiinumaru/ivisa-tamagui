
const fs = require('fs');
const path = require('path');

const UI_PACKAGE_ROOT = path.join(__dirname, '../packages/ui/src');
const TOKENS_FILE = path.join(UI_PACKAGE_ROOT, 'theme/tokens.ts');

// Rough regex to find keys in tokens.ts. 
// Matches: key: value, or 'key': value in object definitions.
// We primarily care about the keys inside `tokens = createTokens({...})`
// But simply grabbing all words followed by : might be enough for a heuristic.

function getDefinedTokens() {
    const content = fs.readFileSync(TOKENS_FILE, 'utf8');

    // Extract specific sections if possible, or just all keys.
    // Let's try to match standard keys we know + parse the file text.
    const defined = new Set([
        'background', 'color', 'borderColor', 'shadowColor',
        'primary', 'secondary', 'accent', 'destructive', 'success', 'warning', 'info', 'muted',
        'sm', 'md', 'lg', 'xs', 'xl', '2xl', '3xl', '4xl', '5xl', 'true',
        'full', 'rounded', 'round'
    ]);

    // Regex to find things like `gray5: ...`
    const keyRegex = /([a-zA-Z0-9]+):\s/g;
    let match;
    while ((match = keyRegex.exec(content)) !== null) {
        defined.add(match[1]);
    }

    // Also add $ prefixed versions just in case, though we check usage
    return defined;
}

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            if (f.endsWith('.tsx') || f.endsWith('.ts')) {
                callback(dirPath);
            }
        }
    });
}

function checkTokens() {
    console.log('Checking token usage...');
    const definedTokens = getDefinedTokens();
    let errors = [];

    walkDir(UI_PACKAGE_ROOT, (filePath) => {
        // Skip tokens.ts and config itself
        if (filePath.includes('tokens.ts') || filePath.includes('tamagui.config.ts')) return;

        const content = fs.readFileSync(filePath, 'utf8');

        // Find all usage of '$something'
        const usageRegex = /['"]\$([a-zA-Z0-9]+)['"]/g;
        let match;
        while ((match = usageRegex.exec(content)) !== null) {
            const tokenName = match[1];
            // Ignore known Tamagui built-ins or context specific
            if (['body', 'heading', 'unset', 'undefined'].includes(tokenName)) continue;

            if (!definedTokens.has(tokenName)) {
                // Ignore if it looks like a numeric string that might be a key (e.g. $1) if 1 is in tokens
                // But our regex parser might have missed '1': ...

                // Only report if it really looks unrelated
                // We'll trust our heuristic: if it's not in the gathered keys, warn.
                errors.push({ file: path.relative(UI_PACKAGE_ROOT, filePath), token: tokenName });
            }
        }
    });

    if (errors.length > 0) {
        console.log('⚠️  Potential undefined tokens found (verify manually):');
        // Group by token
        const byToken = {};
        errors.forEach(e => {
            byToken[e.token] = byToken[e.token] || [];
            if (byToken[e.token].length < 3) byToken[e.token].push(e.file);
        });

        Object.keys(byToken).forEach(t => {
            console.log(`  $${t} in: ${byToken[t].join(', ')}...`);
        });
        // process.exit(1); // Don't fail build, just warn
    } else {
        console.log('✅ Token usage looks consistent.');
    }
}

checkTokens();

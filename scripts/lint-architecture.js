const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../ivisa-tamagui/packages/ui/src');
const ATOMS_DIR = path.join(ROOT_DIR, 'atoms');
const MOLECULES_DIR = path.join(ROOT_DIR, 'molecules');
const ORGANISMS_DIR = path.join(ROOT_DIR, 'organisms');

// List of components that MUST be imported from local atoms/molecules, not 'tamagui'
const FORBIDDEN_IMPORTS = {
    'Button': 'atoms/Button',
    'Input': 'atoms/Input',
    'Textarea': 'atoms/Textarea',
    'Switch': 'atoms/Switch',
    'Checkbox': 'atoms/Checkbox',
    'Select': 'molecules/Select',
    'Sheet': 'molecules/Sheet',
    'ScrollArea': 'atoms/ScrollArea',
    'Label': 'atoms/Label',
    'Avatar': 'atoms/Avatar',
    'Tooltip': 'molecules/Tooltip',
    'Popover': 'molecules/Popover',
    'Dialog': 'molecules/Dialog',
    'RadioGroup': 'molecules/RadioGroup',
};

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(ROOT_DIR);
let errorCount = 0;

files.forEach(file => {
    // Skip checking the component definition itself (e.g. don't check Button.tsx for Button import)
    const fileName = path.basename(file);
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
        // Simple regex check for imports from 'tamagui'
        // import { ... } from 'tamagui'
        if (line.includes("from 'tamagui'") || line.includes('from "tamagui"')) {
            for (const [component, localPath] of Object.entries(FORBIDDEN_IMPORTS)) {
                // Regex to match " Button " or " Button," or "{Button}" etc.
                const regex = new RegExp(`\\b${component}\\b`);
                if (regex.test(line)) {
                    // Exception: If we are in the definition file itself
                    // e.g. Button.tsx importing Button (unlikely from tamagui, but maybe ButtonFrame)
                    // But if Button.tsx imports Button from tamagui, that might be okay if it's wrapping it.
                    // However, usually we wrap ButtonFrame (styled) not Button directly.
                    // Let's allow it in the file that defines it.
                    if (file.includes(localPath)) return;

                    console.error(`[ArchLint] Error in ${path.relative(ROOT_DIR, file)}:${index + 1}`);
                    console.error(`  Forbidden import: '${component}' from 'tamagui'. Use local '${localPath}' instead.`);
                    console.error(`  Line: ${line.trim()}\n`);
                    errorCount++;
                }
            }
        }
    });
});

if (errorCount > 0) {
    console.error(`Found ${errorCount} architecture violations.`);
    process.exit(1);
} else {
    console.log("Architecture check passed.");
}

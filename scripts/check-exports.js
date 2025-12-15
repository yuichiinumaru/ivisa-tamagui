
const fs = require('fs');
const path = require('path');

const UI_PACKAGE_ROOT = path.join(__dirname, '../packages/ui/src');
const INDEX_FILE = path.join(UI_PACKAGE_ROOT, 'index.ts');
const ATOMS_DIR = path.join(UI_PACKAGE_ROOT, 'atoms');
const MOLECULES_DIR = path.join(UI_PACKAGE_ROOT, 'molecules');

function getComponents(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(file => {
        // Check if it's a directory (Component) or a standalone .tsx file (Component.tsx)
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            // Exclude test/stories folders if any top level
            return true;
        }
        // Only include .tsx files that start with uppercase (Components)
        return file.endsWith('.tsx') && /^[A-Z]/.test(file) && !file.includes('.stories.') && !file.includes('.test.');
    }).map(file => path.basename(file, '.tsx'));
}

function checkExports() {
    console.log('Checking exports...');
    const indexContent = fs.readFileSync(INDEX_FILE, 'utf8');

    const atoms = getComponents(ATOMS_DIR);
    const molecules = getComponents(MOLECULES_DIR);

    let missing = [];

    atoms.forEach(atom => {
        // Check for exact export pattern or export *
        if (!indexContent.includes(`atoms/${atom}`)) {
            missing.push(`Atom: ${atom}`);
        }
    });

    molecules.forEach(molecule => {
        if (!indexContent.includes(`molecules/${molecule}`)) {
            missing.push(`Molecule: ${molecule}`);
        }
    });

    if (missing.length > 0) {
        console.error('❌ Missing exports in index.ts:');
        missing.forEach(m => console.error(`  - ${m}`));
        process.exit(1);
    } else {
        console.log('✅ All components exported correctly.');
    }
}

checkExports();

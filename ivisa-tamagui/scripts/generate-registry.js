const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../packages/ui/src');
const OUTPUT_FILE = path.join(__dirname, '../packages/ui/component-registry.json');

const EXCLUDED_DIRS = ['assets', 'mocks', 'providers', 'theme', 'utils', '__snapshots__'];

function scanComponents() {
  const registry = {
    atoms: [],
    molecules: [],
    organisms: []
  };

  const types = ['atoms', 'molecules', 'organisms'];

  types.forEach(type => {
    const typeDir = path.join(COMPONENTS_DIR, type);
    if (!fs.existsSync(typeDir)) return;

    const components = fs.readdirSync(typeDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !EXCLUDED_DIRS.includes(dirent.name))
      .map(dirent => dirent.name);

    components.forEach(componentName => {
      registry[type].push({
        name: componentName,
        path: `packages/ui/src/${type}/${componentName}`,
        // We could add more metadata here like detecting props if we parsed TS
      });
    });
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2));
  console.log(`Registry generated at ${OUTPUT_FILE}`);
}

scanComponents();

const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const files = [
  'packages/ui/src/atoms/Alert.tsx',
  'packages/ui/src/organisms/Timeline/Timeline.tsx',
  'packages/ui/src/organisms/Video/Video.tsx',
  'packages/ui/src/organisms/TimelineAudit/TimelineAudit.tsx',
  'packages/ui/src/organisms/TreemapChart/TreemapChart.tsx',
]

function ensureExport(filePath) {
  const abs = path.join(repoRoot, filePath)
  if (!fs.existsSync(abs)) {
    console.warn('Missing:', abs)
    return
  }
  let src = fs.readFileSync(abs, 'utf8')

  // Derive component name from filename
  const base = path.basename(filePath, path.extname(filePath))
  const componentName = base[0].toUpperCase() + base.slice(1)

  const exportRegex = new RegExp(`export\\s+(type|interface)\\s+${componentName}Props\\b`)
  const inferredExportRegex = new RegExp(`export\\s+type\\s+${componentName}Props\\s*=\\s*React\\.ComponentProps`)

  if (exportRegex.test(src) || inferredExportRegex.test(src)) {
    console.log('Already exports props for', componentName)
    return
  }

  // Check if component is exported as `export const Name` or `export function Name`
  const compRegex = new RegExp(`export\\s+(const|function|class)\\s+${componentName}\\b`)
  const hasExportedComponent = compRegex.test(src) || new RegExp(`const\\s+${componentName}\\s*=`, 'm').test(src)

  // Build export line
  const exportLine = `\nexport type ${componentName}Props = React.ComponentProps<typeof ${componentName}>\n`

  if (!hasExportedComponent) {
    // Try common fallback: search for `export const <PascalCaseName>` by capitalized words
    console.log('Component not found by heuristic, appending inferred props export for', componentName)
    fs.appendFileSync(abs, exportLine, 'utf8')
    return
  }

  // Append export after file
  fs.appendFileSync(abs, exportLine, 'utf8')
  console.log('Appended props export for', componentName)
}

files.forEach(f => ensureExport(f))

console.log('Done.')

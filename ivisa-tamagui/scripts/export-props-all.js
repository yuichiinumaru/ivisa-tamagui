const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const srcRoot = path.join(repoRoot, 'packages', 'ui', 'src')

function isPascalCase(name) {
  return /^[A-Z][A-Za-z0-9]+$/.test(name)
}

function findTsxFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'test' || e.name === '__tests__' || e.name === 'stories') continue
      files = files.concat(findTsxFiles(full))
    } else if (e.isFile() && full.endsWith('.tsx')) {
      // skip stories and tests
      if (/\.story(s)?\.tsx$/.test(full) || /\.test\.tsx$/.test(full)) continue
      files.push(full)
    }
  }
  return files
}

function detectComponentNames(src) {
  const names = new Set()
  // export const Name =
  const re1 = /export\s+const\s+([A-Z][A-Za-z0-9_]*)\s*=/g
  let m
  while ((m = re1.exec(src))) names.add(m[1])
  // const Name = ( ... ) =>
  const re2 = /const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*(?:forwardRef|\()/g
  while ((m = re2.exec(src))) names.add(m[1])
  // export function Name(
  const re3 = /export\s+function\s+([A-Z][A-Za-z0-9_]*)\s*\(/g
  while ((m = re3.exec(src))) names.add(m[1])
  // function Name(
  const re4 = /function\s+([A-Z][A-Za-z0-9_]*)\s*\(/g
  while ((m = re4.exec(src))) names.add(m[1])
  // export const Name = forwardRef<...>\(
  const re5 = /export\s+const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*forwardRef/g
  while ((m = re5.exec(src))) names.add(m[1])
  return Array.from(names)
}

function ensureExportForFile(file) {
  let src = fs.readFileSync(file, 'utf8')
  const compNames = detectComponentNames(src)
  if (compNames.length === 0) return
  let changed = false
  for (const name of compNames) {
    const exportTypeRe = new RegExp(`export\\s+(type|interface)\\s+${name}Props\\b`)
    if (exportTypeRe.test(src)) continue
    // check existing ComponentProps export pattern
    const compPropsRe = new RegExp(`export\\s+type\\s+${name}Props\\s*=\\s*React\\.ComponentProps`)
    if (compPropsRe.test(src)) continue
    // ensure React import exists
    if (!/from\s+['\"]react['\"]/m.test(src)) {
      // add `import React from 'react'` at top
      src = `import React from 'react'\n` + src
      changed = true
    }
    const exportLine = `\nexport type ${name}Props = React.ComponentProps<typeof ${name}>\n`
    src = src + exportLine
    changed = true
    console.log('Appended props export for', path.relative(repoRoot, file), '->', name)
  }
  if (changed) fs.writeFileSync(file, src, 'utf8')
}

const all = findTsxFiles(srcRoot)
console.log('Found', all.length, 'tsx files')
all.forEach(ensureExportForFile)
console.log('Done')

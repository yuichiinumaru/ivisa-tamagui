const fs = require('fs')
const path = require('path')

function walk(dir, exclude = new Set(['node_modules', '.git', 'dist', 'build'])){
  const files = []
  const entries = fs.readdirSync(dir)
  for(const name of entries){
    if(exclude.has(name)) continue
    const p = path.join(dir,name)
    let stat
    try{ stat = fs.statSync(p) } catch(e){ continue }
    if(stat.isDirectory()) files.push(...walk(p, exclude))
    else files.push(p)
  }
  return files
}

const root = path.resolve(__dirname, '..')
const stories = walk(root).filter(f => f.endsWith('.stories.tsx'))
console.log('Found', stories.length, 'story files')

function resolveImport(fromFile, importPath){
  if(importPath.startsWith('.')){
    const base = path.resolve(path.dirname(fromFile), importPath)
    const exts = ['.tsx', '.ts', '/index.ts', '/index.tsx', '.jsx', '.js']
    for(const e of exts){
      const p = base + e
      if(fs.existsSync(p)) return p
    }
    // try as given
    for(const e of exts){
      const p = base.replace(/\.tsx?$|\.jsx?$|\.js$/,'')+e
      if(fs.existsSync(p)) return p
    }
  }
  return null
}

stories.forEach(file => {
  let s = fs.readFileSync(file, 'utf8')
  const original = s
  const regex = /React\.ComponentProps\s*<\s*typeof\s+(\w+)\s*>/g
  let m
  const imports = {}
  // parse import lines to map imported names to paths
  s.split('\n').forEach(line => {
    const im = line.match(/import\s+\{?\s*([A-Za-z0-9_,\s]+)\s*\}?\s+from\s+['"](.+)['"]/)
    if(im){
      const names = im[1].split(',').map(x=>x.trim())
      names.forEach(n=> imports[n]=im[2])
    }
  })

  const replacements = []
  while((m = regex.exec(s))){
    const comp = m[1]
    // try find import path
    const imp = imports[comp] || imports[comp.replace(/([A-Z])/g,'$1')]
    let compFile = null
    if(imp && imp.startsWith('.')) compFile = resolveImport(file, imp)
    if(!compFile){
      // try same-folder component file
      const cand = path.resolve(path.dirname(file), comp + '.tsx')
      if(fs.existsSync(cand)) compFile = cand
    }
    if(!compFile) continue
    const compSrc = fs.readFileSync(compFile, 'utf8')
    // look for exported type/interface named ComponentProps
    const propName = comp + 'Props'
    const hasExported = new RegExp('export\s+(type|interface)\s+' + propName + '\b').test(compSrc)
    if(hasExported){
      // add import type line
      const rel = path.relative(path.dirname(file), compFile).replace(/\\/g,'/')
      let importPath = rel
      if(!importPath.startsWith('.')) importPath = './' + importPath
      importPath = importPath.replace(/\.tsx?$|\.jsx?$|\.js$/,'')
      // prepare replacement
      replacements.push({from: m[0], to: propName, importPath})
    }
  }

  if(replacements.length){
    // add imports
    let lines = s.split('\n')
    let top = 0
    while(top < lines.length && lines[top].trim() === '') top++
    if(lines[top] && /^("use client"|'use client')$/.test(lines[top].trim())) top++
    const importLines = []
    replacements.forEach(r=>{
      const imp = `import type { ${r.to} } from '${r.importPath}';`
      if(!s.includes(imp)) importLines.push(imp)
      s = s.replace(new RegExp(r.from.replace(/[-\\/\\^$*+?.()|[\]{}]/g,'\\$&'),'g'), ` ${r.to} `)
    })
    if(importLines.length) lines.splice(top,0,...importLines)
    s = lines.join('\n')
    fs.writeFileSync(file,s,'utf8')
    console.log('Patched', path.relative(root,file))
  }
})

console.log('Done')

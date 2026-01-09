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
    if(stat.isDirectory()){
      files.push(...walk(p, exclude))
    } else {
      files.push(p)
    }
  }
  return files
}

const root = path.resolve(__dirname, '..')
const files = walk(root).filter(f => f.endsWith('.stories.tsx'))
console.log('Found', files.length, 'story files')

files.forEach(file => {
  let s = fs.readFileSync(file, 'utf8')
  if(!s.includes("import type React from 'react';")) return
  // remove all occurrences
  s = s.split("import type React from 'react';").join('')
  // remove accidental leftover empty lines
  s = s.replace(/\n{3,}/g, '\n\n')
  const lines = s.split('\n')
  let start = 0
  while(start < lines.length && lines[start].trim() === '') start++
  if(lines[start] && /^("use client"|'use client')$/.test(lines[start].trim())){
    lines.splice(start+1, 0, "import type React from 'react';")
  } else {
    lines.splice(start, 0, "import type React from 'react';")
  }
  s = lines.join('\n')
  fs.writeFileSync(file, s, 'utf8')
  console.log('Fixed', path.relative(root, file))
})
console.log('Done')

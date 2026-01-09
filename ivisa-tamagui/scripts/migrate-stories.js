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
  const original = s
  // skip if already uses React.ComponentProps
  if(/React\.ComponentProps\s*<\s*typeof/.test(s) || /React\.ComponentProps\s*<\s*[^>]+>/.test(s)){
    // but still may need import type React
  }

  // replace Meta<typeof X> => Meta<React.ComponentProps<typeof X>>
  s = s.replace(/Meta\s*<\s*typeof\s+([A-Za-z0-9_$.]+)\s*>/g, 'Meta<React.ComponentProps<typeof $1>>')
  // replace StoryObj<typeof X>
  s = s.replace(/StoryObj\s*<\s*typeof\s+([A-Za-z0-9_$.]+)\s*>/g, 'StoryObj<React.ComponentProps<typeof $1>>')
  // replace type Story = StoryObj<typeof X>
  s = s.replace(/type\s+(\w+)\s*=\s*StoryObj\s*<\s*typeof\s+([A-Za-z0-9_$.]+)\s*>/g, 'type $1 = StoryObj<React.ComponentProps<typeof $2>>')

  // also replace Meta<typeof X>[] etc (edge cases)
  s = s.replace(/Meta\s*<\s*typeof\s+([A-Za-z0-9_$.]+)\s*>\s*\|/g, 'Meta<React.ComponentProps<typeof $1>> |')

  // if replacement happened and no import type React present, add it
  if(s !== original){
    if(!/import\s+type\s+React\s+from\s+['"]react['"]/.test(s)){
      // if there's already a normal React import, leave it
      if(/import\s+React\s+from\s+['"]react['"]/.test(s) || /import\s+\*\s+as\s+React\s+from\s+['"]react['"]/.test(s)){
        // nothing to do
      } else {
        // prepend import type React at file top, but preserve a possible "use client" directive
        const lines = s.split('\n')
        let start = 0
        while(start < lines.length && lines[start].trim() === '') start++
        if(lines[start] && /^("use client"|'use client')$/.test(lines[start].trim())){
          // insert after the directive
          lines.splice(start+1, 0, "import type React from 'react';")
        } else {
          lines.splice(start, 0, "import type React from 'react';")
        }
        s = lines.join('\n')
      }
    }
    fs.writeFileSync(file, s, 'utf8')
    console.log('Patched', path.relative(root,file))
  }
})

console.log('Done')

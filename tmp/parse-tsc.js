const fs = require('fs');
const path = 'tmp/tsc-out.txt';
if (!fs.existsSync(path)) { console.error('tsc output not found at', path); process.exit(1) }
const s = fs.readFileSync(path, 'utf8');
const re = /^(.+?)\((\d+),(\d+)\): error (TS\d+): (.+)$/gm;
const map = new Map();
let m;
while ((m = re.exec(s))) {
  const file = m[1];
  const code = m[4];
  const msg = m[5].split('\n')[0].replace(/\s+/g, ' ');
  const key = code + ': ' + msg.slice(0, 140);
  if (!map.has(key)) map.set(key, { count: 0, sample: file });
  map.get(key).count++;
}
const out = Array.from(map.entries()).sort((a, b) => b[1].count - a[1].count).slice(0, 20).map(([k, v])=> v.count + '\t' + k + '\t' + v.sample).join('\n');
require('fs').writeFileSync('tmp/top20.txt', out, 'utf8');
console.log('wrote tmp/top20.txt');

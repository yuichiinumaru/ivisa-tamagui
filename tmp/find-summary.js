const fs=require('fs');
const s=fs.readFileSync('tmp/tsc-after.txt','utf8');
const m1 = s.match(/Found \d+ errors? in \d+ files?\./g);
const m2 = s.match(/Encontrad[oa]s? \d+ erro[s]? em \d+ arquivo[s]?\./g);
if(m1 && m1.length) console.log(m1.join('\n'));
else if(m2 && m2.length) console.log(m2.join('\n'));
else console.log('no-summary');
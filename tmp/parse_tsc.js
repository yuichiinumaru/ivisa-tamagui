const fs = require('fs');
const path = 'c:\\Users\\40763375\\Desktop\\ivisa-tamagui\\tmp\\tsc-out.txt';
const s = fs.readFileSync(path, 'utf16le');
try{
  const codes = {};
  const simple = (s.match(/TS\d+/g) || []).length;
  console.log('simple TS count:', simple);
  const re = /TS(\d+)/g;
  let m;
  while((m = re.exec(s))){ const code = 'TS'+m[1]; codes[code] = (codes[code] || 0) + 1; }
  const arr = Object.entries(codes).sort((a,b)=>b[1]-a[1]).slice(0,20);
  console.log('totalLines:', s.split(/\r?\n/).length);
  console.log('afterLoop keys sample:', Object.keys(codes).slice(0,5));
  console.log('foundCodes:', Object.keys(codes).length);
  arr.forEach(([code,count])=>{
    const line = s.split('\n').find(l=>l.includes(code));
    console.log(`${count} ${code} -> ${line}`);
  });
}catch(err){
  console.error('parser error', err && err.stack ? err.stack : err);
}

// debug: inspect bytes around first occurrence of 'error'
const idxError = s.indexOf('error');
if(idxError>=0){
  const snip = s.slice(Math.max(0, idxError-6), idxError+12);
  console.log('\n--- around first "error" ---');
  console.log(snip);
  console.log('codes:', snip.split('').map(c=>c.charCodeAt(0)).join(' '));
} else {
  console.log('no literal "error" found');
}

console.log('\n--- raw head (200 chars) ---');
const head = s.slice(0,200);
console.log(JSON.stringify(head));
console.log('head char codes:', head.split('').map(c=>c.charCodeAt(0)).join(' '));

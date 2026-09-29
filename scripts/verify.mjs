import fs from 'node:fs';
import path from 'node:path';
const slugs=['japanect','jaya-utama-perkasa','casadela','ladela','kurnia-group'];
const routes=['/',...slugs.map(s=>'/work/'+s+'/')];
const assert=(condition,message)=>{if(!condition)throw new Error(message)};
for(const locale of ['en','id']) for(const route of routes){
 const url=(locale==='id'?'/id':'')+route;
 const file=path.join('out',url,'index.html');
 const html=fs.readFileSync(file,'utf8');
 assert(html.includes(`lang="${locale}"`),'Wrong language: '+url);
 assert(html.includes('rel="canonical"')&&html.includes('og:title'),'Missing metadata: '+url);
 assert(!/QA document|QA fixture|Dokumen uji|owner-supplied|source notes are pending|Year not supplied/i.test(html),'Internal/test content: '+url);
 if(route==='/'||route.includes('japanect'))for(const value of ['+120%','+80%','+50%','+40%'])assert(html.includes(value),'Missing '+value+' on '+url);
 if(route==='/'||route.includes('kurnia-group'))for(const value of ['+1,010%','+100%'])assert(html.includes(value),'Missing '+value+' on '+url);
 assert(!/\+60%|\+25%|\+20%|\+505%/.test(html),'Outdated metrics: '+url);
 assert(!/freelance|Awaiting source files|Documentation to follow|Dates will be added|Image unavailable|\bTBD\b/i.test(html),'Unwanted public copy: '+url);
 assert(html.includes('field-notes-rail')&&html.includes('contact-primary'),'Missing notes/contact: '+url);
 if(route==='/') {
  assert(html.includes('Full-Stack Digital Marketer'),'Missing positioning: '+url);
  assert((html.match(/class="tool-item"/g)||[]).length===9,'Wrong tool count: '+url);
  assert((html.match(/class="capability-(?:core|support)"/g)||[]).length===7,'Wrong capability count: '+url);
 }
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
  if(href.startsWith('#'))assert(ids.has(href.slice(1)),'Missing anchor '+url+href);
  if(href.startsWith('/')&&!href.startsWith('/_next/')&&!href.includes('.')){const [p,hash]=href.split('#');const target=path.join('out',p,'index.html');assert(fs.existsSync(target),'Broken route: '+href);if(hash)assert(fs.readFileSync(target,'utf8').includes(`id="${hash}"`),'Broken section: '+href);}
 }
}
assert(fs.existsSync('out/404.html'),'Missing 404');
for(const icon of ['meta','googleads','googleanalytics','googlesearchconsole','html5','css','javascript','python','canva']) assert(fs.existsSync('out/icons/'+icon+'.svg'),'Missing tool icon: '+icon);
console.log('PASS: 12 bilingual routes, metadata, exact metrics, internal links and anchors, no test or internal content.');

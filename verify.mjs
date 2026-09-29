import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {projects} from './src/data.mjs';
const dir=path.resolve('dist');
const routes=['/',...projects.map(p=>`/work/${p.slug}/`)];
const pages=routes.map(route=>({route,file:path.join(dir,route,'index.html')}));
const plain=html=>html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
for(const {route,file} of pages){
 const html=fs.readFileSync(file,'utf8');assert.equal((html.match(/<h1\b/g)||[]).length,1,route+' must have one h1');
 assert.ok(html.includes('<meta name="description"'),route+' metadata');
 for(const match of html.matchAll(/(?:href|src)="(\/[^\"]*)"/g)){
  const target=new URL(match[1],'https://portfolio.test');let destination=path.join(dir,target.pathname);if(target.pathname.endsWith('/'))destination=path.join(destination,'index.html');assert.ok(fs.existsSync(destination),route+' broken local link '+match[1]);
  if(target.hash&&destination.endsWith('.html'))assert.ok(fs.readFileSync(destination,'utf8').includes(`id="${target.hash.slice(1)}"`),route+' broken anchor '+target.hash);
 }
 const text=plain(html);assert.ok(!/\+(?:60|505|25|20)\s*%/.test(text),'Outdated metric in '+route);
 assert.ok(!/\+40\s*%\s*Leads|\+50\s*%\s*Leads/i.test(text),'Outdated leads in '+route);
 assert.ok(!html.includes('TEST-01'),'QA evidence leaked to production');
 assert.ok(!/marquee|project-card|skill-pill/.test(html),'Old template component in '+route);
}
for(const p of projects){const html=fs.readFileSync(path.join(dir,'work',p.slug,'index.html'),'utf8');for(const metric of p.metrics)assert.ok(html.includes(`<strong>${metric.value}</strong><span>${metric.label}</span>`),'Incorrect metric for '+p.slug);assert.equal(p.metrics.length,['japanect','kurnia-group'].includes(p.slug)?(p.slug==='japanect'?4:2):0,'Unsupported metrics');}
const homepage=fs.readFileSync(path.join(dir,'index.html'),'utf8');for(const p of projects)assert.ok(homepage.includes(`href="/work/${p.slug}/"`),'Case inaccessible from index');
const scripts=fs.readFileSync(path.join(dir,'app.js'),'utf8');assert.ok(scripts.includes('JSON.parse'),'Evidence loader missing');
console.log('PASS: 6 routes, metadata, local links and anchors, exact case metrics, no outdated metrics, no test evidence, case navigation.');

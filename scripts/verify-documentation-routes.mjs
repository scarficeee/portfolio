// Render the actual shared Case tree with an in-memory media manifest.
// Test images are never written into public/ or the production export.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import assert from "node:assert/strict";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const require = createRequire(import.meta.url);
const manifest = {};
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require(name) {
      if (name === "@/.generated/documentation-media.json") return manifest;
      if (name.startsWith("@/") || name.startsWith(".")) {
        const base = name.startsWith("@/") ? path.resolve(name.slice(2)) : path.resolve(path.dirname(file), name);
        const target = [base, base + ".ts", base + ".tsx"].find((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
        if (!target) throw new Error("Unresolved local module: " + name);
        return load(target);
      }
      return require(name);
    },
  }, { filename: file });
  return module.exports;
}

const { Case } = load("components/Case.tsx");
const { projects } = load("content/projects.ts");
for (const project of projects) for (const locale of ["en", "id"]) {
  for (const key of Object.keys(manifest)) delete manifest[key];
  for (const count of [0, 1, 2, 3, 6, 8]) {
    for (const key of Object.keys(manifest)) delete manifest[key];
    for (let n = count; n > 0; n--) manifest[`/media/${project.mediaFolder}/image${n}.webp`] = {
      src: `/media/_previews/test-${n}.webp`, srcSet: `/media/_previews/test-${n}.webp 480w`,
      width: n % 2 ? 960 : 600, height: n % 2 ? 640 : 900,
    };
    const html = renderToStaticMarkup(React.createElement(Case, { project, locale }));
    assert.equal((html.match(/id="documentation"/g) || []).length, 1);
    assert.ok(!html.includes('id="evidence"') && !html.includes('href="#evidence"'));
    assert.equal((html.match(/class="documentation-empty"/g) || []).length, count === 0 ? 1 : 0);
    assert.equal((html.match(/class="image-open"/g) || []).length, Math.min(6, count));
    if (count) {
      assert.ok(html.includes("srcSet="), "Actual case route must use responsive previews");
      assert.ok(html.includes(locale === "en" ? "Selected material" : "Dokumentasi pilihan"));
    }
  }
}
console.log(`PASS: all ${projects.length * 2} localized case trees render one Documentation, no Evidence, and 0/1/2/3/6/8-image discovery through the real components.`);

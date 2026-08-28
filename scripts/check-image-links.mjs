#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ignoredDirectories = new Set([
  '.git',
  'node_modules',
  'photos/photo/hide'
]);
const textExtensions = new Set(['.html', '.js', '.css', '.json']);
const imageExtensions = /\.(avif|gif|jpe?g|png|webp|svg)$/i;
const referencePattern = /(?:\.\.\/|\.\/)*(?:photos|public)\/[^"'`\s)<>]+/g;
const missing = [];
const hidden = [];
const seen = new Set();

function walk(directory, files = []) {
  for (const name of fs.readdirSync(directory)) {
    const absolutePath = path.join(directory, name);
    const relativePath = path.relative(projectRoot, absolutePath);
    if (name === '.DS_Store' || ignoredDirectories.has(relativePath)) continue;

    const stats = fs.statSync(absolutePath);
    if (stats.isDirectory()) {
      walk(absolutePath, files);
    } else if (textExtensions.has(path.extname(name).toLowerCase())) {
      files.push(absolutePath);
    }
  }
  return files;
}

function resolveReference(reference, filePath) {
  const cleanReference = reference.replace(/[;,]+$/, '');
  const isRootRelative = !cleanReference.startsWith('.') && !cleanReference.startsWith('..');
  return path.normalize(
    isRootRelative
      ? path.join(projectRoot, cleanReference)
      : path.resolve(path.dirname(filePath), cleanReference)
  );
}

for (const filePath of walk(projectRoot)) {
  const text = fs.readFileSync(filePath, 'utf8');
  for (const match of text.matchAll(referencePattern)) {
    const reference = match[0].replace(/[;,]+$/, '');
    if (!imageExtensions.test(reference)) continue;

    const resolvedPath = resolveReference(reference, filePath);
    const key = `${filePath}:${reference}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const location = `${path.relative(projectRoot, filePath)}:${text.slice(0, match.index).split('\n').length}`;
    if (resolvedPath.includes(`${path.sep}photos${path.sep}photo${path.sep}hide${path.sep}`)) {
      hidden.push(`${location} ${reference}`);
    } else if (!fs.existsSync(resolvedPath)) {
      missing.push(`${location} ${reference}`);
    }
  }
}

if (missing.length === 0 && hidden.length === 0) {
  console.log('Image link check passed: no missing or hidden image references.');
  process.exit(0);
}

if (missing.length > 0) {
  console.error('Missing image references:');
  missing.forEach((item) => console.error(`- ${item}`));
}
if (hidden.length > 0) {
  console.error('References into photos/photo/hide (not published):');
  hidden.forEach((item) => console.error(`- ${item}`));
}
process.exit(1);

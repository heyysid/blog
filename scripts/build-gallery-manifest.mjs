#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import zlib from 'node:zlib';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const sourcePath = path.join(projectRoot, 'gallery-source.js');
const outputDir = path.join(projectRoot, 'public', 'generated');
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'gallery-build-'));
const PREVIEW_SIZE = 900;
const FALLBACK_ACCENT = {
  base: '#7b7b7b',
  top: '#b4b4b4',
  bottom: '#5d5d5d'
};

try {
  const sourceItems = readGallerySource();

  fs.rmSync(outputDir, { recursive: true, force: true });
  fs.mkdirSync(outputDir, { recursive: true });

  const manifest = sourceItems.map((item, index) => buildManifestEntry(item, index));
  const manifestJson = JSON.stringify(manifest, null, 2);

  fs.writeFileSync(path.join(outputDir, 'gallery-manifest.json'), `${manifestJson}\n`);
  fs.writeFileSync(
    path.join(outputDir, 'gallery-manifest.js'),
    `window.__GALLERY_MANIFEST__ = ${manifestJson};\n`
  );

  process.stdout.write(`Generated ${manifest.length} gallery entries in public/generated\n`);
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}

function buildManifestEntry(item, index) {
  const fullSrc = normalizeSlashes(item.src);
  const absoluteSourcePath = path.join(projectRoot, fullSrc);
  const width = Number(item.width) || 0;
  const height = Number(item.height) || 0;
  const dimensions = width && height ? { width, height } : readDimensions(absoluteSourcePath);
  const accent = extractAccentPaletteForImage(absoluteSourcePath, index);

  return {
    id: `gallery-${String(index + 1).padStart(3, '0')}`,
    title: item.title ?? '',
    category: item.category ?? 'All',
    fullSrc,
    gallerySrc: fullSrc,
    width: dimensions.width,
    height: dimensions.height,
    color: accent.base,
    placeholderTop: accent.top,
    placeholderBottom: accent.bottom
  };
}

function readGallerySource() {
  const sourceText = fs.readFileSync(sourcePath, 'utf8');
  const match = sourceText.match(/window\.__GALLERY_SOURCE__\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);

  if (!match) {
    throw new Error('gallery-source.js must assign an array to window.__GALLERY_SOURCE__');
  }

  return JSON.parse(match[1]);
}

function extractAccentPaletteForImage(sourcePath, index) {
  try {
    const previewPath = createPreviewPng(sourcePath, index);
    return extractAccentPalette(previewPath);
  } catch (error) {
    return FALLBACK_ACCENT;
  }
}

function createPreviewPng(sourcePath, index) {
  const entrySlug = `gallery-${String(index + 1).padStart(3, '0')}`;
  const tempDir = path.join(tempRoot, entrySlug);
  fs.mkdirSync(tempDir, { recursive: true });

  execFileSync('qlmanage', ['-t', '-s', String(PREVIEW_SIZE), '-o', tempDir, sourcePath], {
    stdio: 'ignore'
  });

  const tempPngName = fs.readdirSync(tempDir).find((name) => name.endsWith('.png'));
  if (!tempPngName) {
    throw new Error(`Quick Look preview generation failed for ${sourcePath}`);
  }

  return path.join(tempDir, tempPngName);
}

function readDimensions(filePath) {
  let width = 0;
  let height = 0;

  try {
    const metadata = execFileSync(
      'mdls',
      ['-name', 'kMDItemPixelWidth', '-name', 'kMDItemPixelHeight', filePath],
      { encoding: 'utf8' }
    );

    width = Number(metadata.match(/kMDItemPixelWidth\s+=\s+(\d+)/)?.[1]);
    height = Number(metadata.match(/kMDItemPixelHeight\s+=\s+(\d+)/)?.[1]);
  } catch (error) {
    width = 0;
    height = 0;
  }

  if (!width || !height) {
    try {
      const sipsOutput = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', filePath], {
        encoding: 'utf8'
      });

      width = Number(sipsOutput.match(/pixelWidth:\s+(\d+)/)?.[1]);
      height = Number(sipsOutput.match(/pixelHeight:\s+(\d+)/)?.[1]);
    } catch (error) {
      const avifDimensions = readAvifDimensions(filePath);
      width = avifDimensions.width;
      height = avifDimensions.height;
    }
  }

  if (!width || !height) {
    throw new Error(`Unable to read image dimensions for ${filePath}`);
  }

  return { width, height };
}

function readAvifDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  const marker = Buffer.from('ispe');
  const index = buffer.indexOf(marker);

  if (index === -1 || index + 16 > buffer.length) {
    return { width: 0, height: 0 };
  }

  return {
    width: buffer.readUInt32BE(index + 8),
    height: buffer.readUInt32BE(index + 12)
  };
}

function extractAccentPalette(filePath) {
  const image = decodePng(filePath);
  const bucket = pickWeightedColorBucket(image);
  const base = tuneAccentColor(bucket);
  const { h, s, l } = rgbToHsl(base.r, base.g, base.b);

  return {
    base: rgbToHex(base.r, base.g, base.b),
    top: rgbToHex(...Object.values(hslToRgb(h, clamp(s * 0.75, 0.18, 0.62), clamp(l + 0.16, 0.34, 0.78)))),
    bottom: rgbToHex(...Object.values(hslToRgb(h, clamp(s * 1.08, 0.24, 0.82), clamp(l - 0.18, 0.16, 0.46))))
  };
}

function pickWeightedColorBucket(image) {
  const { width, height, bytesPerPixel, pixels } = image;
  const buckets = new Map();
  const xStep = Math.max(1, Math.floor(width / 48));
  const yStep = Math.max(1, Math.floor(height / 48));

  for (let y = 0; y < height; y += yStep) {
    for (let x = 0; x < width; x += xStep) {
      const pixelIndex = (y * width + x) * bytesPerPixel;
      const r = pixels[pixelIndex];
      const g = pixels[pixelIndex + 1];
      const b = pixels[pixelIndex + 2];
      const alpha = bytesPerPixel === 4 ? pixels[pixelIndex + 3] / 255 : 1;

      if (alpha < 0.25) continue;

      const { s, l } = rgbToHsl(r, g, b);
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      const dx = Math.abs(x / width - 0.5);
      const dy = Math.abs(y / height - 0.5);
      const centerWeight = 1.25 - Math.min(0.55, dx + dy);

      let weight = alpha * centerWeight * (0.6 + s * 3.4) * (0.85 + (1 - Math.abs(l - 0.5)) * 1.2);
      if (brightness < 0.08 || brightness > 0.95) weight *= 0.15;
      if (s < 0.06) weight *= 0.25;

      const key = `${r >> 4}-${g >> 4}-${b >> 4}`;
      const bucket = buckets.get(key) ?? { weight: 0, r: 0, g: 0, b: 0 };
      bucket.weight += weight;
      bucket.r += r * weight;
      bucket.g += g * weight;
      bucket.b += b * weight;
      buckets.set(key, bucket);
    }
  }

  if (buckets.size === 0) {
    return { r: 142, g: 142, b: 142 };
  }

  const winner = [...buckets.values()].sort((a, b) => b.weight - a.weight)[0];
  return {
    r: Math.round(winner.r / winner.weight),
    g: Math.round(winner.g / winner.weight),
    b: Math.round(winner.b / winner.weight)
  };
}

function tuneAccentColor(rgb) {
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const tunedS = clamp(Math.max(s, 0.28), 0.28, 0.78);
  const tunedL = clamp(l < 0.22 ? 0.26 : l, 0.28, 0.62);
  return hslToRgb(h, tunedS, tunedL);
}

function decodePng(filePath) {
  const buffer = fs.readFileSync(filePath);
  const signature = '89504e470d0a1a0a';

  if (buffer.subarray(0, 8).toString('hex') !== signature) {
    throw new Error(`Unsupported image format for color extraction: ${filePath}`);
  }

  let offset = 8;
  let width = 0;
  let height = 0;
  let bitDepth = 0;
  let colorType = 0;
  const idatChunks = [];

  while (offset < buffer.length) {
    const chunkLength = buffer.readUInt32BE(offset);
    const chunkType = buffer.subarray(offset + 4, offset + 8).toString('ascii');
    const chunkData = buffer.subarray(offset + 8, offset + 8 + chunkLength);
    offset += chunkLength + 12;

    if (chunkType === 'IHDR') {
      width = chunkData.readUInt32BE(0);
      height = chunkData.readUInt32BE(4);
      bitDepth = chunkData[8];
      colorType = chunkData[9];
    } else if (chunkType === 'IDAT') {
      idatChunks.push(chunkData);
    } else if (chunkType === 'IEND') {
      break;
    }
  }

  const channels = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 0 ? 1 : 0;
  if (!channels) {
    throw new Error(`Unsupported PNG color type ${colorType} in ${filePath}`);
  }

  if (bitDepth !== 8 && bitDepth !== 16) {
    throw new Error(`Unsupported PNG bit depth ${bitDepth} in ${filePath}`);
  }

  const bytesPerPixel = channels * (bitDepth / 8);
  const inflated = zlib.inflateSync(Buffer.concat(idatChunks));
  const rowLength = width * bytesPerPixel;
  const pixels = Buffer.alloc(rowLength * height);
  let inputOffset = 0;
  let previousRow = Buffer.alloc(rowLength);

  for (let y = 0; y < height; y += 1) {
    const filterType = inflated[inputOffset];
    inputOffset += 1;
    const currentRow = inflated.subarray(inputOffset, inputOffset + rowLength);
    inputOffset += rowLength;
    const outputRow = pixels.subarray(y * rowLength, (y + 1) * rowLength);

    unfilterScanline(filterType, currentRow, outputRow, previousRow, bytesPerPixel);
    previousRow = outputRow;
  }

  let normalizedPixels = pixels;
  let normalizedChannels = channels;

  if (bitDepth === 16) {
    normalizedPixels = Buffer.alloc(width * height * channels);
    for (let srcIndex = 0, destIndex = 0; srcIndex < pixels.length; srcIndex += 2, destIndex += 1) {
      normalizedPixels[destIndex] = pixels[srcIndex];
    }
  }

  if (normalizedChannels === 1) {
    const expanded = Buffer.alloc(width * height * 3);
    for (let i = 0; i < normalizedPixels.length; i += 1) {
      expanded[i * 3] = normalizedPixels[i];
      expanded[i * 3 + 1] = normalizedPixels[i];
      expanded[i * 3 + 2] = normalizedPixels[i];
    }
    return { width, height, bytesPerPixel: 3, pixels: expanded };
  }

  return { width, height, bytesPerPixel: normalizedChannels, pixels: normalizedPixels };
}

function unfilterScanline(filterType, currentRow, outputRow, previousRow, bytesPerPixel) {
  switch (filterType) {
    case 0:
      currentRow.copy(outputRow);
      return;
    case 1:
      for (let i = 0; i < currentRow.length; i += 1) {
        const left = i >= bytesPerPixel ? outputRow[i - bytesPerPixel] : 0;
        outputRow[i] = (currentRow[i] + left) & 0xff;
      }
      return;
    case 2:
      for (let i = 0; i < currentRow.length; i += 1) {
        outputRow[i] = (currentRow[i] + previousRow[i]) & 0xff;
      }
      return;
    case 3:
      for (let i = 0; i < currentRow.length; i += 1) {
        const left = i >= bytesPerPixel ? outputRow[i - bytesPerPixel] : 0;
        const up = previousRow[i];
        outputRow[i] = (currentRow[i] + Math.floor((left + up) / 2)) & 0xff;
      }
      return;
    case 4:
      for (let i = 0; i < currentRow.length; i += 1) {
        const left = i >= bytesPerPixel ? outputRow[i - bytesPerPixel] : 0;
        const up = previousRow[i];
        const upLeft = i >= bytesPerPixel ? previousRow[i - bytesPerPixel] : 0;
        outputRow[i] = (currentRow[i] + paethPredictor(left, up, upLeft)) & 0xff;
      }
      return;
    default:
      throw new Error(`Unsupported PNG filter type ${filterType}`);
  }
}

function paethPredictor(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);

  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;
  const l = (max + min) / 2;

  if (delta === 0) {
    return { h: 0, s: 0, l };
  }

  const s = delta / (1 - Math.abs(2 * l - 1));
  let h = 0;

  switch (max) {
    case rn:
      h = ((gn - bn) / delta) % 6;
      break;
    case gn:
      h = (bn - rn) / delta + 2;
      break;
    default:
      h = (rn - gn) / delta + 4;
      break;
  }

  h *= 60;
  if (h < 0) h += 360;

  return { h, s, l };
}

function hslToRgb(h, s, l) {
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const hueSegment = h / 60;
  const x = chroma * (1 - Math.abs((hueSegment % 2) - 1));
  let [r1, g1, b1] = [0, 0, 0];

  if (hueSegment >= 0 && hueSegment < 1) [r1, g1, b1] = [chroma, x, 0];
  else if (hueSegment < 2) [r1, g1, b1] = [x, chroma, 0];
  else if (hueSegment < 3) [r1, g1, b1] = [0, chroma, x];
  else if (hueSegment < 4) [r1, g1, b1] = [0, x, chroma];
  else if (hueSegment < 5) [r1, g1, b1] = [x, 0, chroma];
  else [r1, g1, b1] = [chroma, 0, x];

  const match = l - chroma / 2;
  return {
    r: Math.round((r1 + match) * 255),
    g: Math.round((g1 + match) * 255),
    b: Math.round((b1 + match) * 255)
  };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeSlashes(input) {
  return input.split(path.sep).join('/');
}

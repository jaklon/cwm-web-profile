import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const CANDIDATES = [
  path.join(ROOT, 'src/assets/cwm_logo.png'),
  path.join(ROOT, 'public/images/logo/logo-cwm.jpg'),
  path.join(ROOT, 'public/images/logo/logo-cwm.png'),
];

const SOURCE = CANDIDATES.find(fs.existsSync);

if (!SOURCE) {
  console.error('❌ Logo file not found. Checked:\n' + CANDIDATES.join('\n'));
  process.exit(1);
}

console.log(`✅ Using source: ${SOURCE}`);

const OUT_DIR = path.join(ROOT, 'public');

const SIZES = [
  { size: 16,  name: 'favicon-16x16.png' },
  { size: 32,  name: 'favicon-32x32.png' },
  { size: 48,  name: 'favicon-48x48.png' },
  { size: 57,  name: 'apple-touch-icon-57x57.png' },
  { size: 60,  name: 'apple-touch-icon-60x60.png' },
  { size: 72,  name: 'apple-touch-icon-72x72.png' },
  { size: 76,  name: 'apple-touch-icon-76x76.png' },
  { size: 114, name: 'apple-touch-icon-114x114.png' },
  { size: 120, name: 'apple-touch-icon-120x120.png' },
  { size: 144, name: 'apple-touch-icon-144x144.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 70,  name: 'mstile-70x70.png' },
  { size: 150, name: 'mstile-150x150.png' },
  { size: 310, name: 'mstile-310x310.png' },
  { size: 512, name: 'og-image-icon.png' },
];

async function generate() {
  const base = await sharp(SOURCE)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();

  for (const { size, name } of SIZES) {
    const outPath = path.join(OUT_DIR, name);
    await sharp(base)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png()
      .toFile(outPath);
    console.log(`  ✓ Generated: ${name} (${size}x${size})`);
  }

  await sharp(base)
    .resize(32, 32)
    .png()
    .toFile(path.join(OUT_DIR, 'favicon.ico'));
  console.log('  ✓ Generated: favicon.ico (32x32 PNG fallback)');

  console.log('\n🎉 All favicons generated successfully!');
}

generate().catch(console.error);

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");

const CONVERT = [
  { file: "image.png", width: 1068 },
  { file: "agrovolt-system.png", width: 1398 },
];

for (const { file, width } of CONVERT) {
  const input = path.join(pub, file);
  const output = input.replace(/\.png$/, ".webp");
  await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
  console.log(`✓ ${file} → ${path.basename(output)}`);
}

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="55%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g transform="translate(850 330) scale(0.92)" opacity="0.55">
    <rect x="0" y="0" width="360" height="200" rx="14" fill="url(#panel)" stroke="#ffffff" stroke-opacity="0.5" stroke-width="3" transform="rotate(-12)"/>
    <rect x="170" y="180" width="18" height="220" fill="#ffffff" fill-opacity="0.65"/>
    <rect x="60" y="420" width="240" height="14" rx="7" fill="#ffffff" fill-opacity="0.45"/>
    <circle cx="300" cy="-90" r="64" fill="#fde047" fill-opacity="0.95"/>
  </g>
  <text x="90" y="230" font-family="DejaVu Sans, Arial, sans-serif" font-size="116" font-weight="bold" fill="#ffffff">AgroVolt</text>
  <text x="94" y="310" font-family="DejaVu Sans, Arial, sans-serif" font-size="43" font-weight="bold" fill="#ecfccb">Agrovoltaica para explotaciones</text>
  <text x="94" y="368" font-family="DejaVu Sans, Arial, sans-serif" font-size="43" font-weight="bold" fill="#ecfccb">agrícolas</text>
  <rect x="94" y="420" width="660" height="76" rx="38" fill="#ffffff" fill-opacity="0.16"/>
  <text x="134" y="470" font-family="DejaVu Sans, Arial, sans-serif" font-size="34" font-weight="bold" fill="#ffffff">Protección · Agua · Energía propia</text>
  <text x="94" y="566" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#ffffff" fill-opacity="0.85">agrovolt.es</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile(path.join(pub, "og-image.png"));
console.log("✓ og-image.png (1200x630)");

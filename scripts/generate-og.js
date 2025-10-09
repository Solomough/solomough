const fs = require('fs')
const path = require('path')

const out = path.join(__dirname, '../public/og-image.svg')
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#07060a"/>
      <stop offset="100%" stop-color="#0b0f1a"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" x2="1">
      <stop offset="0%" stop-color="#e6c768"/>
      <stop offset="100%" stop-color="#d4af37"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" />
  <g transform="translate(70,120)">
    <text x="0" y="0" font-family="Playfair Display, serif" font-size="48" fill="white">Solomon Moughkaa Zahemen</text>
    <text x="0" y="62" font-family="Inter, sans-serif" font-size="28" fill="#cbd5e1">Faith + Action = Growth</text>
  </g>
  <!-- Simple growth path -->
  <g transform="translate(100,300)" stroke="url(#gold)" stroke-width="8" fill="none" stroke-linecap="round">
    <path d="M0 120 L80 80 L160 100 L240 50 L320 30 L400 10" stroke-linejoin="round"/>
  </g>
  <g transform="translate(100,300)">
    <text x="0" y="150" font-family="Inter, sans-serif" font-size="18" fill="#9aa7b9">Out of Darkness to Light — Solomough</text>
  </g>
</svg>`

fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, svg)
console.log('OG image generated at', out)

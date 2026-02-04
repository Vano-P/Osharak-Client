import sharp from 'sharp'
import fs from 'fs'

const SRC = 'assets-src/og/og.png'
const OUT = 'public/og-image.jpg'

fs.mkdirSync('public', { recursive: true })

await sharp(SRC)
    .resize(1200, 630)
    .jpeg({ quality: 85 })
    .toFile(OUT)

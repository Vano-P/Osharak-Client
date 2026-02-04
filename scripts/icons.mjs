import sharp from 'sharp'
import fs from 'fs'

const SRC = 'assets-src/icons/favicon.png'
const OUT = 'public'

fs.mkdirSync(OUT, { recursive: true })

const icons = [
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' }
]

for (const icon of icons) {
  await sharp(SRC)
      .resize(icon.size, icon.size)
      .png()
      .toFile(`${ OUT }/${ icon.name }`)
}

// favicon.ico (32x32)
await sharp(SRC)
    .resize(32, 32)
    .toFile(`${ OUT }/favicon.ico`)

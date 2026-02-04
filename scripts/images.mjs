import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const SRC_DIR = 'assets-src/images'
const OUT_DIR = 'public/images'

fs.mkdirSync(OUT_DIR, { recursive: true })

const sizes = [ 800, 1600 ]

for (const file of fs.readdirSync(SRC_DIR)) {
  const input = path.join(SRC_DIR, file)
  const name = path.parse(file).name

  for (const size of sizes) {
    await sharp(input)
        .resize({ width: size })
        .webp({ quality: 82 })
        .toFile(`${ OUT_DIR }/${ name }-${ size }.webp`)
  }
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Automatically copy fonts from public/fonts to src/fonts so Vite can bundle them relatively
try {
  const srcFontsDir = path.resolve(process.cwd(), 'src/fonts')
  const publicFontsDir = path.resolve(process.cwd(), 'public/fonts')

  if (fs.existsSync(publicFontsDir)) {
    if (!fs.existsSync(srcFontsDir)) {
      fs.mkdirSync(srcFontsDir, { recursive: true })
    }
    const files = fs.readdirSync(publicFontsDir)
    files.forEach(file => {
      fs.copyFileSync(path.join(publicFontsDir, file), path.join(srcFontsDir, file))
    })
  }
} catch (e) {
  console.error('Failed to copy fonts:', e)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Amora/',
})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/DanBank/', // Add this so links work on GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        dashboard: './dashboard.html' 
      }
    }
  }
})

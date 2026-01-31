import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  base: '/DanBank/', 
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        dashboard: './dashboard.html'
      }
    }
  }
})
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),  ],
})

import { svelte } from '@sveltejs/vite-plugin-svelte'   
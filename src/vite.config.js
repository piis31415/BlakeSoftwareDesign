import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        announcements: resolve(__dirname, 'announcements/index.html'),
        dashboard: resolve(__dirname, 'dashboard/index.html')
      }
    }
  },
  plugins: [
    svelte()
  ]
})

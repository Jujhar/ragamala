import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({

  define: {
      'process.env.NODE_ENV': '"production"',
      'process.argv': '"0"'
    },
  plugins: [svelte()]
})

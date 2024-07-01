import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      pagesDir: 'src/pages',
      extensions: ['vue'],
      exclude: ['**/components/*.vue'],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // find: /^~(.*)$/,
      // replacement: 'node_modules/$1',
    },
  },
  build: { target: 'es2020' },
  optimizeDeps: {
    esbuildOptions: { target: 'es2020', supported: { bigint: true } },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

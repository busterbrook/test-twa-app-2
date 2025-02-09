import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
/*
export default defineConfig({
  plugins: [react()],
  base: "/test-twa-app-2/"
})
 */

export default defineConfig({
  // ...other config settings
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ['buffer/', 'Buffer'] })],
    },
  },
  base: "/test-twa-app-2/"
})
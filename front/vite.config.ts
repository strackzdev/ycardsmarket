import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/backend-proxy": {
        target: "https://vps.strackzdev.com:8443/api/v1",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/backend-proxy/, "")
      }
    }
  },
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

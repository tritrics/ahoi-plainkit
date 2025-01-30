import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const FRONTEND_DIR = process.env.NODE_ENV === 'production' ? '/frontend/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: FRONTEND_DIR,
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    host: true,
    port: 8080,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@utils': 'ahoi-vue/utils'
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/styles/mixins.sass"
        `
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        dir: './dist' + FRONTEND_DIR
      }
    }
  }
})

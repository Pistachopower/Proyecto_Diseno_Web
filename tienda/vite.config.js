// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vue(), ghPages()],
  base: "Proyecto_Diseno_Web"
});

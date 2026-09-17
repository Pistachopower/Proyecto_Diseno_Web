// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Proyecto_Diseno_Web/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vue()],
});

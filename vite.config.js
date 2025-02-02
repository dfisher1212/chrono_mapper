import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 5173
  }
});
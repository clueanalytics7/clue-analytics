import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/', // for firebase and '/clue-analytics/' for GitHub Pages!
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  optimizeDeps: {
    exclude: ['react-router-dom'],
  },
});




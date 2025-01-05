import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Membuka browser otomatis saat menjalankan `npm run dev`
  },
  build: {
    outDir: 'dist', // Output folder untuk build
  },
  resolve: {
    alias: {
      '@': '/src', // Alias untuk direktori src
    },
  },
  base: '/', // Pastikan sesuai dengan "homepage" di package.json
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',  // This allows external access to the dev server
    port: 3000,       // Changes the port to 3000
    open: true,       // Opens the browser automatically
  },
});

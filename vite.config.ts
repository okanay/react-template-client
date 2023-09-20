import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const apiTarget = process.env.API_ROUTE || 'http://localhost:8000/';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: apiTarget,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
});

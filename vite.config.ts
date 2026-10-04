import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Polling keeps hot reload reliable on network / mapped drives.
    watch: { usePolling: true, interval: 300 },
  },
});

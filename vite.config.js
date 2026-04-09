import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Serve static assets from V2/public (where project images live)
  publicDir: 'V2/public',
  server: {
    fs: {
      allow: ['..'],
    },
  },
})

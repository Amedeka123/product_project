import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/products': {
        target: 'http://localhost:5000', // Backend API URL
        changeOrigin: true,
        secure: false,  // Use false if you're using HTTP, true for HTTPS
      },
    },
  },
 
})

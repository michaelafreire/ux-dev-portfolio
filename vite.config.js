import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ux-dev-portfolio/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure Vite resolves .jsx files
  },
})

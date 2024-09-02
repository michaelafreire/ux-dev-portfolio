import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ux-dev-portfolio/', // Ensure this matches your GitHub repository name
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Add alias for src directory
    },
    extensions: ['.js', '.jsx'],
  },
});

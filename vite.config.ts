import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@page': '/src/page'
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Define a custom naming pattern for JavaScript chunks
        chunkFileNames: 'js/[name]-[hash].js',
      },
    },
  },
  plugins: [react()],
})

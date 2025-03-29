import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react-swc'
import path from "path"

export default defineConfig({
  plugins: [
    tailwindcss(), 
    react()
  ],
  build: {
    rollupOptions: {
      external: [], 
    }
  },
  optimizeDeps: {
    include: ['react-hook-form'] 
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shadcn": path.resolve(__dirname, "./src/components/ui"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@home": path.resolve(__dirname, "./src/modules/home"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@transactions": path.resolve(__dirname, "./src/modules/transactions"),
      "@history": path.resolve(__dirname, "./src/modules/history"),
    },
  },
})
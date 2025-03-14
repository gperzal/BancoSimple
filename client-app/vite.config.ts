import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@shadcn": path.resolve(__dirname, "./src/components/ui"),
        "@modules": path.resolve(__dirname, "./src/modules"),
        "@home": path.resolve(__dirname, "./src/modules/home"),
        "@context": path.resolve(__dirname, "./src/context"),
        "@routes": path.resolve(__dirname, "./src/routes"),
      },
    },
})

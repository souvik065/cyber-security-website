import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Should be "dist", not "build"
  },
  base:"/cyber-security-website/",
  plugins: [
    tailwindcss(),
    react()],
})

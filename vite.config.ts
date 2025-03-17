import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/cyber-security-website/", // Ensure correct base path
  build: {
    outDir: "dist", // Correct output folder
  },
  plugins: [react()],
})

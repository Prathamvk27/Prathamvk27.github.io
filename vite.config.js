import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),tailwindcss()],
  define: {
    'import.meta.env.VITE_APP_TITLE': '"Pratham\'s Portfolio"'
  },
  resolve: {
    alias: {
      "a": path.resolve(__dirname, "./src"),
    }
  }
})


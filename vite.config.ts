import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Для GitHub Pages: задайте VITE_BASE=/имя-репозитория/ или используйте base: './'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || './',
})

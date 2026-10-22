import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : le build marche aussi sur GitHub Pages (sous-dossier /PortFolio/)

export default defineConfig({
  plugins: [react()],
  base: './',
  assetsInclude: ['**/*.JPG'],
})
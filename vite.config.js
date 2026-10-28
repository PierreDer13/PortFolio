// =============================================================
// vite.config.js — Configuration de Vite (serveur de dev + build)
// =============================================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : le build marche aussi sur GitHub Pages (sous-dossier /PortFolio/)

export default defineConfig({
  plugins: [react()],             // active JSX et le rechargement à chaud de React
  base: './',
  assetsInclude: ['**/*.JPG'],    // traite les photos en .JPG majuscule comme des images
})
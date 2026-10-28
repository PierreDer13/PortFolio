// =============================================================
// main.jsx — Point d'entrée de l'application
// Monte le composant App dans la <div id="root"> de index.html
// et charge le style global (index.css).
// =============================================================
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// createRoot : React prend le contrôle de la div #root et y dessine l'application
// StrictMode : mode développement qui signale les erreurs courantes (sans effet en production)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

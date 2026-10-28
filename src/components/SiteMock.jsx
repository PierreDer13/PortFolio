// =============================================================
// components/SiteMock.jsx — Mini-maquette du portfolio en CSS
// (visuel de la fiche "This Portfolio")
// =============================================================
import './SiteMock.css'

export default function SiteMock() {
  return (
    // aria-hidden : purement décoratif, les lecteurs d'écran l'ignorent
    <div className="site-mock" aria-hidden="true">
      {/* Barre du navigateur avec ses 3 pastilles */}
      <div className="mock-browser">
        <span></span><span></span><span></span>
      </div>
      <div className="mock-announce"></div>
      <div className="mock-header"></div>
      {/* Bannière bleue : photo ronde + 2 lignes de texte */}
      <div className="mock-hero">
        <span className="mock-avatar"></span>
        <span className="mock-lines"><i></i><i></i></span>
      </div>
      {/* Les 3 cartes de l'accueil */}
      <div className="mock-cards">
        <span></span><span></span><span></span>
      </div>
    </div>
  )
}

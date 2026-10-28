// =============================================================
// components/Footer.jsx — Pied de page discret (toutes les pages)
// =============================================================
import './Footer.css'

export default function Footer() {
  // L'année se met à jour toute seule : pas besoin de la modifier chaque janvier
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>
        © {year} Pierre DER GAZERIAN
        <span aria-hidden="true"> · </span>
        Built with React
      </p>
    </footer>
  )
}

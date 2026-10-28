// =============================================================
// components/Header.jsx — Bandeau bleu avec le titre du site
// =============================================================
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <h1>
        {/* Le titre est un lien vers l'accueil ('#/' → route '/' dans App.jsx).
            Son style (blanc, sans soulignement) est dans index.css */}
        <a href="#/">
          {/* alt="" : le logo est décoratif, le nom juste à côté suffit aux lecteurs d'écran */}
          <img src={logo} alt="" className="header-logo" />
          Pierre DER GAZERIAN | Digital Portfolio
        </a>
      </h1>
    </header>
  )
}

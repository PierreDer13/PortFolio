// =============================================================
// components/Header.jsx — Bandeau bleu avec le titre du site
// =============================================================
export default function Header() {
  return (
    <header>
      <h1>
        {/* Le titre est un lien vers l'accueil ('#/' → route '/' dans App.jsx).
            Son style (blanc, sans soulignement) est dans index.css */}
        <a href="#/">Pierre DER GAZERIAN | Digital Portfolio</a>
      </h1>
    </header>
  )
}

// =============================================================
// components/CategoryCard.jsx — Carte de l'accueil, au même
// format que les fiches projets (ProjectCard) : photo + badge,
// marque, titre, texte et bouton
// =============================================================
import '../pages/Projects.css' // on réutilise les styles des fiches projets

export default function CategoryCard({ title, brand, badge, text, cta, href, img, alt }) {
  return (
    <article className="project-card">
      {/* ---- Photo + badge ---- */}
      <div className="project-media">
        {badge && <span className="project-badge is-live">{badge}</span>}
        <img className="project-photo" src={img} alt={alt} />
      </div>

      {/* ---- Texte ---- */}
      <div className="project-body">
        {brand && <p className="project-brand">{brand}</p>}
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{text}</p>

        {/* margin-top: auto (via la classe) → le bouton reste collé en bas,
            les 3 boutons sont alignés même si les textes n'ont pas la même longueur */}
        <a className="project-cta" href={href} style={{ marginTop: 'auto' }}>
          {cta}
        </a>
      </div>
    </article>
  )
}
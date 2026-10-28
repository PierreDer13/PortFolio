// =============================================================
// components/ProjectCard.jsx — Une fiche projet façon "article"
// Decathlon : visuel + badge, coloris, marque, titre, tags,
// statut (à la place du prix) et bouton.
// =============================================================
import Mug3D from './Mug3D'
import ComingSoon from './ComingSoon'
import SiteMock from './SiteMock'

export default function ProjectCard({ project }) {
  // "Destructuring" : on sort chaque champ de l'objet dans sa propre variable
  // (évite d'écrire project.title, project.tags, etc. partout)
  const { status, badge, brand, title, tagline, description, tags, context, swatches, href, cta, preview, repo, repoCta } = project
  const isLive = status === 'live'
  
  return (
    // <article> : balise sémantique pour un contenu autonome (une fiche)
    <article className="project-card">
      {/* ---- Visuel ---- */}
      {/* Template string pour ajouter la classe 'is-cozy' (fond crème) seulement pour CozyDesk */}
      <div className={`project-media ${preview === 'mug' ? 'is-cozy' : ''}`}>
        {/* Badge jaune (en ligne) ou gris foncé (en cours) */}
        <span className={`project-badge ${isLive ? 'is-live' : 'is-wip'}`}>{badge}</span>
        {/* Choix du visuel selon le champ `preview` de data.js */}
        {preview === 'mug' ? <Mug3D /> : preview === 'site' ? <SiteMock /> : <ComingSoon />}
      </div>

      {/* ---- Texte ---- */}
      <div className="project-body">
        {/* condition && <élément> : n'affiche l'élément que si la condition est vraie */}
        {swatches.length > 0 && (
          <ul className="project-swatches" aria-label="Project color palette">
            {swatches.map((c) => (
              // style={{ ... }} : CSS en ligne, ici la couleur de chaque pastille
              <li key={c} style={{ background: c }} title={c}></li>
            ))}
          </ul>
        )}

        <p className="project-brand">{brand}</p>
        <h2 className="project-title">{title}</h2>
        <p className="project-tagline">{tagline}</p>
        <p className="project-desc">{description}</p>

        <ul className="project-tags">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Statut avec pastille verte/orange (dessinée en CSS avec ::before) */}
        <div className="project-status-row">
          <span className={`project-status ${isLive ? 'is-live' : 'is-wip'}`}>
            {isLive ? 'Online' : 'In progress'}
          </span>
          {context && <span className="project-context">{context}</span>}
        </div>

        {/* Bouton : vrai lien s'il y a une URL, sinon bouton grisé non cliquable */}
        {href ? (
          // target="_blank" : nouvel onglet ; rel="noreferrer" : sécurité
          <a className="project-cta" href={href} target="_blank" rel="noreferrer">
            {cta} →
          </a>
        ) : (
          <span className="project-cta is-disabled" aria-disabled="true">
            {cta}
          </span>
        )}
     
        {/* 2e bouton (contour bleu) : seulement si le projet a un lien `repo` dans data.js */}
        {repo && (
          <a className="project-cta is-secondary" href={repo} target="_blank" rel="noreferrer">
            {repoCta}
          </a>
        )}

      </div>
    </article>
  )
}

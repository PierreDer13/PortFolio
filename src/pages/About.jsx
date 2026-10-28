// =============================================================
// pages/About.jsx — Page About façon fiche produit Decathlon :
// galerie photos à gauche, infos + choix du domaine à droite,
// puis des onglets dépliables (Profile, Skills, Background...)
// =============================================================
import { useState } from 'react'
import { CONTACT_EMAIL, RESUME_URL } from '../data'
import { gallery, domains, specs, profile, skills, background, interests } from '../aboutData'
import './Projects.css' // boutons et badges communs (project-cta, project-badge...)
import './About.css'

export default function About() {
  // Photo affichée en grand (index dans `gallery`)
  const [photo, setPhoto] = useState(0)
  // Domaine choisi : 'data' au départ
  const [domainId, setDomainId] = useState('data')
  // .find() renvoie le 1er élément qui correspond
  const domain = domains.find((d) => d.id === domainId)

  return (
    <main className="projects-page about-page">
      {/* Fil d'Ariane */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="#/">Home</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">About</span>
      </nav>

      {/* ======== Haut de la fiche : 2 colonnes ======== */}
      <section className="about-product">
        {/* ---- Colonne gauche : galerie ---- */}
        <div className="about-gallery">
          <div className="about-main-photo">
            <span className="project-badge is-live">Open to work</span>
            <img src={gallery[photo].src} alt={gallery[photo].alt} />
          </div>
          {/* Miniatures : un clic change la grande photo */}
          <div className="about-thumbs">
            {gallery.map((p, i) => (
              <button
                key={p.src}
                type="button"
                className={i === photo ? 'is-active' : ''}
                aria-label={`Show photo ${i + 1}`}
                aria-pressed={i === photo}
                onClick={() => setPhoto(i)}
              >
                <img src={p.src} alt="" />
              </button>
            ))}
          </div>
        </div>

        {/* ---- Colonne droite : infos ---- */}
        <div className="about-info">
          <p className="project-brand">Epitech · Pré-MSc</p>
          <h1 className="about-name">Pierre DER GAZERIAN</h1>
          <p className="about-pitch">{domain.pitch}</p>

          {/* Statut, à la place du prix */}
          <p className="project-status is-live about-status">Available from January</p>

          {/* Choix du domaine, comme le choix de taille sur Decathlon */}
          <div className="about-domains">
            <p className="about-label">
              Field: <strong>{domain.label}</strong>
            </p>
            <div className="about-domain-buttons" role="group" aria-label="Choose a field">
              {domains.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className={d.id === domainId ? 'is-active' : ''}
                  aria-pressed={d.id === domainId}
                  onClick={() => setDomainId(d.id)}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Caractéristiques */}
          <ul className="about-specs">
            {specs.map((s) => (
              <li key={s.text}>
                <span aria-hidden="true">{s.icon}</span> {s.text}
              </li>
            ))}
          </ul>

          {/* Boutons */}
          <a className="project-cta" href={`mailto:${CONTACT_EMAIL}`}>
            Contact me →
          </a>
          <a className="project-cta is-secondary" href={RESUME_URL} target="_blank" rel="noreferrer">
            View my resume
          </a>
        </div>
      </section>

      {/* ======== Onglets dépliables ========
          <details>/<summary> : accordéon natif du navigateur,
          ouvert/fermé au clic sans aucun useState. `open` = ouvert au départ */}
      <section className="about-tabs">
        <details open>
          <summary>Profile</summary>
          {profile.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </details>

        <details open>
          <summary>Skills</summary>
          {skills.map((s) => (
            <div key={s.group} className="about-skill-group">
              <h3>{s.group}</h3>
              <ul className="project-tags">
                {s.items.map((item) => (
                  // Compétence mise en avant si elle fait partie du domaine choisi
                  <li key={item} className={domain.highlight.includes(item) ? 'is-highlight' : ''}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="about-note">Highlighted: key skills for {domain.label}.</p>
        </details>

        <details>
          <summary>Background</summary>
          <ol className="about-timeline">
            {background.map((b) => (
              <li key={b.title + b.when}>
                <span className="about-when">{b.when}</span>
                <span>
                  <strong>{b.title}</strong>
                  {b.place && ` — ${b.place}`}
                </span>
              </li>
            ))}
          </ol>
        </details>

        <details>
          <summary>Interests</summary>
          {interests.map((it) => (
            <p key={it.title}>
              <span aria-hidden="true">{it.icon}</span> <strong>{it.title}</strong> — {it.text}
            </p>
          ))}
        </details>
      </section>
    </main>
  )
}
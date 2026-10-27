// =============================================================
// pages/Home.jsx — Page d'accueil : photo + cartes de catégories
// + résultats de recherche dans les projets
// =============================================================
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProjectCard from '../components/ProjectCard'
import { categories, projects } from '../data'
import './Projects.css' // style des fiches projet (.project-card…)

// Met en minuscules et retire TOUS les espaces :
// "Cozy Desk" et "cozydesk" deviennent identiques
const normalize = (text) => text.toLowerCase().replace(/\s+/g, '')

// `query` arrive depuis App.jsx (le texte de la barre de recherche)
export default function Home({ query }) {
  const q = normalize(query)

  // 1) Cartes de catégories dont le titre ou le texte contient q
  //    (si q est vide, .includes('') est toujours vrai → tout s'affiche)
  const filtered = categories.filter((c) => normalize(c.title + c.text).includes(q))

  // 2) Projets qui correspondent : titre, stack, textes ou tags
  //    Seulement si l'utilisateur a tapé quelque chose (q non vide)
  const matchingProjects = q
    ? projects.filter((p) =>
      normalize([p.title, p.brand, p.tagline, p.description, ...p.tags].join(' ')).includes(q)
    )
    : []

  return (
    <>
      {/* L'image d'accueil disparaît dès qu'on tape : les résultats remontent en haut */}
      {!q && <Hero />}

      {/* On cache les catégories (et leur "Aucun résultat") si seul un projet correspond */}
      {(filtered.length > 0 || matchingProjects.length === 0) && <Categories items={filtered} />}

      {/* Résultats dans les projets : n'apparaît que s'il y en a */}
      {matchingProjects.length > 0 && (
        <section className="projects-page" aria-labelledby="results-title">
          <h2 id="results-title" className="home-results-title">
            Projects matching “{query.trim()}”
          </h2>
          <div className="projects-grid">
            {matchingProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
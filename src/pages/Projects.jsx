// =============================================================
// pages/Projects.jsx — Page "rayon" façon Decathlon :
// fil d'Ariane, titre + compteur, filtres, grille de fiches
// =============================================================
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import './Projects.css' // le style n'est chargé qu'avec cette page

// Les boutons de filtre. `id` correspond au `status` des projets dans data.js
const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Online' },
  { id: 'wip', label: 'In progress' },
]

export default function Projects({ query }) {
  // Filtre sélectionné ('all' au départ)
  const [filter, setFilter] = useState('all')

  // ---- 1) Recherche texte ----
  const q = query.trim().toLowerCase()
  // Un projet "matche" si q apparaît dans son titre, sa stack, ses textes ou ses tags
  // ...p.tags = "spread" : déplie le tableau de tags dans la liste
  const matchesQuery = (p) =>
    [p.title, p.brand, p.tagline, p.description, ...p.tags].join(' ').toLowerCase().includes(q)

  const searched = projects.filter(matchesQuery)

  // ---- 2) Filtre par statut, appliqué APRÈS la recherche ----
  const visible = searched.filter((p) => filter === 'all' || p.status === filter)

  // Nombre de projets par filtre, affiché dans les boutons : "Online (1)"
  const count = (id) => searched.filter((p) => id === 'all' || p.status === id).length

  return (
    <main className="projects-page">
      {/* Fil d'Ariane : Home › Projects */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="#/">Home</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Projects</span>
      </nav>

      {/* Titre + compteur, avec le "s" seulement s'il y a plusieurs projets */}
      <div className="projects-head">
        <h1>My projects</h1>
        <p className="projects-count">
          {visible.length} project{visible.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Boutons de filtre : un clic change `filter` → la page se ré-affiche */}
      <div className="projects-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            // classe "is-active" sur le bouton sélectionné (fond bleu en CSS)
            className={filter === f.id ? 'is-active' : ''}
            // aria-pressed : indique aux lecteurs d'écran que le bouton est enfoncé
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label} ({count(f.id)})
          </button>
        ))}
      </div>

      {/* Grille de fiches, ou message si rien ne correspond */}
      {visible.length > 0 ? (
        <div className="projects-grid">
          {visible.map((p) => (
            // `key` aide React à savoir quelle fiche est laquelle entre deux rendus
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <p className="no-result">Aucun projet ne correspond.</p>
      )}
    </main>
  )
}

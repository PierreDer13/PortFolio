import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'
import './Projects.css'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Online' },
  { id: 'wip', label: 'In progress' },
]

export default function Projects({ query }) {
  const [filter, setFilter] = useState('all')

  const q = query.trim().toLowerCase()
  const matchesQuery = (p) =>
    [p.title, p.brand, p.tagline, p.description, ...p.tags].join(' ').toLowerCase().includes(q)

  const searched = projects.filter(matchesQuery)
  const visible = searched.filter((p) => filter === 'all' || p.status === filter)
  const count = (id) => searched.filter((p) => id === 'all' || p.status === id).length

  return (
    <main className="projects-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="#/">Home</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Projects</span>
      </nav>

      <div className="projects-head">
        <h1>My projects</h1>
        <p className="projects-count">
          {visible.length} project{visible.length > 1 ? 's' : ''}
        </p>
      </div>

      <div className="projects-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={filter === f.id ? 'is-active' : ''}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label} ({count(f.id)})
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="projects-grid">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <p className="no-result">Aucun projet ne correspond.</p>
      )}
    </main>
  )
}

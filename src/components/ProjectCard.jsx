import Mug3D from './Mug3D'
import ComingSoon from './ComingSoon'

export default function ProjectCard({ project }) {
  const { status, badge, brand, title, tagline, description, tags, context, swatches, href, cta, preview } = project
  const isLive = status === 'live'

  return (
    <article className="project-card">
      <div className={`project-media ${preview === 'mug' ? 'is-cozy' : ''}`}>
        <span className={`project-badge ${isLive ? 'is-live' : 'is-wip'}`}>{badge}</span>
        {preview === 'mug' ? <Mug3D /> : <ComingSoon />}
      </div>

      <div className="project-body">
        {swatches.length > 0 && (
          <ul className="project-swatches" aria-label="Project color palette">
            {swatches.map((c) => (
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

        <div className="project-status-row">
          <span className={`project-status ${isLive ? 'is-live' : 'is-wip'}`}>
            {isLive ? 'Online' : 'In progress'}
          </span>
          {context && <span className="project-context">{context}</span>}
        </div>

        {href ? (
          <a className="project-cta" href={href} target="_blank" rel="noreferrer">
            {cta} →
          </a>
        ) : (
          <span className="project-cta is-disabled" aria-disabled="true">
            {cta}
          </span>
        )}
      </div>
    </article>
  )
}

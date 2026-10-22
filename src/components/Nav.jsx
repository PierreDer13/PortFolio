// =============================================================
// components/Nav.jsx — Barre de navigation jaune (sticky)
// =============================================================
import { navLinks } from '../data'

// `route` vient d'App.jsx : '/' ou '/projects'
export default function Nav({ route }) {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <ul>
        {/* Un <li> par lien défini dans data.js */}
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              // Si le lien pointe vers la page affichée ('#' + '/projects' === '#/projects'),
              // on ajoute aria-current="page" : ça signale la page active aux lecteurs
              // d'écran ET ça sert de sélecteur CSS pour souligner le lien.
              // `undefined` = l'attribut n'est pas ajouté du tout.
              aria-current={link.href === '#' + route ? 'page' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

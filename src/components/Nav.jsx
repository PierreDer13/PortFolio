import { navLinks } from '../data'

export default function Nav({ route }) {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
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

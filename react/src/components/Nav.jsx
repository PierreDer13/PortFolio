import { navLinks } from '../data'

export default function Nav() {
  return (
    <nav className="main-nav" aria-label="Main navigation">
      <ul>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

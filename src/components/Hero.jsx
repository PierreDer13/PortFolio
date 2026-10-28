// =============================================================
// components/Hero.jsx — Bannière "offre du moment" façon Decathlon
// =============================================================
import portrait from '../assets/portrait.png'
import { PROJECTS_URL, CONTACT_URL, RESUME_PDF } from '../data'

export default function Hero() {
  return (
    <section className="hero-banner" aria-label="Introduction">
      <img src={portrait} alt="Pierre DER GAZERIAN" className="hero-portrait" />

      <div className="hero-text">
        {/* Petite étiquette jaune, comme les badges promo */}
        <p className="hero-badge">Open to work</p>
        <h2>Data &amp; AI apprentice · 33 months</h2>
        <p>Available now — Marseille and anywhere in France</p>
      </div>

      <div className="hero-actions">
        <a href={PROJECTS_URL} className="hero-btn">View my projects</a>
        {/* download = le navigateur télécharge le fichier au lieu de quitter le site */}
        <a href={RESUME_PDF} download className="hero-btn is-download">
          ⬇ Download my resume
        </a>
        <a href={CONTACT_URL} className="hero-btn is-outline">Contact me</a>
      </div>
    </section>
  )
}
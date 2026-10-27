// =============================================================
// pages/Contact.jsx — Page Contact façon "service client" Decathlon
// =============================================================
import { useState } from 'react'
import { CONTACT_EMAIL, contactChannels } from '../data'
import './Projects.css' // réutilise .projects-page, .breadcrumb, .project-cta
import './Contact.css'

export default function Contact() {
  // Un seul objet d'état pour les 3 champs du formulaire
  const [form, setForm] = useState({ name: '', company: '', message: '' })

  // Un seul handler pour tous les champs : on lit le `name` de l'input
  // et on met à jour la bonne clé ([name] = clé "calculée")
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value }) // ...form = on garde les autres champs
  }

  const handleSubmit = (e) => {
    e.preventDefault() // empêche le rechargement de la page
    // Pas de backend : on ouvre la messagerie avec sujet + message pré-remplis.
    // encodeURIComponent protège les espaces, accents, retours à la ligne…
    const subject = encodeURIComponent(`Apprenticeship — ${form.company || form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}${form.company ? ` (${form.company})` : ''}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <main className="projects-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="#/">Home</a>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Contact</span>
      </nav>

      <h1 className="contact-title">Contact me</h1>
      <p className="contact-intro">
        Looking for a 33-month apprenticeship in data &amp; AI, or cybersecurity &amp; cloud.
        Based in Marseille, open to anywhere in France.
      </p>

      {/* Cartes de contact, générées depuis data.js */}
      <div className="contact-grid">
        {contactChannels.map((c) => (
          <article key={c.title} className="contact-card">
            <span className="contact-icon" aria-hidden="true">{c.icon}</span>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
            <a
              className="project-cta"
              href={c.href}
              // Liens externes : nouvel onglet + sécurité (noopener)
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
            >
              {c.cta}
            </a>
          </article>
        ))}
      </div>

      {/* Formulaire → ouvre la messagerie */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send me a message</h2>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Company
          <input name="company" value={form.company} onChange={handleChange} />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit" className="project-cta">Send →</button>
      </form>
    </main>
  )
}
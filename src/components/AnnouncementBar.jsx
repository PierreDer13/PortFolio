// =============================================================
// components/AnnouncementBar.jsx — Bandeau jaune défilant « Open to work »
// Le message est répété puis dupliqué pour que le défilement CSS
// (animation scroll-left dans index.css) boucle sans à-coup.
// =============================================================
import { CONTACT_EMAIL } from '../data'

// Texte du bandeau, modifiable ici
const MESSAGE = 'Open to work: 33-month data & AI apprenticeship starting in January'

// Un groupe = 3 messages ; on l'affiche 2 fois pour la boucle infinie du défilement
function Group({ hidden }) {
  return (
    // aria-hidden sur la copie : les lecteurs d'écran ne lisent le message qu'une fois
    <div className="announcement-group" aria-hidden={hidden || undefined}>
      {[0, 1, 2].map((i) => (
        <p key={i}>
          {MESSAGE}
          <a href={`mailto:${CONTACT_EMAIL}`}>&nbsp;&nbsp; Contact me →</a>
        </p>
      ))}
    </div>
  )
}

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {/* 2 groupes identiques côte à côte : quand le 1er sort à gauche, le 2e prend sa place */}
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}

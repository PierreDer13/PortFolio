import { CONTACT_EMAIL } from '../data'

const MESSAGE = 'Open to work: alternance data/IA de 33 mois à partir de janvier'

// Un groupe = 3 messages ; on l'affiche 2 fois pour la boucle infinie du défilement
function Group({ hidden }) {
  return (
    <div className="announcement-group" aria-hidden={hidden || undefined}>
      {[0, 1, 2].map((i) => (
        <p key={i}>
          {MESSAGE}
          <a href={`mailto:${CONTACT_EMAIL}`}>&nbsp;&nbsp; Me contacter →</a>
        </p>
      ))}
    </div>
  )
}

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}

// =============================================================
// aboutData.js — Contenu de la page About (fiche "produit")
// Tout le texte est ici : modifie librement sans toucher à About.jsx
// =============================================================
import photo1 from './assets/portrait.jpg'
import photo2 from './assets/IMG_0560.JPG'
import photo3 from './assets/IMG_0546.JPG'
import photo4 from './assets/IMG_0565.JPG'

// Galerie à gauche : la 1re photo est affichée en grand au départ
export const gallery = [
    { src: photo1, alt: 'Pierre DER GAZERIAN, portrait' },
    { src: photo2, alt: 'Pierre writing in a notebook outdoors' },
    { src: photo3, alt: 'Pierre sitting on a stone wall' },
    { src: photo4, alt: 'Pierre working outdoors' },
]

// Les 2 "tailles" à choisir, comme sur une fiche Decathlon.
// Chaque domaine change l'accroche et les compétences mises en avant.
// ⚠️ Les noms dans `highlight` doivent être écrits EXACTEMENT comme dans `skills` plus bas
export const domains = [
    {
        id: 'data',
        label: 'Data & AI',
        pitch:
            'Looking for a 33-month apprenticeship in data and AI: data analysis, data engineering and machine learning.',
        highlight: ['SQL', 'PostgreSQL', 'R', 'Java', 'React'],
    },
    {
        id: 'cyber',
        label: 'Cybersecurity & Cloud',
        pitch:
            'Also open to a 33-month apprenticeship in cybersecurity and cloud: systems, networks, security and AWS.',
        highlight: ['Bash', 'PowerShell', 'SQL', 'AWS (in progress)'],
    },
]

// "Caractéristiques" sous le titre (icône + texte)
export const specs = [
    { icon: '📍', text: 'Marseille and anywhere in France' }, 
    { icon: '🚗', text: 'Driving licence B + A, own vehicle' },
    { icon: '🗣️', text: 'English B2' },
    { icon: '📅', text: 'Available now · 33-month apprenticeship' },
]

// ---------- Onglets dépliables sous la fiche ----------

// 1 chaîne = 1 paragraphe
export const profile = [
    "I'm a student in Epitech Marseille's Pré-MSc, an intensive programme leading to an MSc (master's level): development, systems, algorithms, data management and AI, through hands-on team projects.",
    'Before Epitech, I worked as a laboratory technician (2024–2026), and I did a Master 1 internship at ENS Paris.',
]

// Compétences regroupées par famille.
// `highlight` (ci-dessus) met en valeur celles du domaine choisi.
export const skills = [
    { group: 'Front end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'] },
    { group: 'Back end & data', items: ['Java', 'PHP', 'SQL', 'PostgreSQL', 'R'] },
    { group: 'Systems & cloud', items: ['Bash', 'PowerShell', 'AWS (in progress)', 'Git'] },
]

// Parcours, du plus récent au plus ancien
export const background = [
    { when: 'Now', title: 'Pré-MSc', place: 'Epitech Marseille' },
    { when: '2024 – 2026', title: 'Laboratory technician', place: 'Alphenyx' },
    { when: 'Master 2', title: 'Internship : Orchard study — statistical analyses in R Studio', place: 'IMBE' },
    { when: 'Master 1', title: 'Internship', place: 'ENS Paris' },
]

export const interests = [
    { icon: '🏃', title: 'Running & trail', text: 'I train and track my runs with Strava and Kiprun Pacer.' },
    { icon: '🔨', title: 'Renovation', text: 'A full-time renovation project alongside my studies: planning, organisation and hands-on work.' },
]
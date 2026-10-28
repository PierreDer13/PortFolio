// =============================================================
// data.js — TOUT le contenu du site (textes, liens, images)
// Pour modifier un texte ou ajouter un projet : c'est ici, pas
// besoin de toucher aux composants.
// =============================================================

// Avec Vite, importer une image donne son URL finale (avec un hash
// anti-cache), utilisable directement dans <img src={...}>
import projectsImg from './assets/IMG_0565.JPG'
import resumeImg from './assets/IMG_0560.JPG'
import aboutImg from './assets/portrait.png'

// ---------- Liens réutilisés à plusieurs endroits ----------
export const CONTACT_EMAIL = 'pierre.der-gazerian@epitech.eu'
export const RESUME_URL = 'https://pierreder13.github.io/My_Resume/'
export const CozyDesk = 'https://cozydesk-demo.vercel.app/'
// Lien interne vers la page Projects (lu par useHashRoute dans App.jsx)
export const PROJECTS_URL = '#/projects'
export const ABOUT_URL = '#/about'
export const CONTACT_URL = '#/contact'
export const GITHUB_URL = 'https://github.com/PierreDer13'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/pierre-der-gazerian-566a941b8/'
// CV en PDF, rangé dans public/ → servi à côté de index.html
export const RESUME_PDF = './CV_DER_GAZERIAN_PIERRE.pdf'

// ---------- Barre de navigation ----------
// Nav.jsx fait un .map() sur ce tableau : 1 objet = 1 lien
export const navLinks = [
  { label: 'Projects', href: PROJECTS_URL },
  { label: 'Resume', href: RESUME_URL },
  { label: 'About', href: ABOUT_URL },
  // Template string `...${}` : insère la variable dans le texte
  { label: 'Contact', href: CONTACT_URL },
]

// ---------- Cartes de la page d'accueil ----------
export const categories = [
  {
    title: 'My projects',
    brand: 'React · Java',       // ligne en majuscules au-dessus du titre
    badge: '3 projects',         // étiquette en haut à gauche de la photo
    text: 'Discover the digital projects I have created or still working on!',
    cta: 'View my projects →',
    href: PROJECTS_URL, // → ouvre la page Projects
    img: projectsImg,
    alt: "Preview of Pierre's projects",
  },
  {
    title: 'Digital Resume',
    brand: 'Education · Skills',
    badge: 'Online',
    text: 'Learn more about my education, experience, skills, and career goals.',
    cta: 'View my resume →',
    href: RESUME_URL,
    img: resumeImg,
    alt: "Preview of Pierre's digital resume",
  },
  {
    title: 'About Me',
    brand: 'Pierre DER GAZERIAN',
    badge: 'Open to work',
    text: 'Get to know me, my interests, and my approach to digital development.',
    cta: 'Learn more about me →',
    href: ABOUT_URL,           // → ouvre la page About
    img: aboutImg,
    alt: 'Portrait or presentation of Pierre',
  },
]

// ---------- Projets de la page Projects ----------
// Chaque objet devient une fiche "article" (ProjectCard.jsx).
// Pour ajouter un projet : copier un objet, changer les valeurs.
export const projects = [
  {
    id: 'cozydesk',          // identifiant unique (sert de `key` dans le .map)
    status: 'live',          // 'live' = en ligne | 'wip' = en cours → filtres + couleurs
    badge: 'Live demo',      // étiquette en haut à gauche du visuel
    brand: 'React · Vite',   // ligne en majuscules au-dessus du titre (la "marque")
    title: 'CozyDesk — Job board',
    tagline: 'Find your dream job before your coffee gets cold.',
    description:
      'A job board with a cosy pixel-art Solarpunk look. I built the React front end; the Flask API was made by a teammate. The demo runs on mock data.',
    tags: ['React', 'Vite', 'Flask API', 'Pixel art'],
    context: 'Epitech · · ·', // petit texte gris à côté du statut ('' = masqué)
    // Pastilles "coloris" comme sur Decathlon : la palette Solarpunk du projet
    swatches: ['#3E6B48', '#C9704A', '#F4CC6A', '#8B4A2B', '#FBF3E4'],
    href: CozyDesk,          // lien du bouton (null = bouton grisé)
    cta: 'View the demo',    // texte du bouton
    repo: 'https://github.com/PierreDer13/cozydesk', // lien GitHub (2e bouton) ; absent = pas de 2e bouton    
    repoCta: 'View the code on GitHub',
    preview: 'mug',          // visuel : 'mug' = tasse 3D | 'soon' = "coming soon"
  },
  {
    id: 'java-game',
    status: 'wip',
    badge: 'In progress',
    brand: 'Java',
    title: 'Java Game',
    tagline: 'A game written in Java, currently in development.',
    description: 'Work in progress: gameplay and preview coming soon.',
    tags: ['Java', 'OOP'],
    context: '',             // vide → rien d'affiché
    swatches: [],            // vide → pas de pastilles
    href: null,              // pas encore de lien → bouton désactivé
    cta: 'Preview coming soon',
    preview: 'soon',
  },
  {
    id: 'portfolio',
    status: 'live',
    badge: 'You are here',
    brand: 'React · Vite',
    title: 'This Portfolio',
    tagline: 'My digital portfolio, designed like a Decathlon shop.',
    description:
      'The site you are browsing: 4 pages, project search, downloadable resume and contact page. Built with React and deployed automatically on GitHub Pages.',
    tags: ['React', 'Vite', 'GitHub Pages', 'Accessibility'],
    context: 'Epitech · 2026',
    // Pastilles "coloris" : la charte du portfolio
    swatches: ['#0754A5', '#FFCD4E', '#0875E1', '#616161', '#F5F7FA'],
    href: 'https://pierreder13.github.io/PortFolio/',
    cta: 'View the live site',
    repo: 'https://github.com/PierreDer13/PortFolio',
    repoCta: 'View the code on GitHub',
    preview: 'site',         // visuel : mini-maquette du site (SiteMock)
  },
]
  // ---------- Cartes de la page Contact ----------
// 1 objet = 1 carte. `external: true` → ouvre dans un nouvel onglet
export const contactChannels = [
  { icon: '✉️', title: 'Email', text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, cta: 'Send an email' },
  { icon: '💼', title: 'LinkedIn', text: "Let's connect", href: LINKEDIN_URL, cta: 'View my profile', external: true },
  { icon: '💻', title: 'GitHub', text: 'PierreDer13', href: GITHUB_URL, cta: 'See my code', external: true },
  { icon: '📄', title: 'Resume', text: 'Education · Skills', href: RESUME_URL, cta: 'View my resume', external: true },
]


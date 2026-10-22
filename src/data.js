import projectsImg from './assets/IMG_0565.JPG'
import resumeImg from './assets/IMG_0560.JPG'
import aboutImg from './assets/IMG_0546.JPG'

export const CONTACT_EMAIL = 'pierre.der-gazerian@epitech.eu'
export const RESUME_URL = 'https://pierreder13.github.io/My_Resume/'
export const CozyDesk = 'https://cozydesk-demo.vercel.app/'
export const PROJECTS_URL = '#/projects'

export const navLinks = [
  { label: 'Projects', href: PROJECTS_URL },
  { label: 'Resume', href: RESUME_URL },
  { label: 'About', href: 'about-me.html' },
  { label: 'Contact', href: `mailto:${CONTACT_EMAIL}` },
]

export const categories = [
  {
    title: 'My projects',
    text: 'Discover the digital projects I have created or still working on!',
    cta: 'View my projects →',
    href: PROJECTS_URL,
    img: projectsImg,
    alt: "Preview of Pierre's projects",
  },
  {
    title: 'Digital Resume',
    text: 'Learn more about my education, experience, skills, and career goals.',
    cta: 'View my resume →',
    href: RESUME_URL,
    img: resumeImg,
    alt: "Preview of Pierre's digital resume",
  },
  {
    title: 'About Me',
    text: 'Get to know me, my interests, and my approach to digital development.',
    cta: 'Learn more about me →',
    href: 'about-me.html',
    img: aboutImg,
    alt: 'Portrait or presentation of Pierre',
  },
]

// Projets affichés sur la page Projects (fiches façon "article" Decathlon)
export const projects = [
  {
    id: 'cozydesk',
    status: 'live',
    badge: 'Live demo',
    brand: 'React · Vite',
    title: 'CozyDesk — Job board',
    tagline: 'Find your dream job before your coffee gets cold.',
    description:
      'A job board with a cosy pixel-art Solarpunk look. I built the React front end; the Flask API was made by a teammate. The demo runs on mock data.',
    tags: ['React', 'Vite', 'Flask API', 'Pixel art'],
    context: 'Epitech · T-WEB-501',
    // pastilles "coloris" : la palette Solarpunk du projet
    swatches: ['#3E6B48', '#C9704A', '#F4CC6A', '#8B4A2B', '#FBF3E4'],
    href: CozyDesk,
    cta: 'View the demo',
    preview: 'mug',
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
    context: '',
    swatches: [],
    href: null,
    cta: 'Preview coming soon',
    preview: 'soon',
  },
]

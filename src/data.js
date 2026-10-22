import projectsImg from './assets/IMG_0565.JPG'
import resumeImg from './assets/IMG_0560.JPG'
import aboutImg from './assets/IMG_0546.JPG'

export const CONTACT_EMAIL = 'pierre.der-gazerian@epitech.eu'
export const RESUME_URL = 'https://pierreder13.github.io/My_Resume/'
export const CozyDesk = 'https://cozydesk-demo.vercel.app/'

export const navLinks = [
  { label: 'Projects', href: CozyDesk },
  { label: 'Resume', href: RESUME_URL },
  { label: 'About', href: 'about-me.html' },
  { label: 'Contact', href: `mailto:${CONTACT_EMAIL}` },
]

export const categories = [
  {
    title: 'My projects',
    text: 'Discover the digital projects I have created or still working on!',
    cta: 'View my projects →',
    href: CozyDesk,
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

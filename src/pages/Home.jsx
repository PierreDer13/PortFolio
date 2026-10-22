import Hero from '../components/Hero'
import Categories from '../components/Categories'
import { categories } from '../data'

export default function Home({ query }) {
  // La barre de recherche filtre les cartes en direct (titre + texte)
  const q = query.trim().toLowerCase()
  const filtered = categories.filter((c) =>
    (c.title + ' ' + c.text).toLowerCase().includes(q)
  )

  return (
    <>
      <Hero />
      <Categories items={filtered} />
    </>
  )
}

// =============================================================
// pages/Home.jsx — Page d'accueil : photo + cartes de catégories
// (c'était le contenu de App.jsx avant l'ajout de la page Projects)
// =============================================================
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import { categories } from '../data'

// `query` arrive depuis App.jsx (le texte de la barre de recherche)
export default function Home({ query }) {
  // On met en minuscules et on enlève les espaces autour,
  // pour une recherche insensible à la casse
  const q = query.trim().toLowerCase()

  // .filter() garde seulement les cartes dont le titre ou le texte contient q
  // (si q est vide, .includes('') est toujours vrai → tout s'affiche)
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

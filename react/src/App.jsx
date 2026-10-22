import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import { categories } from './data'

export default function App() {
  const [query, setQuery] = useState('')

  // La barre de recherche filtre les cartes en direct (titre + texte)
  const q = query.trim().toLowerCase()
  const filtered = categories.filter((c) =>
    (c.title + ' ' + c.text).toLowerCase().includes(q)
  )

  return (
    <>
      <AnnouncementBar />
      <Header />
      <Nav />
      <SearchBar query={query} onQueryChange={setQuery} />
      <Hero />
      <Categories items={filtered} />
    </>
  )
}

import { useEffect, useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Projects from './pages/Projects'

// Routing minimal par hash (#/projects) : pas de dépendance,
// et ça marche sur GitHub Pages sans config serveur.
function useHashRoute() {
  const read = () => window.location.hash.replace(/^#/, '') || '/'
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onChange = () => {
      setRoute(read())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export default function App() {
  const route = useHashRoute()
  const [query, setQuery] = useState('')

  // On vide la recherche quand on change de page
  useEffect(() => setQuery(''), [route])

  return (
    <>
      <AnnouncementBar />
      <Header />
      <Nav route={route} />
      <SearchBar query={query} onQueryChange={setQuery} />
      {route === '/projects' ? <Projects query={query} /> : <Home query={query} />}
    </>
  )
}

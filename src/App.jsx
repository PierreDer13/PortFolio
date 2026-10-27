// =============================================================
// App.jsx — Composant racine : structure commune + choix de la page
// =============================================================

// useState  : stocker une valeur qui, quand elle change, re-dessine le composant
// useEffect : lancer du code "à côté" du rendu (écouter un événement, etc.)
import { useEffect, useState } from 'react'

// Composants affichés sur TOUTES les pages
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'

// Les deux pages du site
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

// -------------------------------------------------------------
// Hook perso : lit la "route" dans l'URL après le #
//   https://.../PortFolio/#/projects  →  route = '/projects'
//   https://.../PortFolio/            →  route = '/'
// Pourquoi le # ? Tout ce qui suit le # n'est jamais envoyé au
// serveur : GitHub Pages sert toujours index.html, et c'est React
// qui choisit la page. Donc pas de 404 et aucune librairie à installer.
// -------------------------------------------------------------
function useHashRoute() {
  // Lit le hash ('#/projects'), enlève le '#', et met '/' si vide
  const read = () => window.location.hash.replace(/^#/, '') || '/'

  // On passe la fonction `read` (sans l'appeler) : React ne l'exécute
  // qu'une fois, au premier affichage, pour la valeur de départ
  const [route, setRoute] = useState(read)

  useEffect(() => {
    // Appelée à chaque changement de hash (clic sur un lien #/..., bouton retour)
    const onChange = () => {
      setRoute(read())     // met à jour la route → React ré-affiche la bonne page
      window.scrollTo(0, 0) // on remonte en haut, comme un vrai changement de page
    }
    window.addEventListener('hashchange', onChange)

    // "Nettoyage" : si le composant disparaît, on retire l'écouteur
    return () => window.removeEventListener('hashchange', onChange)
  }, []) // [] = ce useEffect ne tourne qu'une seule fois, au montage

  return route
}

export default function App() {
  const route = useHashRoute()

  // Texte tapé dans la barre de recherche. Il vit ici (dans le parent)
  // pour être partagé entre SearchBar (qui l'écrit) et la page (qui filtre)
  const [query, setQuery] = useState('')

  // À chaque changement de page, on vide la recherche
  useEffect(() => setQuery(''), [route]) // [route] = relancé quand route change

  return (
    // <> ... </> = "Fragment" : regroupe plusieurs éléments sans ajouter de <div>
    <>
      <AnnouncementBar />
      <Header />
      {/* On passe la route à la nav pour souligner le lien actif */}
      <Nav route={route} />
      {/* SearchBar affiche `query` et nous renvoie chaque frappe via setQuery */}
      <SearchBar query={query} onQueryChange={setQuery} />

      {/* Choix de la page selon la route */}
      {route === '/projects' ? (
        <Projects query={query} />
      ) : route === '/contact' ? (
        <Contact />
      ) : route === '/about' ? (
        <About />
      ) : (
        <Home query={query} />
      )}
    </>
  )
}

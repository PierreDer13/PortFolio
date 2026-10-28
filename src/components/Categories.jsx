// =============================================================
// components/Categories.jsx — Section « Explore my portfolio » de l'accueil
// Reçoit la liste des cartes (déjà filtrée par la recherche dans Home.jsx)
// et affiche une CategoryCard par élément, ou « No results ».
// =============================================================
import CategoryCard from './CategoryCard'

export default function Categories({ items }) {
  return (
    <section className="portfolio-categories" aria-labelledby="categories-title">
      <h2 id="categories-title">Explore my portfolio</h2>
      <div className="projects-grid">
        {/* S'il reste des cartes après la recherche : on les affiche, sinon un message */}
        {items.length > 0 ? (
          // {...cat} : passe tous les champs de la carte (title, text, img...) comme props
          items.map((cat) => <CategoryCard key={cat.title} {...cat} />)
        ) : (
          <p className="no-result">No results.</p>
        )}
      </div>
    </section>
  )
}

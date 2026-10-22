import CategoryCard from './CategoryCard'

export default function Categories({ items }) {
  return (
    <section className="portfolio-categories" aria-labelledby="categories-title">
      <h2 id="categories-title">Explore my portfolio</h2>
      <div className="category-list">
        {items.length > 0 ? (
          items.map((cat) => <CategoryCard key={cat.title} {...cat} />)
        ) : (
          <p className="no-result">Aucun résultat.</p>
        )}
      </div>
    </section>
  )
}

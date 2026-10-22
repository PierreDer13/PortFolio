export default function SearchBar({ query, onQueryChange }) {
  return (
    <section className="search-section">
      <form className="search-bar" role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search-input" className="visually-hidden">
          Search this portfolio
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}

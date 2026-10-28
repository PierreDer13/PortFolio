// =============================================================
// components/SearchBar.jsx — Barre de recherche (toutes les pages)
// Composant « contrôlé » : il n'a pas d'état à lui. Le texte vient du
// parent (App.jsx) via `query`, et chaque frappe lui est renvoyée
// avec `onQueryChange`. La page affichée filtre ensuite son contenu.
// =============================================================
export default function SearchBar({ query, onQueryChange }) {
  return (
    <section className="search-section">
      {/* role="search" : signale la zone de recherche aux lecteurs d'écran.
          preventDefault : Entrée ne recharge pas la page (la recherche est déjà en direct) */}
      <form className="search-bar" role="search" onSubmit={(e) => e.preventDefault()}>
        {/* Libellé invisible à l'écran mais lu par les lecteurs d'écran (accessibilité) */}
        <label htmlFor="search-input" className="visually-hidden">
          Search this portfolio
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search..."
          value={query}
          // À chaque frappe, on renvoie le nouveau texte au parent
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}

# Portfolio – version React (Vite)

## Lancer en local
```bash
npm install
npm run dev
```
Puis ouvre l'URL affichée (http://localhost:5173).

## Build pour GitHub Pages
```bash
npm run build
```
Le site prêt à déployer est dans `dist/`.

## Structure
- `src/data.js` : textes, liens, images (tout le contenu est ici)
- `src/components/` : AnnouncementBar, Header, Nav, SearchBar, Hero, Categories, CategoryCard
- `src/App.jsx` : assemble la page + état de la recherche
- `src/index.css` : ton ancien style.css

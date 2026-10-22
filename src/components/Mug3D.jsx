// =============================================================
// components/Mug3D.jsx — La SteamingMug de CozyDesk en 3D
//
// Principe : on dessine la tasse en pixel art (SVG), puis on
// EMPILE 14 copies les unes derrière les autres en profondeur
// (axe Z). Vu de face c'est plat ; quand le tout pivote, les
// couches forment un volume, comme un objet en voxels (Minecraft).
// Aucune librairie 3D : uniquement du CSS 3D (voir Mug3D.css).
// =============================================================
import './Mug3D.css'

// Même dessin que MugLogo.jsx dans CozyDesk.
// 1 caractère = 1 pixel : '.' = vide, g/t/y/b = une couleur
const PIXELS = [
  '...gg.gg........', // feuilles / vapeur vertes
  '.....g..........',
  '......g.........',
  '...tttttttt.....', // haut de la tasse (terracotta)
  '...tttttttttt...',
  '...tttyyttt.t...', // y = petit carré jaune ; le 't' isolé à droite = l'anse
  '...tttyyttt.t...',
  '...tttttttttt...',
  '...tttttttt.....',
  '..bbbbbbbbbb....', // soucoupe marron
]

// Couleurs de la palette CozyDesk
const COLORS = { g: '#3E6B48', t: '#C9704A', y: '#F4CC6A', b: '#8B4A2B' }

// Nombre de couches empilées : plus il y en a, plus le volume paraît plein
const LAYERS = 14

// Une couche = le dessin complet en SVG.
// viewBox "0 0 16 10" : grille de 16 x 10 cases, étirée à la taille du conteneur.
// shapeRendering="crispEdges" : bords nets, pas de flou entre les pixels
function MugLayer() {
  return (
    <svg viewBox="0 0 16 10" shapeRendering="crispEdges" aria-hidden="true">
      {/* On parcourt chaque ligne (y) puis chaque caractère (x) */}
      {PIXELS.map((row, y) =>
        [...row].map((char, x) =>
          // '.' → on ne dessine rien ; sinon un carré 1x1 de la bonne couleur
          char === '.' ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={COLORS[char]} />
          )
        )
      )}
    </svg>
  )
}

export default function Mug3D() {
  return (
    // role="img" + aria-label : un lecteur d'écran annonce "image : ..."
    <div className="mug3d" role="img" aria-label="CozyDesk steaming mug logo in 3D">
      {/* Vapeur : 3 carrés animés en CSS qui montent et disparaissent */}
      <div className="mug3d-steam" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* La "scène" donne la perspective ; l'"objet" est ce qui tourne */}
      <div className="mug3d-scene">
        <div className="mug3d-object">
          {/* Array.from({ length: 14 }) : crée un tableau de 14 cases pour boucler dessus */}
          {Array.from({ length: LAYERS }, (_, i) => (
            <div
              key={i}
              className="mug3d-layer"
              style={{
                // Chaque couche est poussée en profondeur de 4px de plus que la précédente.
                // (i - 6.5) * 4 → de -26px à +26px : la tasse est centrée sur son axe de rotation
                transform: `translateZ(${(i - (LAYERS - 1) / 2) * 4}px)`,
                // Couches du milieu assombries → on voit une "tranche" plus foncée sur les côtés.
                // La première et la dernière (faces avant/arrière) gardent leurs vraies couleurs
                filter: i === 0 || i === LAYERS - 1 ? 'none' : 'brightness(0.72)',
              }}
            >
              <MugLayer />
            </div>
          ))}
        </div>
      </div>

      {/* Ombre ovale floue sous la tasse */}
      <div className="mug3d-shadow" aria-hidden="true"></div>
    </div>
  )
}

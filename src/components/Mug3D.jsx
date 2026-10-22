import './Mug3D.css'

// Même pixel art que MugLogo.jsx dans CozyDesk
const PIXELS = [
  '...gg.gg........',
  '.....g..........',
  '......g.........',
  '...tttttttt.....',
  '...tttttttttt...',
  '...tttyyttt.t...',
  '...tttyyttt.t...',
  '...tttttttttt...',
  '...tttttttt.....',
  '..bbbbbbbbbb....',
]

const COLORS = { g: '#3E6B48', t: '#C9704A', y: '#F4CC6A', b: '#8B4A2B' }

// Nombre de couches empilées en profondeur : plus il y en a, plus le volume est plein
const LAYERS = 14

function MugLayer() {
  return (
    <svg viewBox="0 0 16 10" shapeRendering="crispEdges" aria-hidden="true">
      {PIXELS.map((row, y) =>
        [...row].map((char, x) =>
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
    <div className="mug3d" role="img" aria-label="CozyDesk steaming mug logo in 3D">
      <div className="mug3d-steam" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mug3d-scene">
        <div className="mug3d-object">
          {Array.from({ length: LAYERS }, (_, i) => (
            <div
              key={i}
              className="mug3d-layer"
              style={{
                // couches centrées autour de z = 0
                transform: `translateZ(${(i - (LAYERS - 1) / 2) * 4}px)`,
                // couches intérieures plus sombres = tranche visible
                filter: i === 0 || i === LAYERS - 1 ? 'none' : 'brightness(0.72)',
              }}
            >
              <MugLayer />
            </div>
          ))}
        </div>
      </div>
      <div className="mug3d-shadow" aria-hidden="true"></div>
    </div>
  )
}

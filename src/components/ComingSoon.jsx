const PAD = [
  '..dddddddddddd..',
  '.dddddddddddddd.',
  'ddwddddddddrdddd',
  'dwwwddddddrdrddd',
  'ddwdddddddddrddd',
  'dddddddddddddddd',
  '.dddd......dddd.',
  '..dd........dd..',
]
const C = { d: '#3c3c3c', w: '#FFCD4E', r: '#0875e1' }

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <svg viewBox="0 0 16 8" shapeRendering="crispEdges" aria-hidden="true">
        {PAD.map((row, y) =>
          [...row].map((ch, x) =>
            ch === '.' ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={C[ch]} />
          )
        )}
      </svg>
      <p>Preview coming soon</p>
    </div>
  )
}

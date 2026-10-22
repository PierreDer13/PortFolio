export default function CategoryCard({ title, text, cta, href, img, alt }) {
  return (
    <a className="category-row" href={href}>
      <img src={img} alt={alt} />
      <div className="category-text">
        <h3>{title}</h3>
        <p>{text}</p>
        <span>{cta}</span>
      </div>
    </a>
  )
}

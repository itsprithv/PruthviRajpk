export default function PageHeader({ label, title, highlight, description }) {
  return (
    <header className="animate-fadeIn">
      {label && <p className="section-label">{label}</p>}
      <h1 className="page-title mt-2">
        {title}
        {highlight && <> <span className="accent-text">{highlight}</span></>}
      </h1>
      {description && <p className="mt-4 max-w-2xl text-ink-muted text-base sm:text-lg">{description}</p>}
    </header>
  )
}

import { IconFolder, IconExternal } from './Icons'
import { handleCardPointer } from '../utils/pointerGlow'
import { assetUrl } from '../utils/assetUrl'

export default function ProjectCard({ project }) {
  const { title, description, tags, screenshot, gallery, github, demo } = project
  const hasLinks = github || demo
  const imageSrc = screenshot ? assetUrl(screenshot) : null

  return (
    <article
      onMouseMove={handleCardPointer}
      className="card card-hover cursor-glow-card interactive-card overflow-hidden animate-fadeIn group"
    >
      <div className="relative bg-subtle border-b border-border">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${title} screenshot`}
            className="w-full aspect-video object-cover"
          />
        ) : (
          <div className="w-full aspect-video flex flex-col items-center justify-center gap-3 bg-primary/5">
            <div className="icon-box w-12 h-12">
              <IconFolder className="w-6 h-6" />
            </div>
            <span className="text-xs text-ink-muted font-medium">Project preview</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="badge">{t}</li>
          ))}
        </ul>

        {gallery?.length > 0 && (
          <div className="mt-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Project highlights</p>
            <div className="grid gap-3">
              {gallery.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-lg border border-border bg-subtle">
                  <img
                    src={assetUrl(item.src)}
                    alt={item.caption || `${title} highlight`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  {item.caption && (
                    <figcaption className="px-3 py-2 text-xs text-ink-muted">{item.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {hasLinks && (
          <div className="mt-4 flex flex-wrap gap-3">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost gap-1.5"
              >
                Live demo
                <IconExternal />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost gap-1.5"
              >
                Source code
                <IconExternal />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

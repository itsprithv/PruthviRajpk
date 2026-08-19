import { IconFolder, IconExternal } from './Icons'
import { handleCardPointer } from '../utils/pointerGlow'
import ImageSlider from './ImageSlider'

export default function ProjectCard({ project }) {
  const { title, description, tags, screenshot, gallery, github, demo } = project
  const hasLinks = github || demo

  const slides =
    gallery?.length > 0
      ? gallery
      : screenshot
        ? [{ src: screenshot, caption: `${title} preview` }]
        : []

  return (
    <article
      onMouseMove={handleCardPointer}
      className="card card-hover cursor-glow-card interactive-card overflow-hidden animate-fadeIn group"
    >
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="badge">{t}</li>
          ))}
        </ul>

        {slides.length > 0 ? (
          <div className="mt-5">
            <ImageSlider items={slides} title={title} />
          </div>
        ) : (
          <div className="mt-5 w-full aspect-video flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-primary/5">
            <div className="icon-box w-12 h-12">
              <IconFolder className="w-6 h-6" />
            </div>
            <span className="text-xs text-ink-muted font-medium">Project preview</span>
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

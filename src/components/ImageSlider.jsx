import { useState } from 'react'
import { IconChevronLeft, IconChevronRight } from './Icons'
import { assetUrl } from '../utils/assetUrl'

export default function ImageSlider({ items, title = 'Project' }) {
  const [index, setIndex] = useState(0)
  const total = items.length

  if (!total) return null

  const goTo = (next) => {
    setIndex((current) => (current + next + total) % total)
  }

  const current = items[index]

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-lg border border-border bg-subtle">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item) => (
            <figure key={item.src} className="w-full flex-shrink-0">
              <img
                src={assetUrl(item.src)}
                alt={item.caption || `${title} highlight`}
                className="w-full aspect-video object-contain bg-white dark:bg-gray-900"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-ink shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
            >
              <IconChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => goTo(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 text-ink shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary"
            >
              <IconChevronRight />
            </button>
          </>
        )}
      </div>

      {current.caption && (
        <p className="text-xs text-ink-muted leading-relaxed">{current.caption}</p>
      )}

      {total > 1 && (
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-5 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-ink-muted">
            {index + 1} / {total}
          </span>
        </div>
      )}
    </div>
  )
}

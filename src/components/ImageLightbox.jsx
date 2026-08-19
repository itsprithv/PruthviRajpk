import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IconChevronLeft, IconChevronRight, IconClose } from './Icons'
import { assetUrl } from '../utils/assetUrl'

export default function ImageLightbox({ items, index, onClose, onChange }) {
  const item = items[index]
  const total = items.length

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange(-1)
      if (event.key === 'ArrowRight') onChange(1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose, onChange])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
        aria-label="Close preview"
      />

      <div className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10 hover:text-white"
        >
          <IconClose />
        </button>
        <span className="text-sm font-medium text-white/90">
          {index + 1} / {total}
        </span>
        <div className="h-10 w-10" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
        {total > 1 && (
          <button
            type="button"
            onClick={() => onChange(-1)}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:h-12 sm:w-12"
          >
            <IconChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={assetUrl(item.src)}
          alt={item.caption || 'Project image'}
          className="max-h-[72vh] max-w-full object-contain shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        />

        {total > 1 && (
          <button
            type="button"
            onClick={() => onChange(1)}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:h-12 sm:w-12"
          >
            <IconChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {item.caption && (
        <div className="relative z-10 border-t border-white/10 bg-black/50 px-4 py-4 sm:px-8">
          <p className="text-center text-sm leading-relaxed text-white/90 sm:text-base">
            {item.caption}
          </p>
        </div>
      )}
    </div>,
    document.body,
  )
}

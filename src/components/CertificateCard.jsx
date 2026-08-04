import { IconAward, IconExternal } from './Icons'
import { handleCardPointer } from '../utils/pointerGlow'

export default function CertificateCard({ certificate }) {
  const { title, issuer, file, type = 'Certificate' } = certificate

  return (
    <article
      onMouseMove={handleCardPointer}
      className="card card-hover cursor-glow-card interactive-card p-5 animate-fadeIn"
    >
      <div className="flex items-start gap-4">
        <div className="icon-box">
          <IconAward />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-secondary uppercase tracking-wide">{type}</p>
          <h3 className="mt-1 font-semibold text-ink">{title}</h3>
          {issuer && <p className="mt-1 text-sm text-ink-muted">{issuer}</p>}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={file}
          target="_blank"
          rel="noreferrer"
          className="btn-outline text-sm py-2 px-4 gap-1.5"
        >
          View PDF
          <IconExternal />
        </a>
        <a href={file} download className="btn-primary text-sm py-2 px-4">
          Download
        </a>
      </div>
    </article>
  )
}

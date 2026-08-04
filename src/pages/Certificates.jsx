import { site, certificates } from '../data/site'
import CertificateCard from '../components/CertificateCard'
import PageHeader from '../components/PageHeader'
import { IconExternal } from '../components/Icons'
import { handleCardPointer } from '../utils/pointerGlow'
import { assetUrl } from '../utils/assetUrl'

export default function Certificates() {
  const creds = certificates.filter((c) => c.type === 'Certificate')
  const docs = certificates.filter((c) => c.type !== 'Certificate')

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
      <PageHeader
        label="Credentials"
        title="Certificates &"
        highlight="documents"
        description="AWS and cloud certifications, plus academic documents — view or download below."
      />

      {creds.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Cloud certifications</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creds.map((c) => (
              <CertificateCard key={c.title} certificate={c} />
            ))}
          </div>
        </div>
      )}

      {docs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-ink">Academic documents</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((c) => (
              <CertificateCard key={c.title} certificate={c} />
            ))}
          </div>
        </div>
      )}

      {site.resumeUrl && (
        <div
          onMouseMove={handleCardPointer}
          className="mt-12 card cursor-glow-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <p className="section-label">Resume</p>
            <h2 className="mt-2 text-xl font-semibold text-ink">Download my resume</h2>
            <p className="mt-2 text-sm text-ink-muted max-w-lg">
              Full resume with cloud engineering experience, skills, and project highlights.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={assetUrl(site.resumeUrl)}
              target="_blank"
              rel="noreferrer"
              className="btn-outline gap-1.5 text-sm py-2 px-4"
            >
              View PDF
              <IconExternal />
            </a>
            <a href={assetUrl(site.resumeUrl)} download className="btn-primary text-sm py-2 px-4">
              Download
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

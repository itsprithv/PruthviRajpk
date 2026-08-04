import { Link } from 'react-router-dom'
import { site, bio, skillGroups, experience } from '../data/site'
import ProfilePhoto from '../components/ProfilePhoto'
import PageHeader from '../components/PageHeader'
import { IconExternal } from '../components/Icons'
import { handleCardPointer } from '../utils/pointerGlow'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
      <PageHeader label="Profile" title="About" highlight="me" />

      <div className="mt-10 grid md:grid-cols-[auto_1fr] gap-10 items-center">
        <div className="mx-auto md:mx-0">
          <ProfilePhoto size="md" />
        </div>

        <div className="space-y-4 text-ink-muted leading-relaxed">
          <p className="text-ink/90">{bio.intro}</p>
          <p>{bio.journey}</p>
          <p>{bio.goal}</p>
          <p className="text-sm font-medium text-ink">
            {site.location} · {site.title}
          </p>
          {site.resumeUrl && (
            <div className="pt-2 flex flex-wrap gap-3">
              <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-4 gap-1.5">
                View resume <IconExternal />
              </a>
              <a href={site.resumeUrl} download className="btn-primary text-sm py-2 px-4">
                Download resume
              </a>
              <Link to="/certificates" className="btn-outline text-sm py-2 px-4">
                Certificates
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        onMouseMove={handleCardPointer}
        className="mt-12 card cursor-glow-card p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-ink">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-8">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p className="text-sm font-medium text-primary">{g.label}</p>
              <ul className="mt-3 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="text-sm text-ink-muted flex items-start gap-2">
                    <span className="text-success mt-1">●</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {experience.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-ink">
            Experience <span className="accent-text">timeline</span>
          </h2>
          <div className="mt-6 space-y-4">
            {experience.map((job) => (
              <article
                key={job.role}
                onMouseMove={handleCardPointer}
                className="card card-hover cursor-glow-card p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                  <span className="text-xs font-medium text-ink-muted bg-subtle px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-secondary">{job.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="text-success shrink-0">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

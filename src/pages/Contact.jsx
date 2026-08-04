import { useState } from 'react'
import { site } from '../data/site'
import PageHeader from '../components/PageHeader'
import { IconMail, IconMap, IconGithub, IconLinkedin, IconExternal } from '../components/Icons'
import { handleCardPointer } from '../utils/pointerGlow'
import { assetUrl } from '../utils/assetUrl'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard may be blocked */
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
      <PageHeader
        label="Reach out"
        title="Let's"
        highlight="connect"
        description="Open to cloud engineering roles, internships, and collaboration on AWS and infrastructure projects."
      />

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div
          onMouseMove={handleCardPointer}
          className="card cursor-glow-card p-6 sm:p-8 space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="icon-box">
              <IconMail />
            </div>
            <div>
              <p className="text-xs font-medium text-ink-muted uppercase tracking-wider">Email</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg font-medium text-ink hover:text-primary transition-colors"
                >
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-xs font-medium px-3 py-1 rounded-lg border border-border text-ink-muted hover:bg-subtle transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="icon-box">
              <IconMap />
            </div>
            <div>
              <p className="text-xs font-medium text-ink-muted uppercase tracking-wider">Location</p>
              <p className="mt-2 text-ink">{site.location}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href={site.github} target="_blank" rel="noreferrer" className="btn-outline gap-2 text-sm py-2 px-4">
              <IconGithub className="w-4 h-4" />
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn-outline gap-2 text-sm py-2 px-4">
              <IconLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
            {site.resumeUrl && (
              <a
                href={assetUrl(site.resumeUrl)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary gap-2 text-sm py-2 px-4"
              >
                Resume
                <IconExternal />
              </a>
            )}
          </div>
        </div>

        <div
          onMouseMove={handleCardPointer}
          className="card cursor-glow-card p-6 sm:p-8"
        >
          <h2 className="text-lg font-semibold text-ink">Send a message</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Use the template below or open your email client to reach me directly.
          </p>
          <div className="mt-6 p-4 rounded-lg bg-subtle text-sm text-ink-muted leading-relaxed">
            <p className="font-medium text-ink">Subject: Portfolio inquiry</p>
            <p className="mt-3">
              Hi {site.name.split(' ')[0]},
              <br /><br />
              I came across your portfolio and wanted to reach out about...
              <br /><br />
              Best,
              <br />
              [Your name]
            </p>
          </div>
          <a
            href={`mailto:${site.email}?subject=Portfolio inquiry`}
            className="mt-6 btn-primary"
          >
            Open email client
          </a>
        </div>
      </div>
    </section>
  )
}

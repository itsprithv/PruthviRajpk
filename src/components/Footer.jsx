import { site } from '../data/site'
import { IconGithub, IconLinkedin, IconMail } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 bg-subtle/50">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
        <p>&copy; {new Date().getFullYear()} {site.name}. Cloud Engineer portfolio.</p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <IconGithub className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <IconMail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

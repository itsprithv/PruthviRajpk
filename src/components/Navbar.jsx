import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../data/site'
import ThemeToggle from './ThemeToggle'
import { IconCloud } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-page/95 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="icon-box w-9 h-9">
            <IconCloud className="w-5 h-5" />
          </span>
          <span className="hidden sm:inline">{site.name.split(' ')[0]}</span>
          <span className="text-ink-muted text-sm hidden md:inline">· Cloud Engineer</span>
        </NavLink>

        <div className="hidden sm:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-ink-muted hover:text-ink hover:bg-subtle'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="ml-3 pl-3 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-lg border border-border bg-card text-ink"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-6 pb-4 border-t border-border">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 px-3 rounded-lg text-sm font-medium ${
                    isActive ? 'text-primary bg-primary/10' : 'text-ink-muted'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

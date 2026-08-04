import { Link } from 'react-router-dom'
import { site, roles, projects } from '../data/site'
import ProjectCard from '../components/ProjectCard'
import ProfilePhoto from '../components/ProfilePhoto'
import { IconCloud } from '../components/Icons'

const featured = projects.filter((p) => p.featured)

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          <div className="animate-fadeIn">
            <div className="flex items-center gap-2 text-secondary font-medium text-sm">
              <IconCloud className="w-4 h-4" />
              Cloud Engineer
            </div>

            <h1 className="mt-4 font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              Hi, I'm <span className="accent-text">{site.name}</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-ink-muted max-w-xl">
              I design, build, and operate cloud infrastructure on AWS — from VPCs and EC2
              to automated pipelines and scalable, production-ready systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className="badge">{r}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                View projects
              </Link>
              {site.resumeUrl && (
                <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
                  View resume
                </a>
              )}
              <Link to="/contact" className="btn-outline">
                Contact me
              </Link>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 animate-fadeIn">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
                Featured <span className="accent-text">projects</span>
              </h2>
            </div>
            <Link to="/projects" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

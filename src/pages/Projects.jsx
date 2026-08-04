import ProjectCard from '../components/ProjectCard'
import PageHeader from '../components/PageHeader'
import { projects } from '../data/site'

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
      <PageHeader
        label="Work"
        title="Selected"
        highlight="projects"
        description="Cloud engineering projects — AWS infrastructure, automation, and deployment work."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

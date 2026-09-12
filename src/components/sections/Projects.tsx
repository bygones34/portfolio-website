import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section section-tinted">
      <div className="container">
        <SectionHeading
          eyebrow="02 / SELECTED WORK"
          title="Featured projects."
          description="Enterprise systems and personal builds spanning desktop, data, integrations and modern backend architecture."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
        </div>
      </div>
    </section>
  )
}

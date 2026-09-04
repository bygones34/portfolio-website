import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'
export function Projects(){return <section id="projects" className="section section-tinted"><div className="container"><SectionHeading eyebrow="02 / Selected Work" title="Featured projects." description="Enterprise systems and personal builds spanning desktop, data, integrations and modern backend architecture."/><div className="projects-grid">{projects.filter(p=>p.featured).map((p,i)=><ProjectCard key={p.title} project={p} index={i}/>)}</div></div></section>}

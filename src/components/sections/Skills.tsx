import { Boxes, Braces, Database, Laptop, Plug, Server, TestTube2, Wrench } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'
const icons=[Server,Laptop,Database,Boxes,TestTube2,Braces,Plug,Wrench]
export function Skills(){return <section id="skills" className="section section-tinted"><div className="container"><SectionHeading eyebrow="04 / Capabilities" title="A practical .NET toolkit." description="Technologies I use across enterprise application development, backend systems and data-intensive workflows."/><div className="skills-grid">{skillGroups.map((group,i)=>{const Icon=icons[i];return <article className="skill-card reveal" key={group.title}><Icon size={20}/><h3>{group.title}</h3><ul>{group.items.map(x=><li key={x}>{x}</li>)}</ul></article>})}</div></div></section>}

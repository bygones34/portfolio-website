import {
  Boxes,
  Braces,
  Database,
  Laptop,
  Plug,
  Server,
  TestTube2,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'

const icons = [Server, Laptop, Database, Boxes, TestTube2, Braces, Plug, Wrench]

export function Skills() {
  return (
    <section id="skills" className="section section-tinted">
      <div className="container">
        <SectionHeading
          eyebrow="04 / CAPABILITIES"
          title="A practical .NET toolkit."
          description="Technologies I use across enterprise application development, backend systems and data-intensive workflows."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i] || Wrench
            return (
              <article
                className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-5 hover:border-zinc-700/60 transition-all flex flex-col justify-between reveal"
                key={group.title}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-zinc-800/60 text-zinc-300 border border-zinc-700/40">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-sans font-medium text-zinc-200 text-sm tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2.5 py-1 text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-zinc-100 transition-colors inline-block"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

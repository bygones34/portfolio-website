import { experience } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="03 / EXPERIENCE"
          title="Building software in real operational environments."
        />

        <div className="space-y-6">
          {experience.map((item, i) => (
            <article
              key={item.role}
              className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-6 hover:border-zinc-700/60 transition-all reveal"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-sans font-semibold text-zinc-100 text-xl tracking-tight">
                    {item.role}
                  </h3>
                  <div className="font-mono text-xs text-zinc-400 flex items-center gap-2 mt-1">
                    {item.company && <span>{item.company}</span>}
                    {item.company && item.dates && <span>·</span>}
                    {item.dates && <time>{item.dates}</time>}
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  0{i + 1}
                </span>
              </div>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4">
                {item.description}
              </p>

              <ul className="space-y-2 mb-5">
                {item.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="text-xs md:text-sm text-zinc-400 flex items-start gap-2.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              {item.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                  {item.technologies.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

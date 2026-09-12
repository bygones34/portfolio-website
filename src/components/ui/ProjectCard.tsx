import { ArrowUpRight, BriefcaseBusiness, ExternalLink, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import type { Project } from '../../types/project'
import { TechBadge } from './TechBadge'
import { Github } from './icons'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const dialog = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const previous = document.activeElement as HTMLElement

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }

      if (e.key === 'Tab' && dialog.current) {
        const focusableElements =
          dialog.current.querySelectorAll<HTMLElement>('button,a[href]')

        if (!focusableElements.length) return

        const first = focusableElements[0]
        const last = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    setTimeout(() => {
      dialog.current?.querySelector<HTMLElement>('button')?.focus()
    }, 0)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [open])

  return (
    <>
      <article className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm p-6 hover:border-zinc-700 hover:bg-zinc-900/50 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between group reveal">
        <div>
          {/* Topline: Index and Category */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="font-mono text-xs text-zinc-500">
              0{index + 1}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 bg-zinc-900/80 border border-zinc-800/80 rounded-full px-2.5 py-0.5">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-sans tracking-tight font-semibold text-zinc-100 text-xl md:text-2xl mb-3 group-hover:text-white transition-colors">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            {project.shortDescription}
          </p>

          {/* Key Contributions (for featured/first item) */}
          {index === 0 && project.contributions && (
            <div className="mb-5 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
                Key Contributions
              </span>
              <ul className="space-y-1.5">
                {project.contributions.slice(0, 3).map((item) => (
                  <li
                    key={item}
                    className="text-xs text-zinc-400 flex items-start gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 6).map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        </div>

        {/* Footer: Status + Action links */}
        <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3 mt-auto">
          {project.professional ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <BriefcaseBusiness size={13} className="text-zinc-500" />
              Professional
            </span>
          ) : (
            <span className="text-xs font-mono text-zinc-400">
              Personal Project
            </span>
          )}

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 px-2.5 py-1.5 rounded-lg transition-all"
                title="View Source Code"
                aria-label="View Source on GitHub"
              >
                <Github size={14} />
                <span>Source</span>
              </a>
            )}

            <button
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 rounded-lg px-3 py-1.5 transition-all"
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
            >
              <span>Details</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </article>

      {/* Details Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false)
            }
          }}
        >
          <div
            className="rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative my-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            ref={dialog}
          >
            <button
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/70 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-2">
              {project.category}
            </span>

            <h2
              id={titleId}
              className="font-sans tracking-tight font-semibold text-zinc-100 text-2xl sm:text-3xl mb-3 pr-8"
            >
              {project.title}
            </h2>

            {project.professional && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-4 bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-full">
                <BriefcaseBusiness size={13} className="text-zinc-500" />
                Professional Project · Source is private
              </span>
            )}

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed my-4">
              {project.detailedDescription}
            </p>

            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-6 mb-3 font-medium">
              {project.professional ? 'Key Contributions' : 'Key Features'}
            </h3>

            <ul className="space-y-2 mb-6">
              {project.contributions.map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-400 flex items-start gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((technology) => (
                <TechBadge key={technology}>{technology}</TechBadge>
              ))}
            </div>

            {(project.githubUrl || project.liveDemoUrl) && (
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 transition-all"
                  >
                    <Github size={15} />
                    <span>View GitHub</span>
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 transition-all"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
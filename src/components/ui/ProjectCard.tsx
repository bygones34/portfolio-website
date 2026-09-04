import { ArrowUpRight, BriefcaseBusiness, Code2, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import type { Project } from '../../types/project'
import { TechBadge } from './TechBadge'

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
      <article className="project-card reveal">
        <div className="project-topline">
          <span className="project-index">0{index + 1}</span>
          <span className="project-category">{project.category}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.shortDescription}</p>

        {index === 0 && (
          <div className="project-highlights">
            <span className="project-highlights-title">
              Key Contributions
            </span>

            <ul>
              {project.contributions.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="badge-row">
          {project.technologies.slice(0, 5).map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>

        <div className="project-footer">
          {project.professional ? (
            <span className="professional">
              <BriefcaseBusiness size={14} />
              Professional Project
            </span>
          ) : (
            <span>Personal Project</span>
          )}

          <button
            className="details-button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            Details
            <ArrowUpRight size={16} />
          </button>
        </div>
      </article>

      {open && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setOpen(false)
            }
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            ref={dialog}
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Close project details"
            >
              <X />
            </button>

            <span className="eyebrow">{project.category}</span>

            <h2 id={titleId}>{project.title}</h2>

            {project.professional && (
              <span className="professional">
                <BriefcaseBusiness size={14} />
                Professional Project · source is private
              </span>
            )}

            <p className="modal-description">
              {project.detailedDescription}
            </p>

            <h3>
              {project.professional ? 'Key contributions' : 'Key features'}
            </h3>

            <ul>
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="badge-row">
              {project.technologies.map((technology) => (
                <TechBadge key={technology}>
                  {technology}
                </TechBadge>
              ))}
            </div>

            {(project.githubUrl || project.liveDemoUrl) && (
              <div className="modal-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 size={17} />
                    GitHub
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight size={17} />
                    Live demo
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
import {
  ArrowDownRight,
  ContactRound,
  Download,
} from 'lucide-react'

import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'
import { TechBadge } from '../ui/TechBadge'

const tech = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'SQL Server',
  'WPF',
  'Web API',
  'RabbitMQ',
]

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span />
            Enterprise Software · Backend · Data
          </div>

          <h1>Alper Dursun</h1>

          <div className="hero-role">
            Software Developer <span>/</span> .NET Developer
          </div>

          <p className="hero-lead">
            I build reliable, maintainable and data-driven software solutions
            using the .NET ecosystem.
          </p>

          <p className="hero-support">
            My experience includes enterprise desktop applications, backend
            services, SQL-based business logic, Excel integrations and modern
            web APIs.
          </p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary">
              View Projects
              <ArrowDownRight size={18} />
            </Button>

            <Button
              href={siteConfig.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />
              Download Resume
            </Button>

            <a
              className="icon-link"
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.985 1.029-2.684-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.684 0 3.842-2.337 4.687-4.566 4.935.359.309.679.92.679 1.854 0 1.338-.012 2.419-.012 2.747 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
              </svg>
            </a>

            <a
              className="icon-link"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.56V19H6.94V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM20.44 12.98C20.44 9.82 18.75 8.35 16.5 8.35C14.68 8.35 13.87 9.35 13.42 10.05V8.5H10.04C10.08 9.53 10.04 19 10.04 19H13.42V13.13C13.42 12.82 13.44 12.5 13.54 12.28C13.78 11.65 14.34 11 15.28 11C16.51 11 17 11.94 17 13.32V19H20.38L20.44 12.98Z" />
              </svg>
            </a>
          </div>

          <div className="hero-tech" aria-label="Core technologies">
            {tech.map((technology) => (
              <TechBadge key={technology}>
                {technology}
              </TechBadge>
            ))}
          </div>
        </div>

        <aside
          className="hero-visual"
          aria-label="Software engineering focus areas"
        >
          <div className="visual-header">
            <span>CORE PROFILE</span>
            <span className="status-dot">AVAILABLE</span>
          </div>

          <div className="visual-node visual-main">
            <span>01</span>
            <strong>.NET</strong>
            <small>APPLICATION ENGINEERING</small>
          </div>

          <div className="visual-branch">
            <div className="visual-node">
              <span>02</span>
              <strong>Backend</strong>
              <small>APIs · SERVICES</small>
            </div>

            <div className="visual-node">
              <span>03</span>
              <strong>Data</strong>
              <small>SQL · BUSINESS LOGIC</small>
            </div>
          </div>

          <div className="visual-footer">
            <span>C#</span>
            <span>WPF</span>
            <span>SQL SERVER</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
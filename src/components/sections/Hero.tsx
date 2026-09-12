import { ArrowDownRight, Download } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { TechBadge } from '../ui/TechBadge'
import { Github, Linkedin } from '../ui/icons'

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
    <section id="top" className="relative min-h-[90vh] flex items-center pt-32 sm:pt-40 pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-[1180px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Availability Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Enterprise Software · Backend · Data</span>
          </div>

          {/* Main Title */}
          <h1 className="font-sans tracking-tight font-bold text-zinc-100 text-5xl md:text-6xl mb-4">
            Alper Dursun
          </h1>

          {/* Role Subtitle */}
          <div className="text-xl md:text-2xl font-sans font-medium text-zinc-300 tracking-tight flex items-center gap-2.5 mb-6">
            <span>Software Developer</span>
            <span className="text-zinc-600 font-light">/</span>
            <span className="text-zinc-400">.NET Developer</span>
          </div>

          {/* Lead & Support Paragraphs */}
          <p className="text-zinc-300 text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-3">
            I build reliable, maintainable and data-driven software solutions
            using the .NET ecosystem.
          </p>

          <p className="text-zinc-400 text-base leading-relaxed max-w-xl mb-8">
            My experience includes enterprise desktop applications, backend
            services, SQL-based business logic, Excel integrations and modern
            web APIs.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="rounded-xl bg-zinc-100 text-zinc-900 font-medium px-5 py-2.5 hover:bg-zinc-200 transition-all inline-flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              <span>View Projects</span>
              <ArrowDownRight size={18} />
            </a>

            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 px-4 py-2.5 transition-all inline-flex items-center justify-center gap-2 text-sm"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 px-4 py-2.5 transition-all inline-flex items-center justify-center gap-2 text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 px-4 py-2.5 transition-all inline-flex items-center justify-center gap-2 text-sm"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Stack Tags / Pill Badges */}
          <div
            className="flex flex-wrap items-center gap-2"
            aria-label="Core technologies"
          >
            {tech.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        </div>

        {/* Right Column: Core Profile Card */}
        <div className="lg:col-span-5 w-full">
          <aside
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm p-6 hover:border-zinc-700 transition-all shadow-xl shadow-black/30 relative"
            aria-label="Software engineering focus areas"
          >
            {/* Header */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 tracking-wider mb-5">
              <span className="font-medium text-zinc-300">CORE PROFILE</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px] font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE
              </span>
            </div>

            {/* Main Highlight Node (01 .NET) */}
            <div className="rounded-xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-zinc-900/20 p-5 mb-3 relative overflow-hidden group hover:border-zinc-700/80 transition-all">
              <span className="absolute top-3 right-3 text-xs font-mono text-zinc-500">
                01
              </span>
              <strong className="block text-3xl sm:text-4xl font-bold font-sans tracking-tight text-zinc-100 mb-1">
                .NET
              </strong>
              <small className="block text-xs font-mono text-zinc-400 tracking-wider">
                APPLICATION ENGINEERING
              </small>
            </div>

            {/* Branch Nodes (02 Backend & 03 Data) */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-4 relative hover:border-zinc-700/80 transition-colors">
                <span className="absolute top-3 right-3 text-xs font-mono text-zinc-500">
                  02
                </span>
                <strong className="block text-base sm:text-lg font-semibold font-sans text-zinc-200 mb-1">
                  Backend
                </strong>
                <small className="block text-[11px] font-mono text-zinc-400 leading-tight">
                  APIs · SERVICES
                </small>
              </div>

              <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-4 relative hover:border-zinc-700/80 transition-colors">
                <span className="absolute top-3 right-3 text-xs font-mono text-zinc-500">
                  03
                </span>
                <strong className="block text-base sm:text-lg font-semibold font-sans text-zinc-200 mb-1">
                  Data
                </strong>
                <small className="block text-[11px] font-mono text-zinc-400 leading-tight">
                  SQL · BUSINESS LOGIC
                </small>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 text-xs font-mono text-zinc-500">
              <span>C#</span>
              <span>WPF</span>
              <span>SQL SERVER</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
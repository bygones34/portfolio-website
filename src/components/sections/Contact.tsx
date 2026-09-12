import { Mail } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Github, Linkedin } from '../ui/icons'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container max-w-3xl text-center reveal">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-3">
          06 / CONTACT
        </span>

        <h2 className="font-sans tracking-tight text-4xl md:text-5xl font-bold text-zinc-100 mb-5">
          Let's Connect
        </h2>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          I'm always interested in discussing software development, .NET
          technologies and new opportunities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-xl px-6 py-3 border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2.5 transition-all active:scale-95 text-sm font-medium shadow-sm"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl px-6 py-3 border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2.5 transition-all active:scale-95 text-sm font-medium shadow-sm"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl px-6 py-3 border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 flex items-center gap-2.5 transition-all active:scale-95 text-sm font-medium shadow-sm"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
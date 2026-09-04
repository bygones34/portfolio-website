import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '../../config/site'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner reveal">
        <span className="eyebrow">06 / Contact</span>

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in discussing software development,
          .NET technologies and new opportunities.
        </p>

        <div className="contact-links">
          <a href={`mailto:${siteConfig.email}`}>
            <Mail />
            Email
            <ArrowUpRight />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight />
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
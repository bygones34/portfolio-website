import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <SectionHeading
          eyebrow="01 / ABOUT"
          title="Software built around real business problems."
        />

        <div className="about-copy reveal">
          <p className="text-zinc-200 text-lg md:text-xl font-normal leading-relaxed mb-8">
            I'm a Computer Engineering graduate and Software Developer with
            professional experience in the .NET ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-400 text-sm md:text-base leading-relaxed">
            <p>
              I primarily work with C#, .NET, SQL Server, WPF and ASP.NET Core,
              developing enterprise applications that involve complex business
              rules, data processing and internal operational workflows.
            </p>
            <p>
              My professional experience has given me the opportunity to work
              across multiple layers of software development, including desktop
              applications, backend services, database development, Excel
              integrations and API-based systems.
            </p>
            <p>
              Beyond my professional work, I continuously improve my backend
              development skills through personal projects involving modern .NET
              architecture, REST APIs, authentication, messaging systems,
              Docker and automated testing.
            </p>
            <p>
              I enjoy understanding the business problem behind a feature rather
              than simply implementing the requested code, and I aim to build
              solutions that are maintainable, understandable and reliable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="05 / EDUCATION"
          title="Computer Engineering foundation."
        />

        <article className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-6 hover:border-zinc-700/60 transition-all reveal">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/40 text-zinc-300 shrink-0">
              <GraduationCap size={24} />
            </div>

            <div className="flex-1">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-1">
                Istanbul Kültür University
              </span>
              <h3 className="font-sans font-semibold text-zinc-100 text-xl sm:text-2xl tracking-tight mb-4">
                B.Sc. in Computer Engineering
              </h3>

              <div className="mt-4 pt-4 border-t border-zinc-800/60">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-1">
                  Graduation Project
                </span>
                <h4 className="font-sans font-medium text-zinc-200 text-base mb-2">
                  Analyzing Mental Fatigue Through Physiological Signals via
                  Deep Learning Methods
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  Academic project focused on investigating physiological signals
                  and applying deep learning methods to analyze mental fatigue.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

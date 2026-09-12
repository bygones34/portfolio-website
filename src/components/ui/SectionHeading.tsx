export function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
}: {
  eyebrow: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={`section-heading reveal max-w-2xl mb-12 md:mb-16 ${className}`}>
      <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 block mb-3">
        {eyebrow}
      </span>
      <h2 className="font-sans tracking-tight font-semibold text-zinc-100 text-3xl md:text-4xl mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed mt-2">
          {description}
        </p>
      )}
    </div>
  )
}

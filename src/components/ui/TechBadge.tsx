export function TechBadge({
  children,
  className = '',
}: {
  children: string
  className?: string
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300 inline-flex items-center hover:border-zinc-700 hover:text-zinc-100 transition-colors ${className}`}
    >
      {children}
    </span>
  )
}

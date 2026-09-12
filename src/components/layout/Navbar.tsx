import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteConfig } from '../../config/site'

const links = [
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Contact', 'contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none">
      <div className="w-full max-w-4xl relative pointer-events-auto">
        <nav
          className={`flex items-center justify-between gap-4 rounded-full border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md px-6 py-3 shadow-lg shadow-black/40 transition-all duration-300 ${
            scrolled ? 'shadow-black/70 border-zinc-700/80' : ''
          }`}
          aria-label="Primary navigation"
        >
          {/* Wordmark / Brand */}
          <a
            href="#top"
            className="flex items-center gap-2.5 font-sans font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800/90 border border-zinc-700/70 text-[11px] font-mono font-medium text-zinc-300">
              AD
            </span>
            <span className="text-sm tracking-tight">{siteConfig.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Actions: Resume button & Mobile menu toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-all active:scale-95"
            >
              <Download size={13} className="shrink-0" />
              <span>Resume</span>
            </a>

            <button
              className="md:hidden flex items-center justify-center p-1.5 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {open && (
          <div
            id="mobile-nav"
            className="md:hidden absolute top-full left-0 right-0 mt-2 p-3 rounded-2xl border border-zinc-800/90 bg-zinc-900/95 backdrop-blur-xl shadow-2xl flex flex-col gap-1"
          >
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

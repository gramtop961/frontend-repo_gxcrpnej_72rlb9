import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-md">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">MyPortfolio</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="mailto:you@example.com" className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-2 overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-3 backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-white/90 transition hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="mailto:you@example.com" className="rounded-lg bg-white/5 px-3 py-2 text-white/90" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 px-3 py-2 text-white/90" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 px-3 py-2 text-white/90" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

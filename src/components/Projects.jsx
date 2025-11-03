import { ExternalLink, Code, Star } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A WebGL-powered experience with real-time interactions and responsive design.',
    tech: ['React', 'Three.js', 'Spline'],
    link: '#',
    stars: 124,
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with charts, dark mode, and role-based access control.',
    tech: ['React', 'Tailwind', 'FastAPI'],
    link: '#',
    stars: 98,
  },
  {
    title: 'Portfolio Starter',
    description: 'A sleek, performant portfolio template with 3D hero and smooth animations.',
    tech: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#',
    stars: 210,
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-white">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Code size={14} />
          Selected Work
        </div>
        <h2 className="text-3xl font-semibold sm:text-4xl">Projects</h2>
        <p className="mt-3 text-white/70">A few things I’ve built recently.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.description}</p>
              </div>
              <div className="flex items-center gap-1 text-amber-300">
                <Star size={16} className="fill-amber-300" />
                <span className="text-sm text-amber-200/90">{p.stars}</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <a
              href={p.link}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <ExternalLink size={16} /> View project
            </a>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:"radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.15), transparent 40%)"}} />
          </article>
        ))}
      </div>
    </section>
  );
}

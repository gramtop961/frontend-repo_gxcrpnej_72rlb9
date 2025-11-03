import { Code2, Cpu, Database, Globe, GitBranch, Terminal, Package, Wrench } from 'lucide-react';

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function SkillsTools() {
  const skills = [
    { icon: <Code2 size={14} />, label: 'JavaScript / TypeScript' },
    { icon: <Globe size={14} />, label: 'React / Next.js' },
    { icon: <Cpu size={14} />, label: 'Web Performance' },
    { icon: <Database size={14} />, label: 'Databases & APIs' },
  ];

  const tools = [
    { icon: <Terminal size={14} />, label: 'Node.js' },
    { icon: <Package size={14} />, label: 'Vite / Webpack' },
    { icon: <GitBranch size={14} />, label: 'Git & GitHub' },
    { icon: <Wrench size={14} />, label: 'Tailwind CSS' },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-white">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Skills & Tools</h2>
        <p className="mt-3 text-white/70">Technologies I use to craft performant, scalable products.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Skills Card */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <div className="mb-4 flex items-center gap-2 text-white/80">
            <Code2 size={18} className="text-cyan-300" />
            <h3 className="text-lg font-semibold">Skills</h3>
          </div>
          <p className="mb-5 text-sm text-white/70">Core capabilities across front‑end engineering, systems, and experience design.</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Tag key={s.label}>
                {s.icon}
                {s.label}
              </Tag>
            ))}
          </div>
        </div>

        {/* Tools Card */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
          <div className="mb-4 flex items-center gap-2 text-white/80">
            <Wrench size={18} className="text-blue-300" />
            <h3 className="text-lg font-semibold">Developer Tools</h3>
          </div>
          <p className="mb-5 text-sm text-white/70">Daily drivers that help me build, test, and ship with confidence.</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <Tag key={t.label}>
                {t.icon}
                {t.label}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

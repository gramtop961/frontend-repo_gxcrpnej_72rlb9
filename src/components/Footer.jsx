import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-16 text-white">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 max-w-md text-white/70">
              I’m currently open to new opportunities and collaborations. Drop a message and I’ll get back soon.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
                <Mail size={16} /> you@example.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input type="text" required placeholder="Jane Doe" className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-400/50" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input type="email" required placeholder="jane@email.com" className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-400/50" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Message</label>
                <textarea required rows={4} placeholder="Tell me about your project..." className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-cyan-400/50" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
              <Send size={16} /> Send message
            </button>
          </form>
        </div>

        <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Decorative gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <div className="mx-auto w-fit rounded-full border border-white/10 bg-black/30 px-4 py-1.5 backdrop-blur">
          <span className="inline-flex items-center gap-2 text-xs text-white/80">
            <Sparkles size={14} className="text-yellow-300" />
            Interactive 3D portfolio
          </span>
        </div>

        <h1 className="mt-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          I build delightful web experiences that blend design, performance, and interactivity.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

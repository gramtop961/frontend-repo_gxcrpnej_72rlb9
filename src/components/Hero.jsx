import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Decorative gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto w-fit rounded-full border border-white/10 bg-black/30 px-4 py-1.5 backdrop-blur"
        >
          <span className="inline-flex items-center gap-2 text-xs text-white/80">
            <Sparkles size={14} className="text-pink-300" />
            Interactive 3D portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-white bg-clip-text text-transparent">Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg"
        >
          I build delightful web experiences that blend design, performance, and interactivity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition"
          >
            View Projects
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Subtle floating glow accents */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </div>
    </section>
  );
}

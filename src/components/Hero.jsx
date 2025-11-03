import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image (restored, non-3D) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1920&q=80"
          alt="Retro dark workspace background"
          className="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* Dark gradient overlay to ensure contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto w-fit rounded-full border border-white/10 bg-black/40 px-4 py-1.5 backdrop-blur"
        >
          <span className="inline-flex items-center gap-2 text-xs text-white/80">
            <Sparkles size={14} className="text-cyan-300" />
            Fast, accessible & delightful
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Crafting interactive experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg"
        >
          Modern web engineering with a love for motion, usability, and performance. Explore selected work and capabilities below.
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
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition"
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
      </div>
    </section>
  );
}

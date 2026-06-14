import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { Suspense } from 'react'
import ParticleField from './ParticleField'
import TypewriterText from './TypewriterText'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 18], fov: 60 }} dpr={[1, 2]} fallback={null}>
            <ParticleField />
          </Canvas>
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space/20 to-deep-space pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-neon-cyan font-mono text-sm mb-4 tracking-widest uppercase"
          >
            Frontend Engineer & Ecosystem Architect
          </motion.p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
            Uzair{' '}
            <span className="text-gradient">Shahid</span>
          </h1>

          <TypewriterText
            className="text-slate-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed h-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group px-8 py-3 rounded-full bg-neon-cyan text-deep-space font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-glass-border text-slate-light font-semibold text-sm hover:bg-glass-hover hover:border-neon-cyan/30 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-slate-muted animate-scroll" />
      </motion.div>
    </section>
  )
}

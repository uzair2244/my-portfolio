import { motion } from 'framer-motion'

export default function SectionHeading({ number, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12 md:mb-16"
    >
      <span className="text-neon-cyan font-mono text-sm font-medium">{number}</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-light">
        {title}
      </h2>
      <div className="flex-1 h-px bg-glass-border" />
    </motion.div>
  )
}

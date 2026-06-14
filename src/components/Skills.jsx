import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 92 },
      { name: 'CSS / Tailwind', level: 90 },
      { name: 'Material-UI', level: 88 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Cloudflare Workers', level: 78 },
      { name: 'Python / asyncio', level: 88 },
      { name: 'Firebase', level: 80 },
      { name: 'JWT / Auth', level: 85 },
    ],
  },
  {
    title: 'AI, APIs & Data',
    skills: [
      { name: 'AI Model Integration', level: 80 },
      { name: 'Google Maps API', level: 85 },
      { name: 'WebSocket / Real-time', level: 88 },
      { name: 'Binance API', level: 80 },
      { name: 'REST / GraphQL', level: 88 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-void/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title="Skills & Expertise" />

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-hover rounded-2xl p-6"
            >
              <h3 className="text-neon-cyan font-mono text-sm tracking-wider uppercase mb-6">
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-light">{skill.name}</span>
                      <span className="text-slate-dim font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-glass-border overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-dim text-sm">
            ...and exploring WebRTC, Three.js, and AI Music Generation on the side
          </p>
        </motion.div>
      </div>
    </section>
  )
}

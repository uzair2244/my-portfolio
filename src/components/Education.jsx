import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import SectionHeading from './SectionHeading'

const items = [
  {
    type: 'education',
    title: 'BSc in Computer Science',
    org: 'University of Agriculture, Faisalabad',
    period: '2020 – 2024',
  },
  {
    type: 'cert',
    title: 'Learning Next.js',
    org: 'LinkedIn',
    period: 'March 2026',
  },
  {
    type: 'cert',
    title: 'Generative AI Music Visualizer with JS & React',
    org: 'LinkedIn',
    period: 'February 2026',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="07" title="Education & Certifications" />

        <div className="max-w-3xl mx-auto space-y-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-hover rounded-xl p-5 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-glass border border-glass-border mt-0.5">
                {item.type === 'education' ? (
                  <GraduationCap size={18} className="text-neon-cyan" />
                ) : (
                  <Award size={18} className="text-neon-purple" />
                )}
              </div>
              <div>
                <h3 className="text-slate-light font-semibold">{item.title}</h3>
                <p className="text-slate-dim text-sm">{item.org}</p>
                <span className="text-neon-cyan font-mono text-xs mt-1 block">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

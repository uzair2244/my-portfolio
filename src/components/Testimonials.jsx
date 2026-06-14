import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    quote:
      "Uzair impressed me with his clear communication skills and enthusiastic approach during our brief interaction. I recommend him for his strong work ethic and believe he'll excel in any future endeavors.",
    author: 'Umer Qaiser',
    role: 'Tech Lead & Product Engineer',
    note: '9+ Years Global Industry Experience',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-void/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="06" title="Testimonials" />

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="glass-hover rounded-2xl p-8 md:p-10 text-center relative"
            >
              <Quote size={32} className="text-neon-cyan/20 mx-auto mb-6" />
              <p className="text-slate-light text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-slate-light font-semibold">{t.author}</p>
                <p className="text-slate-dim text-sm">{t.role}</p>
                {t.note && <p className="text-neon-cyan text-xs mt-1">{t.note}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

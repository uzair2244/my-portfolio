import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '1K+', label: 'Package Downloads' },
  { value: '4', label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title="About Me" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-slate-muted text-base sm:text-lg leading-relaxed">
              Rooted in a Computer Science foundation from the University of Agriculture, Faisalabad,
              my work lives at the intersection of engineering precision and creative problem-solving.
              I build frontend systems that don't just function — they perform, scale, and evolve.
            </p>
            <p className="text-slate-muted text-base sm:text-lg leading-relaxed">
              Currently shaping SaaS platforms at <span className="text-slate-light font-medium">Preesoft Pvt Ltd</span>,
              I architect KPI dashboards, role-based access systems, and AI-powered tooling using React.js.
              I collaborate across design, product, and backend to turn complex requirements into
              production-ready code.
            </p>
            <p className="text-slate-muted text-base sm:text-lg leading-relaxed">
              Beyond the day job, I build trading bots, ship open-source packages that cross
              <span className="text-slate-light font-medium"> 1,000+ downloads in days</span>,
              bridge AI models with Cloudflare Workers, and explore the edges of what web technology
              can achieve. I don't just write code — I build digital ecosystems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-hover rounded-xl p-5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-dim text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

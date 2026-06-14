import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const experiences = [
  {
    role: 'React Developer',
    company: 'Preesoft Pvt Ltd',
    period: 'Dec 2024 – Present',
    type: 'Full-time · On-site',
    location: 'Lahore, Pakistan',
    highlights: [
      'Architecting scalable frontend solutions with React.js for global clients',
      'Specializing in SaaS development, KPI dashboards, and RBAC implementation',
      'Collaborating across design, product, and backend teams for production-ready code',
    ],
  },
  {
    role: 'Business Development Executive',
    company: 'Momin Solutions',
    period: 'Jul 2024 – Nov 2024',
    type: 'Full-time · On-site',
    location: 'Lahore, Pakistan',
    highlights: [
      'Managed client relations and streamlined sales pipelines using CRM tools',
      'Drove business development initiatives for technology solutions',
    ],
  },
  {
    role: 'Business Development Executive',
    company: 'Mavericks United',
    period: 'Jan 2024 – Jul 2024',
    type: 'Full-time · On-site',
    location: 'Lahore, Pakistan',
    highlights: [
      'Identified strategic growth opportunities for technology services',
      'Drove business development initiatives and client acquisition',
    ],
  },
  {
    role: 'Freelance Editor',
    company: 'Upwork',
    period: 'Mar 2020 – May 2023',
    type: 'Freelance · Remote',
    location: '',
    highlights: [
      'Delivered high-quality digital media assets for global clients',
      'Built independent workflow and client management systems',
    ],
  },
]

export default function Timeline() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="03" title="Work Experience" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-neon-cyan border-2 border-deep-space -translate-x-1.5 mt-2 z-10" />
              <div               className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <div className="glass-hover rounded-xl p-5 md:p-6">
                  <span className="text-neon-cyan font-mono text-xs">{exp.period}</span>
                  <h3 className="text-lg font-bold text-slate-light mt-1">{exp.role}</h3>
                  <p className="text-slate-dim text-sm">
                    {exp.company}
                    {exp.location && ` · ${exp.location}`}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-slate-muted text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon-cyan flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

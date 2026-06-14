import { motion } from 'framer-motion'
import { Check, Layers, Shield, BarChart3, Map, MessageSquare, UserCog, FileText } from 'lucide-react'
import SectionHeading from './SectionHeading'

const modules = [
  { icon: BarChart3, label: 'Sales Dashboard & Lead Map' },
  { icon: Map, label: 'Campaign Management' },
  { icon: UserCog, label: 'Field Workforce Management' },
  { icon: Layers, label: 'LMS Integration' },
  { icon: FileText, label: 'Reporting & Analytics' },
  { icon: Shield, label: 'Admin & RBAC' },
  { icon: MessageSquare, label: 'Real-time Communication' },
  { icon: Map, label: 'Command Center & Dispatch' },
]

const techStack = [
  'React 18', 'MUI 5', 'Vite', 'Firebase', 'JWT', 'Axios', 'SWR',
  'Framer Motion', 'i18next', 'React Router v6', 'Leaflet', 'Google Maps',
  'Mapbox', 'Socket.io', 'ApexCharts', 'Stripe', 'FullCalendar',
]

const highlights = [
  'Context-driven state management with domain-specific providers',
  'Role-based routing with guarded access control',
  'Multi-auth (JWT, Firebase, Auth0, AWS Amplify)',
  'i18n with multi-language RTL support',
  'Dark/light theme with customizable layout',
  'Real-time WebSocket communication',
  'Dynamic form schemas for configurable data collection',
  'PDF generation, voice recording, file upload & image lightbox',
]

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="05" title="Enterprise S&O Platform" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-hover rounded-2xl p-6 md:p-10 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-light mb-4">
                Sales & Operations Management Platform
              </h3>
              <p className="text-slate-muted text-sm leading-relaxed mb-4">
                A feature-rich, role-based SPA designed for managing end-to-end sales operations,
                field workforce, and territory analytics. Serving multiple user tiers with tailored
                dashboards and permissions.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 8).map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-glass border border-glass-border text-slate-dim text-xs font-mono">
                    {t}
                  </span>
                ))}
                <span className="px-2.5 py-1 rounded-md bg-glass border border-glass-border text-neon-cyan text-xs font-mono">
                  +{techStack.length - 8} more
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-light mb-4">Architecture Highlights</h4>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-slate-muted text-sm">
                    <Check size={14} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-lg font-semibold text-slate-light mb-5 text-center">Key Modules</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {modules.map((mod) => (
              <div
                key={mod.label}
                className="glass-hover rounded-xl p-4 text-center group"
              >
                <mod.icon size={24} className="mx-auto mb-2 text-neon-cyan group-hover:text-neon-purple transition-colors" />
                <span className="text-slate-muted text-xs leading-tight block">{mod.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

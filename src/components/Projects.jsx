import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

function GithubIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'ShortForge',
    desc: 'AI-powered content creation tool that transforms any topic into professional YouTube Shorts or long-form videos with one click — eliminating manual editing bottlenecks.',
    tags: ['AI Integration', 'React', 'Frontend Automation', 'Cloudflare'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Nexus',
    desc: 'High-performance automated trading bot built to execute complex, real-time trading strategies across cryptocurrency markets with precision and low latency.',
    tags: ['Node.js', 'Python', 'WebSocket', 'Real-time'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Crypto Trading Dashboard',
    desc: 'Real-time analytics and monitoring dashboard for cryptocurrency portfolios, featuring live price feeds, P&L tracking, and strategy backtesting visualizations.',
    tags: ['React', 'Node.js', 'WebSocket', 'Chart.js', 'Python'],
    links: { live: '#', github: '#' },
  },
  {
    title: 'Open-Source Packages',
    desc: 'Published reusable npm packages that crossed 1,000+ downloads within days of release, solving common frontend development pain points.',
    tags: ['JavaScript', 'npm', 'Open Source'],
    links: { github: '#' },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-void/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="04" title="Featured Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-hover rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-light mb-3 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-muted text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-glass border border-glass-border text-slate-dim text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* {project.links.live && (
                    <a
                      href={project.links.live}
                      className="flex items-center gap-1.5 text-xs text-slate-muted hover:text-neon-cyan transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )} */}
                  {/* {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-1.5 text-xs text-slate-muted hover:text-neon-cyan transition-colors"
                    >
                      <GithubIcon size={14} /> Source
                    </a>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

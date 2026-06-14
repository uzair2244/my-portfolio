export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-glass-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#hero" className="text-lg font-bold font-mono text-neon-cyan">
          US<span className="text-neon-purple">.</span>
        </a>
        <p className="text-slate-dim text-xs">
          &copy; {new Date().getFullYear()} - All rights reserved.
        </p>
      </div>
    </footer>
  )
}

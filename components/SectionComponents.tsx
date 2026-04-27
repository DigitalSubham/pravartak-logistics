import { ReactNode } from 'react'

interface SectionProps {
  children:   ReactNode
  className?: string
  id?:        string
}
export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  label?:       string
  title:        string
  description?: string
  centered?:    boolean
  light?:       boolean
}
export function SectionHeading({ label, title, description, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      {label && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full ${
            light ? 'text-white/80 bg-white/10' : 'text-white'
          }`}
          style={light ? {} : { background: 'linear-gradient(135deg, #C2185B, #9C27B0, #3949AB, #00ACC1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl lg:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base lg:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

interface PageHeroProps {
  label?:       string
  title:        string
  description?: string
}
export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <div className="pt-24 pb-14 lg:pt-32 lg:pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0628 0%, #0e1340 50%, #001e2b 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#C2185B' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#00ACC1' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full text-white border border-white/20 bg-white/10"
          >
            {label}
          </span>
        )}
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">{title}</h1>
        {description && (
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
        )}
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #C2185B, #9C27B0, #3949AB, #00ACC1)' }} />
    </div>
  )
}

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({ label, title, description, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      {label && (
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full ${
          light
            ? 'text-blue-200 bg-white/10'
            : 'text-blue-600 bg-blue-50'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl lg:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base lg:text-lg leading-relaxed ${light ? 'text-blue-100' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

interface PageHeroProps {
  label?: string
  title: string
  description?: string
  breadcrumbs?: { label: string; href: string }[]
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <div className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {label && (
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full text-blue-300 bg-white/10">
            {label}
          </span>
        )}
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">{title}</h1>
        {description && (
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}

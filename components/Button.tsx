import Link from 'next/link'
import { ReactNode, CSSProperties } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children:  ReactNode
  variant?:  Variant
  size?:     Size
  href?:     string
  className?: string
  style?:    CSSProperties
  type?:     'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?:  () => void
  external?: boolean
}

const GRADIENT = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  href,
  className = '',
  style,
  type     = 'button',
  disabled = false,
  onClick,
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`

  const getStyle = (): CSSProperties => {
    if (style) return style
    switch (variant) {
      case 'primary':
        return { background: GRADIENT, color: '#fff', boxShadow: '0 4px 20px rgba(156,39,176,0.35)' }
      case 'secondary':
        return { background: '#1e293b', color: '#fff' }
      case 'outline':
        return { border: '2px solid transparent', backgroundImage: `${GRADIENT}, ${GRADIENT}`, backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box', color: '#6A1B9A' }
      case 'ghost':
        return { color: '#3949AB', background: 'transparent' }
      case 'white':
        return { background: '#fff', color: '#6A1B9A', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }
      default:
        return {}
    }
  }

  const hoverClass = variant === 'primary'
    ? 'hover:-translate-y-0.5 hover:shadow-2xl'
    : variant === 'white'
    ? 'hover:-translate-y-0.5 hover:bg-purple-50'
    : variant === 'outline'
    ? 'hover:-translate-y-0.5'
    : ''

  const finalClass = `${base} ${hoverClass}`
  const finalStyle = getStyle()

  if (href) {
    if (external) return <a href={href} className={finalClass} style={finalStyle} target="_blank" rel="noopener noreferrer">{children}</a>
    return <Link href={href} className={finalClass} style={finalStyle}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={finalClass} style={finalStyle}>
      {children}
    </button>
  )
}

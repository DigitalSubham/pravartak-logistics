import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-200 hover:shadow-lg hover:-translate-y-0.5',
  outline:
    'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5',
  ghost:
    'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={base} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}

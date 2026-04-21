'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Package2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Track', href: '/track' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100' : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 group-hover:bg-blue-700 transition-colors duration-200">
              <Package2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-800 text-xl text-slate-400 tracking-tight">
              Pravartak<span className="text-blue-600"> Logistics</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/track"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              Track Shipment
            </Link>
            <Link
              href="/order"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="pb-4 pt-2 space-y-1 border-t border-slate-100 bg-white/95 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${pathname === link.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 px-1">
              <Link
                href="/track"
                className="w-full text-center px-5 py-3 bg-white text-slate-600 border border-slate-200 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200"
              >
                Track Shipment
              </Link>
              <Link
                href="/order"
                className="w-full text-center px-5 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

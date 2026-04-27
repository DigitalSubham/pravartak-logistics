'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 40%, #3949AB 70%, #00ACC1 100%)'

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
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md transition-all duration-300"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: GRAD }} />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-[66px] items-center justify-between transition-all duration-300 lg:h-[90px]">

            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo_t.png"
                alt="Pravartak Logistics India Private Limited"
                width={420}
                height={112}
                className="h-[62px] w-auto object-contain transition-all duration-300 sm:h-[68px] lg:h-[82px] xl:h-[88px]"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 group ${active
                      ? 'text-white'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-xl" style={{ background: GRAD }} />
                    )}
                    {!active && (
                      <span
                        className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                        style={{ background: GRAD }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                )
              })}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/track"
                className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                Track Shipment
              </Link>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:opacity-90 whitespace-nowrap"
                style={{ background: GRAD }}
              >
                Get Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-xl p-2.5 text-slate-700 transition-colors duration-200 hover:bg-slate-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Side drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[310px] z-[70] flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-[4px] w-full shrink-0" style={{ background: GRAD }} />

        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 shrink-0">
          <Image
            src="/logo_t.png"
            alt="Pravartak Logistics"
            width={280}
            height={75}
            className="h-[62px] sm:h-[68px] w-auto object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${active ? 'text-white shadow-lg' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                style={active ? { background: GRAD } : {}}
              >
                <span>{link.label}</span>
                {active && <ArrowRight className="w-4 h-4 opacity-80" />}
              </Link>
            )
          })}
        </nav>

        <div className="px-4 pt-4 pb-8 border-t border-slate-100 space-y-3 shrink-0">
          <Link
            href="/track"
            className="flex items-center justify-center w-full py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-bold hover:border-purple-300 hover:text-purple-700 transition-all duration-200"
          >
            Track Shipment
          </Link>
          <Link
            href="/order"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity duration-200 shadow-lg"
            style={{ background: GRAD }}
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="tel:+911234567890"
            className="flex items-center justify-center gap-2 w-full py-2 text-slate-400 text-xs font-medium hover:text-slate-600 transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" /> +91 12345 67890
          </Link>
        </div>
      </aside >
    </>
  )
}

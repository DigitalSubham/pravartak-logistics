import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.77L6.2 22H3.1l7.24-8.28L1 2h6.25l4.32 6.19L18.9 2Z" />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56A1.94 1.94 0 1 0 3.28 5a1.94 1.94 0 0 0 3.88-.06ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.66V8.5h3.24v1.57h.04a3.55 3.55 0 0 1 3.19-1.75c3.42 0 4.05 2.25 4.05 5.18V20Z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8.2h2.76l.41-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.7V4.14A22.2 22.2 0 0 0 14.32 4c-2.45 0-4.12 1.5-4.12 4.24v2.36H7.44v3.2h2.76V22h3.3Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.9A3.85 3.85 0 0 0 3.9 7.75v8.5a3.85 3.85 0 0 0 3.85 3.85h8.5a3.85 3.85 0 0 0 3.85-3.85v-8.5a3.85 3.85 0 0 0-3.85-3.85h-8.5Zm8.95 1.42a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9A3.1 3.1 0 1 0 12 15.1 3.1 3.1 0 0 0 12 8.9Z" />
    </svg>
  )
}

const services = [
  { label: 'Air Freight', href: '/services' },
  { label: 'Ocean Freight', href: '/services' },
  { label: 'Road Transport', href: '/services' },
  { label: 'Warehousing', href: '/services' },
  { label: 'Last-Mile Delivery', href: '/services' },
  { label: 'Cold Chain', href: '/services' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
  { label: 'Track Shipment', href: '/track' },
]

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

const socials = [
  { icon: XIcon, href: '#', label: 'Twitter' },
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo_t.png"
                alt="Pravartak Logistics"
                width={320}
                height={86}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400 mb-6">
              Delivering excellence across India and beyond. Your trusted logistics partner for reliable, fast, and secure shipments.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:opacity-80 flex items-center justify-center transition-opacity duration-200"
                  style={{ background: 'linear-gradient(135deg, #C2185B, #9C27B0, #3949AB, #00ACC1)' }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm hover:text-white transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-sm hover:text-white transition-colors duration-200">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+911234567890" className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#00ACC1' }} />
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a href="mailto:info@pravartak.com" className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#9C27B0' }} />
                  info@pravartak.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#C2185B' }} />
                  Pravartak House, Logistics Park,<br />Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient bar */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #C2185B, #9C27B0, #3949AB, #00ACC1)' }} />

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Pravartak Logistics India Private Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legal.map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

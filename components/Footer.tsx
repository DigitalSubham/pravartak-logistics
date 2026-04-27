import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

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
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
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

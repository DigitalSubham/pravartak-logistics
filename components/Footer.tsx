import Link from 'next/link'
import { Package2, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

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
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <Package2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-700 text-xl text-white">
                Pravartak<span className="text-blue-400"> Logistics</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Delivering excellence across borders. Your trusted logistics partner for reliable, fast, and secure shipments worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-slate-400 hover:text-white" />
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
                <a href="tel:+11234567890" className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:hello@pravartaklogistics.in" className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                  hello@pravartaklogistics.in
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                  1200 Commerce Ave, Suite 400<br />New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Pravartak Logistics. All rights reserved.
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

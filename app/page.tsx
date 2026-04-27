'use client'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Search, Star, Shield, Zap, Globe,
  TrendingUp, Package, ChevronRight,
  Truck, Warehouse, MapPin, CheckCircle2,
  Quote, Phone,
} from 'lucide-react'
import Button from '@/components/Button'
import { Section, SectionHeading } from '@/components/SectionComponents'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Gradient blobs */}
      <div className="absolute top-16 right-[-140px] h-[360px] w-[360px] rounded-full blur-3xl opacity-10" style={{ background: '#C2185B' }} />
      <div className="absolute bottom-10 left-[-120px] h-[320px] w-[320px] rounded-full blur-3xl opacity-10" style={{ background: '#00ACC1' }} />
      <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-[0.07]" style={{ background: '#9C27B0' }} />
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">

          {/* Left */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Trusted across India & beyond
            </div>

            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 lg:text-6xl xl:text-7xl">
              Logistics That
              <span className="block mt-1" style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Never Stops.
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 lg:text-xl">
              Pravartak connects your business to the world — fast, reliable, and trackable shipments on time, every time.
            </p>

            <div className="mb-4 max-w-2xl rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                  <Search className="h-5 w-5 shrink-0 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter tracking ID"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <Link
                  href="/track"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 sm:px-7"
                  style={{ background: GRAD }}
                >
                  Track Shipment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <p className="mb-12 text-sm text-slate-500">
              Enter your shipment ID to get the latest delivery status instantly.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Live status updates
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Nationwide coverage
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Fast response support
              </span>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-8">
              {[
                { value: '500K+', label: 'Deliveries' },
                { value: '99.4%', label: 'On-time Rate' },
                { value: '80+', label: 'Cities Served' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="h-8 w-px bg-slate-200" />}
                  <div>
                    <div className="font-display text-xl font-bold" style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tracking card */}
          <div className="lg:pl-8">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
              <div className="border-b border-slate-200 bg-slate-50 px-7 py-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Shipment Visibility</p>
                <h3 className="font-display text-2xl font-bold text-slate-900">Track every movement with clarity.</h3>
              </div>

              <div className="space-y-4 p-7">
                {[
                  { label: 'Pickup Confirmed', detail: 'Mumbai Hub • 09:30 AM', color: '#3949AB' },
                  { label: 'In Transit', detail: 'Heading to Delhi Sort Center', color: '#f59e0b' },
                  { label: 'Out for Delivery', detail: 'Expected today by 6:00 PM', color: '#10b981' },
                ].map((item, i) => (
                  <div key={item.label} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    <div className="flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full" style={{ background: item.color }} />
                      {i < 2 && <span className="mt-2 h-10 w-px bg-slate-200" />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 border-t border-slate-200 bg-white">
                {[
                  { value: '24/7', label: 'Tracking' },
                  { value: '80+', label: 'Cities' },
                  { value: '99.4%', label: 'On Time' },
                ].map((item) => (
                  <div key={item.label} className="px-4 py-5 text-center">
                    <p className="font-display text-xl font-bold text-slate-900">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: GRAD }} />
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────
const services = [
  { icon: Truck, title: 'Road Transportation', desc: 'Reliable door-to-door transport with real-time tracking across India.', from: '#C2185B', to: '#9C27B0' },
  { icon: Warehouse, title: 'Smart Warehousing', desc: 'Secured, climate-controlled storage facilities at strategic locations.', from: '#9C27B0', to: '#6A1B9A' },
  { icon: MapPin, title: 'Last-Mile Delivery', desc: 'Same-day and next-day delivery to keep your customers delighted.', from: '#6A1B9A', to: '#3949AB' },
  { icon: Globe, title: 'International Freight', desc: 'Seamless air and ocean freight to 80+ countries worldwide.', from: '#3949AB', to: '#1E88E5' },
  { icon: Package, title: 'E-commerce Fulfillment', desc: 'End-to-end fulfillment for online stores — pick, pack, and ship at scale.', from: '#1E88E5', to: '#0097A7' },
  { icon: Shield, title: 'Secure Cold Chain', desc: 'Temperature-controlled logistics for pharma, food, and perishables.', from: '#0097A7', to: '#00ACC1' },
]

function Services() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading label="What We Offer" title="End-to-End Logistics Solutions" description="From first mile to last — we handle every aspect of your supply chain with precision and care." centered />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
            {/* Top gradient line on hover */}
            <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${s.from}, ${s.to})` }} />
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
              style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
            >
              <s.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all duration-200" style={{ color: s.from }}>
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────
const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Same-day pickups and express options for urgent shipments.', color: '#C2185B' },
  { icon: Shield, title: 'Fully Insured', desc: 'Every shipment covered by comprehensive cargo insurance.', color: '#9C27B0' },
  { icon: Globe, title: 'Pan-India Network', desc: 'Access to 500+ logistics partners across India.', color: '#3949AB' },
  { icon: TrendingUp, title: 'Live Tracking', desc: 'Real-time GPS tracking and automated status updates.', color: '#00ACC1' },
]

function WhyChooseUs() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading label="Why Pravartak" title="The Standard for Modern Logistics" description="We combine technology, people, and infrastructure to deliver an experience that's simply better." />
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${f.color}15` }}>
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 mb-1">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[
            { value: '500K+', label: 'Shipments Delivered', from: '#C2185B', to: '#9C27B0' },
            { value: '99.4%', label: 'On-Time Rate', from: '#0e1340', to: '#1a0628' },
            { value: '5,000+', label: 'Happy Clients', from: '#0e1340', to: '#001e2b' },
            { value: '80+', label: 'Cities Served', from: '#3949AB', to: '#00ACC1' },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl p-7 text-white" style={{ background: `linear-gradient(135deg, ${stat.from}, ${stat.to})` }}>
              <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-75">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── How It Works ────────────────────────────────────────────────────────────
const steps = [
  { step: '01', title: 'Get a Quote', desc: 'Fill our simple form and receive an instant quote tailored to your shipment.' },
  { step: '02', title: 'Schedule Pickup', desc: 'Choose your pickup time and we arrive at your location on time.' },
  { step: '03', title: 'We Handle It', desc: 'Your shipment is packed, documented, and dispatched securely.' },
  { step: '04', title: 'Track & Receive', desc: 'Follow your shipment live until safe delivery is confirmed.' },
]

function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0628 0%, #0e1340 50%, #001e2b 100%)' }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Simple Process" title="Shipping in 4 Easy Steps" description="We've streamlined logistics so you can focus on your business." centered light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px opacity-30" style={{ background: GRAD }} />
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 text-center">
              <div
                className="w-20 h-20 rounded-2xl font-display text-2xl font-bold text-white flex items-center justify-center mx-auto mb-6 shadow-lg"
                style={{ background: GRAD }}
              >
                {s.step}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: GRAD }} />
    </section>
  )
}

// ─── Testimonials ────────────────────────────────────────────────────────────
const testimonials = [
  { quote: 'Pravartak transformed our supply chain. Deliveries that used to take a week now happen in 2 days. Absolutely game-changing.', name: 'Rohit Sharma', role: 'Head of Operations, Nexus Retail', rating: 5, initials: 'RS', from: '#C2185B', to: '#9C27B0' },
  { quote: 'Real-time tracking and proactive communication gives us total confidence. We\'ve never had an unresolved issue with Pravartak.', name: 'Ananya Iyer', role: 'Supply Chain Director, MedCore India', rating: 5, initials: 'AI', from: '#3949AB', to: '#1E88E5' },
  { quote: 'Switching to Pravartak cut our logistics costs by 23%. The platform is intuitive and the team is always responsive.', name: 'Vikram Mehta', role: 'Co-Founder, FreshBox', rating: 5, initials: 'VM', from: '#0097A7', to: '#00ACC1' },
]

function Testimonials() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading label="Client Stories" title="Trusted by Leading Businesses" description="Here's what our clients say about working with Pravartak." centered />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${t.from}, ${t.to})` }} />
            <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: t.from }} />
            <p className="text-slate-700 text-sm leading-relaxed mb-6">{t.quote}</p>
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}>
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <Section>
      <div className="rounded-3xl px-8 py-16 lg:py-20 text-center relative overflow-hidden" style={{ background: GRAD }}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="relative">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-5">Ready to Ship Smarter?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Join 5,000+ businesses that trust Pravartak to keep their supply chain moving. Get your free quote today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/order" size="lg" variant="white">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Button>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 border-white/40 text-white hover:bg-white/10 transition-all duration-200">
              <Phone className="w-4 h-4" /> Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  )
}

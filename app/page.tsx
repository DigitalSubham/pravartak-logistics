'use client'
import Link from 'next/link'
import {
  ArrowRight, Search, Star, Shield, Zap, Globe,
  TrendingUp, Package, ChevronRight,
  Truck, Warehouse, MapPin,
  Quote, Phone
} from 'lucide-react'
import Button from '@/components/Button'
import { Section, SectionHeading } from '@/components/SectionComponents'

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC4zIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by 5,000+ businesses worldwide
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Logistics That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Never Stops.
              </span>
            </h1>

            <p className="text-blue-100/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Pravartak connects your business to the world. Fast, reliable, and trackable shipments — on time, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="/order" size="lg" variant="primary">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/track" size="lg" variant="outline">
                <Search className="w-4 h-4" />
                Track Shipment
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { value: '500K+', label: 'Deliveries' },
                { value: '99.4%', label: 'On-time Rate' },
                { value: '80+', label: 'Countries' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center lg:text-left">
                    <div className="font-display font-bold text-white text-lg">{stat.value}</div>
                    <div className="text-blue-300 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tracking Card */}
          <div className="mx-auto lg:mx-0 lg:pl-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="text-white font-semibold mb-2 text-sm">Quick Track</p>
              <h3 className="font-display text-white text-xl font-bold mb-6">Where's my shipment?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter tracking ID…"
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/30 transition-all"
                />
                <Link
                  href="/track"
                  className="px-5 py-3.5 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Track
                </Link>
              </div>

              {/* Recent activity */}
              <div className="mt-6 space-y-3">
                {[
                  { id: 'SS-48291', status: 'In Transit', from: 'New York', to: 'London', color: 'text-amber-400' },
                  { id: 'SS-38102', status: 'Delivered', from: 'Chicago', to: 'Paris', color: 'text-emerald-400' },
                  { id: 'SS-57834', status: 'Processing', from: 'LA', to: 'Tokyo', color: 'text-blue-400' },
                ].map((pkg) => (
                  <div key={pkg.id} className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-center lg:text-left">
                      <p className="text-white text-xs font-semibold">{pkg.id}</p>
                      <p className="text-white/50 text-xs">{pkg.from} → {pkg.to}</p>
                    </div>
                    <span className={`text-xs font-semibold ${pkg.color}`}>{pkg.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Truck,
    title: 'Road Transportation',
    desc: 'Reliable door-to-door transport with real-time tracking across the country.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Warehouse,
    title: 'Smart Warehousing',
    desc: 'Climate-controlled, secured storage facilities strategically located nationwide.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: MapPin,
    title: 'Last-Mile Delivery',
    desc: 'Same-day and next-day delivery solutions that keep your customers happy.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Globe,
    title: 'International Freight',
    desc: 'Seamless air and ocean freight services to 80+ countries worldwide.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Package,
    title: 'E-commerce Fulfillment',
    desc: 'End-to-end fulfillment for online stores — pick, pack, and ship.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Shield,
    title: 'Secure Cold Chain',
    desc: 'Temperature-controlled logistics for pharmaceuticals and perishables.',
    color: 'bg-indigo-50 text-indigo-600',
  },
]

function Services() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        label="What We Offer"
        title="End-to-End Logistics Solutions"
        description="From first mile to last, we handle every aspect of your supply chain with precision and care."
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
            <Link href="/services" className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:gap-2 transition-all duration-200">
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
  { icon: Zap, title: 'Lightning Fast', desc: 'Same-day pickups and express delivery options for urgent shipments.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Every shipment is covered by comprehensive cargo insurance.' },
  { icon: Globe, title: 'Global Network', desc: 'Access to 200+ logistics partners across 80+ countries.' },
  { icon: TrendingUp, title: 'Live Tracking', desc: 'Real-time GPS tracking and automated status updates at every step.' },
]

function WhyChooseUs() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <SectionHeading
            label="Why Pravartak"
            title="The Standard for Modern Logistics"
            description="We combine technology, people, and infrastructure to deliver an experience that's simply better."
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-5 h-5" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-display font-bold text-slate-900 mb-1">{f.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual stats panel */}
        <div className="grid grid-cols-2 gap-5">
          {[
            { value: '500K+', label: 'Shipments Delivered', color: 'bg-blue-600' },
            { value: '99.4%', label: 'On-Time Delivery Rate', color: 'bg-slate-900' },
            { value: '5,000+', label: 'Happy Clients', color: 'bg-slate-900' },
            { value: '80+', label: 'Countries Covered', color: 'bg-blue-600' },
          ].map((stat, i) => (
            <div key={i} className={`${stat.color} rounded-2xl p-7 text-white`}>
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
  { step: '01', title: 'Get a Quote', desc: 'Fill out our simple form with shipment details and receive an instant quote.' },
  { step: '02', title: 'Schedule Pickup', desc: 'Choose your pickup time. We arrive at your location on time.' },
  { step: '03', title: 'We Handle It', desc: 'Your shipment is packed, documented, and dispatched securely.' },
  { step: '04', title: 'Track & Receive', desc: 'Follow your shipment in real-time until safe delivery is confirmed.' },
]

function HowItWorks() {
  return (
    <Section className="bg-slate-900">
      <SectionHeading
        label="Simple Process"
        title="Shipping in 4 Easy Steps"
        description="Getting started is effortless. We've streamlined logistics so you can focus on your business."
        centered
        light
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connector line - desktop */}
        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-600/30 via-blue-400 to-blue-600/30 z-0" />

        {steps.map((s, i) => (
          <div key={i} className="relative z-10 text-center">
            <div className="w-20 h-20 rounded-2xl bg-blue-600 text-white font-display text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-900/50">
              {s.step}
            </div>
            <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── Testimonials ────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: 'Pravartak transformed our supply chain. Deliveries that used to take a week now happen in 2 days. Absolutely game-changing.',
    name: 'Sarah Chen',
    role: 'Head of Operations, Nexus Retail',
    rating: 5,
    initials: 'SC',
  },
  {
    quote: 'The real-time tracking and proactive communication from the team gives us total confidence. Weve never had an issue.',
    name: 'James Okafor',
    role: 'Supply Chain Director, MedCore',
    rating: 5,
    initials: 'JO',
  },
  {
    quote: 'Switching to Pravartak cut our logistics costs by 23%. The platform is incredibly easy to use and the team is always responsive.',
    name: 'Priya Mehta',
    role: 'Co-Founder, FreshBox',
    rating: 5,
    initials: 'PM',
  },
]

function Testimonials() {
  return (
    <Section className="bg-blue-50">
      <SectionHeading
        label="Client Stories"
        title="Trusted by Leading Businesses"
        description="Don't just take our word for it — here's what our clients say."
        centered
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300">
            <Quote className="w-8 h-8 text-blue-200 mb-4" />
            <p className="text-slate-700 text-sm leading-relaxed mb-6">{t.quote}</p>
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                {t.initials}
              </div>
              <div className="text-center lg:text-left">
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
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl px-8 py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="relative">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-5">
            Ready to Ship Smarter?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join 5,000+ businesses that trust Pravartak to keep their supply chain moving. Get your free quote today — no commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/order" size="lg" className="bg-white text-blue-900 hover:bg-blue-50 hover:text-white shadow-xl">
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" size="lg" className="border-2 border-white/50 text-white hover:bg-white/10">
              <Phone className="w-4 h-4" />
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
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

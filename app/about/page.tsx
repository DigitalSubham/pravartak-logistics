import { Target, Eye, Shield, Users, Globe, Award, CheckCircle2, Package, Clock } from 'lucide-react'
import { Section, SectionHeading, PageHero } from '@/components/SectionComponents'
import Button from '@/components/Button'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

const stats = [
  { icon: Package, value: '500K+', label: 'Shipments Delivered' },
  { icon: Users,   value: '5,200+', label: 'Active Clients' },
  { icon: Globe,   value: '80+',   label: 'Cities Served' },
  { icon: Clock,   value: '12+',   label: 'Years in Business' },
]

const team = [
  { name: 'Arvind Pravartak',  role: 'Chief Executive Officer',   initials: 'AP', from: '#C2185B', to: '#9C27B0' },
  { name: 'Sunita Mehrotra',   role: 'Chief Operations Officer',  initials: 'SM', from: '#3949AB', to: '#1E88E5' },
  { name: 'Rajesh Nair',       role: 'Head of Technology',        initials: 'RN', from: '#9C27B0', to: '#3949AB' },
  { name: 'Priya Krishnamurti', role: 'VP, Client Relations',     initials: 'PK', from: '#0097A7', to: '#00ACC1' },
]

const values = [
  'ISO 9001:2015 Certified Operations',
  'Full cargo insurance on every shipment',
  '24/7 dedicated support team',
  'Transparent, competitive pricing',
  'Proprietary real-time tracking platform',
  'Environmentally responsible practices',
]

export default function AboutPage() {
  return (
    <>
      <PageHero label="About Pravartak" title="Built on Trust. Driven by Speed." description="We started with a simple mission: make logistics human again. Today we're a network that moves goods and builds partnerships across India." />

      {/* Intro */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading label="Our Story" title="12 Years of Moving What Matters" />
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>Founded in 2012, Pravartak Logistics began as a regional courier in Mumbai, driven by a belief that businesses deserved logistics partners who genuinely cared about their outcomes.</p>
              <p>Today, we operate across India and 80+ international destinations, with warehousing facilities in 6 major metros and a fleet of 2,000+ vehicles. Our values haven't changed — every shipment matters, every client is a partner.</p>
              <p>We leverage cutting-edge technology — AI-powered routing, IoT-enabled tracking, and data-driven analytics — to ensure your goods arrive faster, safer, and with complete visibility throughout the journey.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Founded', value: '2012', sub: 'Mumbai, India' },
              { label: 'Employees', value: '3,400+', sub: 'Pan India' },
              { label: 'Warehouses', value: '45+', sub: 'Across India' },
              { label: 'Satisfaction', value: '98%', sub: 'Client Rating' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-200">
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: GRAD }} />
                <div className="font-display text-3xl font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="font-semibold text-slate-700 text-sm">{item.label}</div>
                <div className="text-slate-400 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #C2185B, #9C27B0)' }} />
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #C2185B20, #9C27B020)' }}>
              <Target className="w-6 h-6" style={{ color: '#C2185B' }} />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">To empower businesses of every size with logistics solutions that are fast, transparent, and reliable — making commerce accessible across every corner of India and beyond.</p>
          </div>
          <div className="rounded-2xl p-8 text-white relative overflow-hidden" style={{ background: GRAD }}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">To become India's most trusted logistics ecosystem — where every package moves with intelligence, security, and care.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats dark section */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0628 0%, #0e1340 50%, #001e2b 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: GRAD }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <s.icon className="w-7 h-7" style={{ color: '#00ACC1' }} />
                </div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-white/40 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <Section>
        <SectionHeading label="Leadership" title="The Team Behind Pravartak" description="Experienced leaders who bring decades of logistics, technology, and operations expertise." centered />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 rounded-2xl text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${member.from}, ${member.to})` }}>
                {member.initials}
              </div>
              <h4 className="font-display font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust */}
      <Section className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading label="Trust & Compliance" title="Why Thousands of Businesses Trust Us" />
            <div className="space-y-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: GRAD }}>
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-700 text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: GRAD }} />
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: GRAD }}>
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Award-Winning Service</h3>
            <p className="text-slate-500 text-sm mb-6">Recognized as "Best Logistics Partner" by the India Supply Chain Excellence Awards for 3 consecutive years.</p>
            <Button href="/contact">Work With Us</Button>
          </div>
        </div>
      </Section>
    </>
  )
}

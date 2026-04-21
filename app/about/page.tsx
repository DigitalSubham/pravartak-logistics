import { Target, Eye, Shield, Users, Globe, Award, CheckCircle2, TrendingUp, Package, Clock } from 'lucide-react'
import { Section, SectionHeading, PageHero } from '@/components/SectionComponents'
import Button from '@/components/Button'

const stats = [
  { icon: Package, value: '500K+', label: 'Shipments Delivered' },
  { icon: Users, value: '5,200+', label: 'Active Clients' },
  { icon: Globe, value: '80+', label: 'Countries Served' },
  { icon: Clock, value: '12+', label: 'Years in Business' },
]

const team = [
  { name: 'Michael Torres', role: 'Chief Executive Officer', initials: 'MT', color: 'bg-blue-600' },
  { name: 'Linda Park', role: 'Chief Operations Officer', initials: 'LP', color: 'bg-slate-700' },
  { name: 'David Osei', role: 'Head of Technology', initials: 'DO', color: 'bg-blue-800' },
  { name: 'Ananya Rao', role: 'VP of Client Relations', initials: 'AR', color: 'bg-slate-600' },
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
      <PageHero
        label="About Pravartak"
        title="Built on Trust. Driven by Speed."
        description="We started with a simple mission: make logistics human again. Today, we're a global network that moves goods and builds trust."
      />

      {/* Company Intro */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="Our Story"
              title="12 Years of Moving What Matters"
            />
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Founded in 2012, Pravartak began as a regional courier in New York City, driven by a belief that businesses deserved logistics partners who actually cared about their outcomes.
              </p>
              <p>
                Today, we operate a global network spanning 80+ countries, with warehousing facilities across 4 continents and a fleet of 2,000+ vehicles. But our values haven't changed: every shipment matters, every client is a partner.
              </p>
              <p>
                We leverage cutting-edge technology — from AI-powered routing to blockchain-verified documentation — to ensure your goods arrive faster, safer, and with complete visibility throughout the journey.
              </p>
            </div>
          </div>

          {/* Decorative grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Founded', value: '2012', sub: 'New York, USA' },
              { label: 'Employees', value: '3,400+', sub: 'Globally' },
              { label: 'Warehouses', value: '45+', sub: 'Worldwide' },
              { label: 'Satisfaction', value: '98%', sub: 'Client Rating' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
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
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower businesses of every size with logistics solutions that are fast, transparent, and reliable — making global commerce accessible to all.
            </p>
          </div>
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To become the world's most trusted logistics ecosystem — where every package moves with intelligence, security, and care.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-slate-900">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7" />
              </div>
              <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeading
          label="Leadership"
          title="The Team Behind Pravartak"
          description="Experienced leaders who bring together decades of logistics, technology, and operations expertise."
          centered
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className={`w-20 h-20 rounded-2xl ${member.color} text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300`}>
                {member.initials}
              </div>
              <h4 className="font-display font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Trust Us */}
      <Section className="bg-blue-50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              label="Trust & Compliance"
              title="Why Thousands of Businesses Trust Us"
            />
            <div className="space-y-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700 text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 text-center">
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-5" />
            <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Award-Winning Service</h3>
            <p className="text-slate-500 text-sm mb-6">Recognized as "Best Logistics Partner" by the Global Supply Chain Institute for 3 consecutive years.</p>
            <Button href="/contact">Work With Us</Button>
          </div>
        </div>
      </Section>
    </>
  )
}

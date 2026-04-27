import { Truck, Warehouse, MapPin, Globe, Package, Shield, Thermometer, FileText, BarChart3, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Section, SectionHeading, PageHero } from '@/components/SectionComponents'
import Button from '@/components/Button'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

const services = [
  { icon: Truck,       title: 'Road Transportation',        description: 'Extensive fleet covering pan-India routes with efficiency. FTL, LTL, and dedicated courier for every size.', features: ['Real-time GPS tracking', 'Scheduled & express options', 'Hazmat certified drivers', 'Door-to-door service'],   from: '#C2185B', to: '#9C27B0' },
  { icon: Globe,       title: 'International Air Freight',  description: 'Time-critical shipments need speed. Our air freight network connects major global hubs with same-day bookings.', features: ['Priority handling', 'Customs clearance', 'Dangerous goods certified', 'Airport-to-airport & door'],     from: '#9C27B0', to: '#3949AB' },
  { icon: Package,     title: 'Ocean Freight',              description: 'Cost-effective shipping for large volumes. FCL and LCL services from all major seaports worldwide.',            features: ['FCL & LCL options', 'Bill of lading mgmt', 'Port-to-port & door-to-door', 'Weekly sailings'],             from: '#3949AB', to: '#1E88E5' },
  { icon: Warehouse,   title: 'Warehousing & Distribution', description: 'Modern, climate-controlled warehouses with advanced WMS. We store, pick, pack, and dispatch with precision.',   features: ['24/7 secured facilities', 'WMS integration', 'Inventory reporting', 'Cross-docking available'],          from: '#1E88E5', to: '#0097A7' },
  { icon: MapPin,      title: 'Last-Mile Delivery',         description: 'Our last-mile network ensures packages reach customers on time with flexible windows and proof of delivery.',    features: ['Same-day & next-day', 'Customer notifications', 'Proof of delivery', 'Failed delivery management'],      from: '#0097A7', to: '#00ACC1' },
  { icon: Thermometer, title: 'Cold Chain Logistics',       description: 'Pharmaceutical, food, and sensitive cargo require precise temperature control throughout transit.',              features: ['2°C–8°C & -18°C options', 'Continuous monitoring', 'Compliance documentation', 'Validated containers'],  from: '#C2185B', to: '#9C27B0' },
  { icon: FileText,    title: 'Customs Brokerage',          description: 'Navigate complex international trade regulations. Our licensed brokers ensure smooth clearance and compliance.', features: ['Import & export clearance', 'Tariff classification', 'Trade compliance', 'Document preparation'],          from: '#9C27B0', to: '#3949AB' },
  { icon: BarChart3,   title: 'Supply Chain Analytics',     description: 'Data-driven decisions with clear visibility. Dashboards, forecasting, and performance insights at your fingertips.', features: ['Live dashboards', 'Performance KPIs', 'Predictive analytics', 'API integration'],                  from: '#3949AB', to: '#00ACC1' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero label="Our Services" title="Complete Logistics, One Partner" description="From pickup to delivery and everything in between — comprehensive logistics services tailored to your business." />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden">
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}>
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-xs text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${s.from}, ${s.to})` }} />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-500 mb-8">Every business has unique logistics needs. Talk to our experts and we'll design a solution that fits perfectly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/order" size="lg">Get a Quote</Button>
            <Button href="/contact" size="lg" variant="outline">Speak to an Expert</Button>
          </div>
        </div>
      </Section>
    </>
  )
}

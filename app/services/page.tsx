import {
  Truck, Warehouse, MapPin, Globe, Package, Shield,
  Thermometer, FileText, BarChart3, Clock, CheckCircle2, ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { Section, SectionHeading, PageHero } from '@/components/SectionComponents'
import Button from '@/components/Button'

const services = [
  {
    icon: Truck,
    title: 'Road Transportation',
    description:
      'Our extensive fleet covers domestic routes with efficiency. Full Truckload (FTL), Less than Truckload (LTL), and dedicated courier services for every shipment size.',
    features: ['Real-time GPS tracking', 'Scheduled & express options', 'Hazmat certified drivers', 'Door-to-door service'],
    color: 'bg-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Globe,
    title: 'International Air Freight',
    description:
      'Time-critical shipments need speed. Our air freight network connects major hubs globally, with same-day bookings and priority handling for urgent cargo.',
    features: ['Priority handling', 'Customs clearance', 'Dangerous goods certified', 'Door-to-airport & airport-to-door'],
    color: 'bg-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: Package,
    title: 'Ocean Freight',
    description:
      'Cost-effective shipping for large volumes. Full Container Load (FCL) and Less than Container Load (LCL) services from all major seaports worldwide.',
    features: ['FCL & LCL options', 'Bill of lading management', 'Port-to-port & door-to-door', 'Weekly sailings'],
    color: 'bg-sky-600',
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-600',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description:
      'Modern, climate-controlled warehouses with advanced inventory management. We store, pick, pack, and dispatch your goods with pinpoint accuracy.',
    features: ['24/7 secured facilities', 'WMS integration', 'Inventory reporting', 'Cross-docking available'],
    color: 'bg-slate-700',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-700',
  },
  {
    icon: MapPin,
    title: 'Last-Mile Delivery',
    description:
      'The final leg matters most. Our last-mile network ensures your packages reach customers on time, with flexible delivery windows and proof of delivery.',
    features: ['Same-day & next-day', 'Customer notifications', 'Proof of delivery', 'Failed delivery management'],
    color: 'bg-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: Thermometer,
    title: 'Cold Chain Logistics',
    description:
      'Pharmaceutical, food, and sensitive cargo require precise temperature control throughout transit. Our cold chain solutions maintain integrity from origin to destination.',
    features: ['2°C–8°C & -18°C options', 'Continuous monitoring', 'Compliance documentation', 'Validated containers'],
    color: 'bg-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
  },
  {
    icon: FileText,
    title: 'Customs Brokerage',
    description:
      'Navigate complex international trade regulations effortlessly. Our licensed customs brokers ensure smooth clearance and full compliance.',
    features: ['Import & export clearance', 'Tariff classification', 'Trade compliance', 'Document preparation'],
    color: 'bg-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: BarChart3,
    title: 'Supply Chain Analytics',
    description:
      'Data-driven decisions start with clear visibility. Our analytics platform provides dashboards, forecasting, and performance insights to optimize your supply chain.',
    features: ['Live dashboards', 'Performance KPIs', 'Predictive analytics', 'API integration'],
    color: 'bg-slate-700',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-700',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Complete Logistics, One Partner"
        description="From pickup to delivery and everything in between — Pravartak provides comprehensive logistics services tailored to your business needs."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden"
            >
              <div className="p-7">
                <div className={`w-12 h-12 rounded-xl ${s.bgColor} ${s.textColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${s.textColor} shrink-0`} />
                      <span className="text-xs text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`h-1 ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
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

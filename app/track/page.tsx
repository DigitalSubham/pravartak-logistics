'use client'
import { useState } from 'react'
import { Search, Package2, Truck, CheckCircle2, MapPin, Clock, AlertCircle } from 'lucide-react'
import { PageHero } from '@/components/SectionComponents'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

const mockTracking = {
  'PL-48291': {
    id: 'PL-48291', status: 'In Transit', from: 'Mumbai, MH', to: 'Delhi, DL',
    estimatedDelivery: 'Apr 22, 2026', weight: '12.5 kg', type: 'Express Road Freight',
    events: [
      { status: 'Departed Origin Hub', location: 'Pravartak Hub — Mumbai', time: 'Apr 19, 09:15 AM', done: true },
      { status: 'Customs Clearance', location: 'Mumbai Gateway', time: 'Apr 19, 06:30 AM', done: true },
      { status: 'Package Picked Up', location: 'Andheri West, Mumbai', time: 'Apr 18, 03:00 PM', done: true },
      { status: 'Order Confirmed', location: 'Pravartak Network', time: 'Apr 18, 10:00 AM', done: true },
    ],
  },
}

export default function TrackPage() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<typeof mockTracking['PL-48291'] | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleTrack = () => {
    if (!query.trim()) return
    setLoading(true); setNotFound(false); setResult(null)
    setTimeout(() => {
      const found = mockTracking[query.trim().toUpperCase() as keyof typeof mockTracking]
      found ? setResult(found) : setNotFound(true)
      setLoading(false)
    }, 800)
  }

  return (
    <>
      <PageHero label="Track Shipment" title="Where's Your Package?" description="Enter your Pravartak tracking ID to get real-time updates on your shipment." />

      <div className="py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: GRAD }} />
            <label className="block font-semibold text-slate-800 mb-1">Tracking ID</label>
            <p className="text-slate-400 text-sm mb-5">Your ID starts with "PL-" and is found in your confirmation email.</p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Package2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                  placeholder="e.g. PL-48291"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  style={{ '--tw-ring-color': '#9C27B0' } as any}
                />
              </div>
              <button
                onClick={handleTrack} disabled={loading || !query.trim()}
                className="px-6 py-3.5 text-white rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: GRAD }}
              >
                {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Search className="w-4 h-4" />}
                Track
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-4">Try: <button onClick={() => setQuery('PL-48291')} className="font-semibold" style={{ color: '#9C27B0' }}>PL-48291</button></p>
          </div>

          {notFound && (
            <div className="bg-white rounded-2xl shadow border border-red-100 p-8 text-center">
              <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-slate-900 mb-2">Tracking ID Not Found</h3>
              <p className="text-slate-500 text-sm">We couldn't find a shipment with that ID. Please double-check and try again.</p>
            </div>
          )}

          {result && (
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 hidden" style={{ background: GRAD }} />
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: GRAD }} />
              </div>
              <div className="bg-slate-50 border-b border-slate-100 px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">Tracking ID</p>
                  <p className="font-display font-bold text-slate-900 text-xl">{result.id}</p>
                </div>
                <span className="self-start sm:self-auto px-4 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: GRAD }}>
                  {result.status}
                </span>
              </div>
              <div className="px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-slate-100">
                {[
                  { label: 'From', value: result.from, icon: MapPin },
                  { label: 'To', value: result.to, icon: MapPin },
                  { label: 'Est. Delivery', value: result.estimatedDelivery, icon: Clock },
                  { label: 'Weight', value: result.weight, icon: Package2 },
                ].map((d, i) => (
                  <div key={i}>
                    <p className="text-xs text-slate-400 mb-1 flex items-center gap-1"><d.icon className="w-3 h-3" />{d.label}</p>
                    <p className="text-sm font-semibold text-slate-900">{d.value}</p>
                  </div>
                ))}
              </div>
              <div className="px-8 py-6">
                <h4 className="font-display font-bold text-slate-900 mb-5 text-sm">Shipment Timeline</h4>
                <div className="space-y-5">
                  {result.events.map((ev, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white" style={{ background: i === 0 ? GRAD : '#e2e8f0' }}>
                          {i === 0 ? <Truck className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                        </div>
                        {i < result.events.length - 1 && <div className="w-px flex-1 bg-slate-100 mt-2" />}
                      </div>
                      <div className="pb-5">
                        <p className="font-semibold text-slate-900 text-sm">{ev.status}</p>
                        <p className="text-slate-500 text-xs">{ev.location}</p>
                        <p className="text-slate-400 text-xs mt-1">{ev.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

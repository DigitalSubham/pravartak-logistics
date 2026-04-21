'use client'
import { useState } from 'react'
import { Search, Package2, Truck, CheckCircle2, MapPin, Clock, AlertCircle } from 'lucide-react'
import { PageHero } from '@/components/SectionComponents'

const mockTracking = {
  'SS-48291': {
    id: 'SS-48291',
    status: 'In Transit',
    from: 'New York, USA',
    to: 'London, UK',
    estimatedDelivery: 'Apr 22, 2026',
    weight: '12.5 kg',
    type: 'International Air Freight',
    events: [
      { status: 'Departed Origin Hub', location: 'JFK International Airport', time: 'Apr 19, 09:15 AM', done: true },
      { status: 'Customs Clearance', location: 'JFK, New York', time: 'Apr 19, 06:30 AM', done: true },
      { status: 'Package Picked Up', location: 'Manhattan, New York', time: 'Apr 18, 03:00 PM', done: true },
      { status: 'Order Confirmed', location: 'Pravartak Network', time: 'Apr 18, 10:00 AM', done: true },
    ],
  },
}

const statusColors: Record<string, string> = {
  'In Transit': 'bg-amber-50 text-amber-700 border-amber-200',
  Delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Processing: 'bg-blue-50 text-blue-700 border-blue-200',
}

export default function TrackPage() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<typeof mockTracking['SS-48291'] | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleTrack = () => {
    if (!query.trim()) return
    setLoading(true)
    setNotFound(false)
    setResult(null)

    setTimeout(() => {
      const found = mockTracking[query.trim().toUpperCase() as keyof typeof mockTracking]
      if (found) {
        setResult(found)
      } else {
        setNotFound(true)
      }
      setLoading(false)
    }, 800)
  }

  return (
    <>
      <PageHero
        label="Track Shipment"
        title="Where's Your Package?"
        description="Enter your Pravartak tracking ID to get real-time updates on your shipment's location and status."
      />

      <div className="py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mb-8">
            <label className="block font-semibold text-slate-800 mb-2">Tracking ID</label>
            <p className="text-slate-400 text-sm mb-5">Your tracking ID starts with "SS-" and is found in your confirmation email.</p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Package2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                  placeholder="e.g. SS-48291"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <button
                onClick={handleTrack}
                disabled={loading || !query.trim()}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
                Track
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-4">
              Try: <button onClick={() => setQuery('SS-48291')} className="text-blue-500 hover:underline">SS-48291</button>
            </p>
          </div>

          {/* Result */}
          {notFound && (
            <div className="bg-white rounded-2xl shadow border border-red-100 p-8 text-center">
              <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-slate-900 mb-2">Tracking ID Not Found</h3>
              <p className="text-slate-500 text-sm">We couldn't find a shipment with that ID. Please double-check and try again.</p>
            </div>
          )}

          {result && (
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              {/* Header */}
              <div className="bg-slate-50 border-b border-slate-100 px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-1">Tracking ID</p>
                  <p className="font-display font-bold text-slate-900 text-xl">{result.id}</p>
                </div>
                <span className={`self-start sm:self-auto px-3 py-1.5 rounded-full text-xs font-semibold border ${statusColors[result.status] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                  {result.status}
                </span>
              </div>

              {/* Details */}
              <div className="px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-slate-100">
                {[
                  { label: 'From', value: result.from, icon: MapPin },
                  { label: 'To', value: result.to, icon: MapPin },
                  { label: 'Est. Delivery', value: result.estimatedDelivery, icon: Clock },
                  { label: 'Weight', value: result.weight, icon: Package2 },
                ].map((d, i) => (
                  <div key={i}>
                    <p className="text-xs text-slate-400 mb-1 flex items-center gap-1">
                      <d.icon className="w-3 h-3" />
                      {d.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-900">{d.value}</p>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="px-8 py-6">
                <h4 className="font-display font-bold text-slate-900 mb-5 text-sm">Shipment Timeline</h4>
                <div className="space-y-5">
                  {result.events.map((ev, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${i === 0 ? 'bg-blue-600 text-white' : 'bg-emerald-50 text-emerald-600 border-2 border-emerald-200'}`}>
                          {i === 0 ? <Truck className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        {i < result.events.length - 1 && (
                          <div className="w-px flex-1 bg-slate-100 mt-2" />
                        )}
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

'use client'
import { useState } from 'react'
import { Package2, CheckCircle2, ArrowRight, Truck, Globe, Warehouse } from 'lucide-react'
import { PageHero } from '@/components/SectionComponents'
import { Label, Input, Textarea, Select } from '@/components/FormInputs'
import Button from '@/components/Button'

const serviceOptions = [
  { value: 'road', label: 'Road Transportation' },
  { value: 'air', label: 'International Air Freight' },
  { value: 'ocean', label: 'Ocean Freight' },
  { value: 'lastmile', label: 'Last-Mile Delivery' },
  { value: 'warehouse', label: 'Warehousing & Distribution' },
  { value: 'coldchain', label: 'Cold Chain Logistics' },
]

const weightOptions = [
  { value: '0-5', label: 'Under 5 kg' },
  { value: '5-25', label: '5 – 25 kg' },
  { value: '25-100', label: '25 – 100 kg' },
  { value: '100-500', label: '100 – 500 kg' },
  { value: '500+', label: '500 kg+' },
]

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    pickupAddress: '',
    deliveryAddress: '',
    weight: '',
    notes: '',
  })

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Get a Quote"
        title="Request Your Shipment Quote"
        description="Fill in your details below and our logistics team will provide a tailored quote within 2 hours."
      />

      <div className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-emerald-100 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">Quote Request Received!</h2>
              <p className="text-slate-500 text-sm mb-8">
                Thanks, <strong>{form.name}</strong>! We've received your request and our team will send you a personalized quote at <strong>{form.email}</strong> within 2 hours.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Request</Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 sticky top-24">
                  <h3 className="font-display font-bold text-slate-900 mb-5">Why Choose Pravartak?</h3>
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle2, text: 'Quote within 2 hours' },
                      { icon: CheckCircle2, text: 'No hidden fees' },
                      { icon: CheckCircle2, text: 'Dedicated account manager' },
                      { icon: CheckCircle2, text: 'Full cargo insurance' },
                      { icon: CheckCircle2, text: 'Real-time tracking' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-slate-600 text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 pt-7 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-800 text-sm mb-4">Services Available</h4>
                    <div className="space-y-2">
                      {[
                        { icon: Truck, label: 'Road Transport' },
                        { icon: Globe, label: 'Air & Ocean Freight' },
                        { icon: Warehouse, label: 'Warehousing' },
                        { icon: Package2, label: 'E-commerce Fulfillment' },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-500 text-xs">
                          <s.icon className="w-3.5 h-3.5" />
                          {s.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                  <h3 className="font-display font-bold text-slate-900 text-xl mb-7">Shipment Details</h3>

                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Information</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" required>Full Name</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            value={form.name}
                            onChange={handleChange('name')}
                            autoComplete="name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company (Optional)</Label>
                          <Input
                            id="company"
                            placeholder="Acme Corp"
                            value={form.company}
                            onChange={handleChange('company')}
                            autoComplete="organization"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" required>Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={form.email}
                            onChange={handleChange('email')}
                            autoComplete="email"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" required>Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={handleChange('phone')}
                            autoComplete="tel"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Shipment Info */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Shipment Information</h4>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="service" required>Service Type</Label>
                          <Select
                            id="service"
                            value={form.service}
                            onChange={handleChange('service')}
                            options={serviceOptions}
                            placeholder="Select a service…"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="pickup" required>Pickup Address</Label>
                          <Input
                            id="pickup"
                            placeholder="123 Main St, New York, NY 10001"
                            value={form.pickupAddress}
                            onChange={handleChange('pickupAddress')}
                            autoComplete="street-address"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="delivery" required>Delivery Address</Label>
                          <Input
                            id="delivery"
                            placeholder="456 Oxford St, London, UK W1C 1AP"
                            value={form.deliveryAddress}
                            onChange={handleChange('deliveryAddress')}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="weight" required>Estimated Weight</Label>
                          <Select
                            id="weight"
                            value={form.weight}
                            onChange={handleChange('weight')}
                            options={weightOptions}
                            placeholder="Select weight range…"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="notes">Additional Notes</Label>
                          <Textarea
                            id="notes"
                            placeholder="Any special handling instructions, fragile items, or requirements…"
                            value={form.notes}
                            onChange={handleChange('notes')}
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Submit Quote Request
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-xs text-slate-400">
                      By submitting you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, MessageSquare } from 'lucide-react'
import { PageHero } from '@/components/SectionComponents'
import { Label, Input, Textarea, Select } from '@/components/FormInputs'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

const subjectOptions = [
  { value: 'quote',       label: 'Request a Quote' },
  { value: 'tracking',    label: 'Shipment Tracking Issue' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'billing',     label: 'Billing Question' },
  { value: 'other',       label: 'Other' },
]

const contactInfo = [
  { icon: Phone,  label: 'Phone',        value: '+91 12345 67890',        sub: 'Mon–Fri, 9am–7pm IST',    href: 'tel:+911234567890',          from: '#C2185B', to: '#9C27B0' },
  { icon: Mail,   label: 'Email',        value: 'info@pravartak.com',     sub: 'We reply within 2 hours', href: 'mailto:info@pravartak.com',  from: '#9C27B0', to: '#3949AB' },
  { icon: MapPin, label: 'Headquarters', value: 'Pravartak House, Mumbai', sub: 'Maharashtra 400001',     href: '#',                          from: '#3949AB', to: '#1E88E5' },
  { icon: Clock,  label: 'Support',      value: '24/7 Emergency Line',    sub: 'Business: 9am–7pm IST',   href: '#',                          from: '#0097A7', to: '#00ACC1' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const handleChange = (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [f]: e.target.value })
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return (
    <>
      <PageHero label="Contact Us" title="We're Here to Help" description="Have a question, need a quote, or want to discuss a custom solution? Our team is ready." />

      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {contactInfo.map((item, i) => (
              <a key={i} href={item.href} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, ${item.from}, ${item.to})` }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200" style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-semibold text-slate-900 text-sm">{item.value}</p>
                <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: GRAD }} />
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: GRAD }}>
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-500 text-sm mb-7">Thanks <strong>{form.name}</strong>! We'll reply to <strong>{form.email}</strong> within 2 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm font-semibold hover:underline" style={{ color: '#9C27B0' }}>Send another message</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: GRAD }}>
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-slate-900">Send a Message</h2>
                      <p className="text-slate-400 text-xs">We'll get back to you within 2 hours</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><Label htmlFor="name" required>Full Name</Label><Input id="name" placeholder="Rajesh Kumar" value={form.name} onChange={handleChange('name')} autoComplete="name" required /></div>
                      <div><Label htmlFor="email" required>Email</Label><Input id="email" type="email" placeholder="rajesh@company.com" value={form.email} onChange={handleChange('email')} autoComplete="email" required /></div>
                    </div>
                    <div><Label htmlFor="phone">Phone Number</Label><Input id="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange('phone')} autoComplete="tel" /></div>
                    <div><Label htmlFor="subject" required>Subject</Label><Select id="subject" value={form.subject} onChange={handleChange('subject')} options={subjectOptions} placeholder="Select a topic…" required /></div>
                    <div><Label htmlFor="message" required>Message</Label><Textarea id="message" placeholder="Tell us how we can help…" value={form.message} onChange={handleChange('message')} rows={5} required /></div>
                    <button type="submit" className="w-full py-4 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200" style={{ background: GRAD, boxShadow: '0 4px 20px rgba(156,39,176,0.3)' }}>
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map + FAQ */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="h-64 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)' }}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                  <div className="text-center relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: GRAD }}>
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-semibold text-slate-700 text-sm">Pravartak Headquarters</p>
                    <p className="text-slate-500 text-xs">Pravartak House, Logistics Park, Mumbai</p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Mumbai Office</p>
                    <p className="text-slate-400 text-xs">Pravartak House, Logistics Park, Mumbai 400001</p>
                  </div>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:underline" style={{ color: '#9C27B0' }}>Get Directions</a>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <h3 className="font-display font-bold text-slate-900 mb-5">Quick Answers</h3>
                <div className="space-y-5">
                  {[
                    { q: 'How long does it take to get a quote?', a: 'Our team responds to all quote requests within 2 business hours on weekdays.' },
                    { q: 'Do you offer international shipping?', a: 'Yes — we cover 80+ countries with air and ocean freight options.' },
                    { q: 'What is your emergency support number?', a: 'Call +91 12345 67890. Our emergency line is available 24/7 for urgent shipments.' },
                  ].map((faq, i) => (
                    <div key={i}>
                      <p className="font-semibold text-slate-900 text-sm mb-1">{faq.q}</p>
                      <p className="text-slate-500 text-sm">{faq.a}</p>
                      {i < 2 && <div className="mt-4 border-t border-slate-200" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

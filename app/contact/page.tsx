'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, MessageSquare } from 'lucide-react'
import { PageHero } from '@/components/SectionComponents'
import { Label, Input, Textarea, Select } from '@/components/FormInputs'

const subjectOptions = [
  { value: 'quote', label: 'Request a Quote' },
  { value: 'tracking', label: 'Shipment Tracking Issue' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'billing', label: 'Billing Question' },
  { value: 'other', label: 'Other' },
]

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (123) 456-7890',
    sub: 'Mon–Fri, 8am–8pm EST',
    href: 'tel:+11234567890',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@pravartaklogistics.in',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@pravartaklogistics.in',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '1200 Commerce Ave, Suite 400',
    sub: 'New York, NY 10001',
    href: '#',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: Clock,
    label: 'Support Hours',
    value: '24/7 Emergency Line',
    sub: 'Business hours: 8am–8pm EST',
    href: '#',
    color: 'bg-slate-100 text-slate-600',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
        label="Contact Us"
        title="We're Here to Help"
        description="Have a question, need a quote, or want to discuss a custom logistics solution? Our team is ready to assist."
      />

      <div className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-semibold text-slate-900 text-sm">{item.value}</p>
                <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                  <p className="text-slate-500 text-sm mb-7">
                    Thanks for reaching out, <strong>{form.name}</strong>. We'll reply to <strong>{form.email}</strong> within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-slate-900">Send a Message</h2>
                      <p className="text-slate-400 text-xs">We'll get back to you within 2 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        <Label htmlFor="email" required>Email</Label>
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
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" required>Subject</Label>
                      <Select
                        id="subject"
                        value={form.subject}
                        onChange={handleChange('subject')}
                        options={subjectOptions}
                        placeholder="Select a topic…"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" required>Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help…"
                        value={form.message}
                        onChange={handleChange('message')}
                        rows={5}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map Placeholder + FAQ */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-64 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-slate-700 text-sm">Pravartak Headquarters</p>
                    <p className="text-slate-500 text-xs">1200 Commerce Ave, Suite 400, New York, NY</p>
                  </div>
                  {/* Grid overlay to mimic map tiles */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
                      backgroundSize: '32px 32px'
                    }}
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">New York Office</p>
                    <p className="text-slate-400 text-xs">1200 Commerce Ave, Suite 400, NY 10001</p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                <h3 className="font-display font-bold text-slate-900 mb-5">Quick Answers</h3>
                <div className="space-y-5">
                  {[
                    {
                      q: 'How long does it take to get a quote?',
                      a: 'Our team responds to all quote requests within 2 business hours during weekdays.',
                    },
                    {
                      q: 'Do you offer international shipping?',
                      a: 'Yes — we cover 80+ countries with air and ocean freight options.',
                    },
                    {
                      q: 'What is your emergency support number?',
                      a: 'Call +1 (123) 456-7890. Our emergency line operates 24/7 for urgent shipments.',
                    },
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

import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { Section, PageHero } from '@/components/SectionComponents'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

export const blogs = [
  { slug: 'future-of-last-mile-delivery',   title: 'The Future of Last-Mile Delivery: Drones, Robots & Beyond',           excerpt: 'Last-mile delivery is the most complex leg of the supply chain. Emerging technologies are set to transform how we get packages to doorsteps.', category: 'Industry Trends', author: 'Sunita Mehrotra', authorInitials: 'SM', date: 'Apr 15, 2026', readTime: '5 min', from: '#C2185B', to: '#9C27B0' },
  { slug: 'supply-chain-resilience-2026',   title: 'Building Supply Chain Resilience in a Volatile World',                 excerpt: 'Global disruptions have taught businesses painful lessons. Here\'s how companies are building resilient, adaptive supply chains for 2026.', category: 'Strategy',       author: 'Arvind Pravartak', authorInitials: 'AP', date: 'Apr 8,  2026', readTime: '7 min', from: '#3949AB', to: '#1E88E5' },
  { slug: 'cold-chain-pharmaceuticals',     title: 'Cold Chain Logistics in Pharma: Why Every Degree Matters',             excerpt: 'Temperature excursions cost the pharma industry billions annually. Robust cold chain logistics is not optional — it\'s existential.', category: 'Cold Chain',    author: 'Priya Krishnamurti', authorInitials: 'PK', date: 'Mar 28, 2026', readTime: '6 min', from: '#0097A7', to: '#00ACC1' },
  { slug: 'ecommerce-fulfillment-guide',    title: 'The E-Commerce Fulfillment Playbook for Growing Brands',               excerpt: 'As your online store scales, fulfillment becomes a competitive differentiator. We break down strategies top brands use to delight customers.', category: 'E-Commerce', author: 'Rajesh Nair', authorInitials: 'RN', date: 'Mar 19, 2026', readTime: '8 min', from: '#9C27B0', to: '#3949AB' },
  { slug: 'customs-clearance-tips',         title: '10 Customs Clearance Mistakes That Delay Your Shipments',              excerpt: 'Documentation errors are the #1 cause of customs delays. Learn the most common mistakes and how to avoid them for smooth international shipping.', category: 'International', author: 'Sunita Mehrotra', authorInitials: 'SM', date: 'Mar 10, 2026', readTime: '4 min', from: '#C2185B', to: '#6A1B9A' },
  { slug: 'green-logistics-sustainability', title: 'Green Logistics: How Sustainability Became a Competitive Advantage',    excerpt: 'Sustainability in supply chains is no longer just about compliance. Forward-thinking brands are using it to win customers and reduce costs.', category: 'Sustainability', author: 'Arvind Pravartak', authorInitials: 'AP', date: 'Feb 28, 2026', readTime: '6 min', from: '#1E88E5', to: '#00ACC1' },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Industry Trends': { bg: '#C2185B15', text: '#C2185B' },
  'Strategy':        { bg: '#3949AB15', text: '#3949AB' },
  'Cold Chain':      { bg: '#0097A715', text: '#0097A7' },
  'E-Commerce':      { bg: '#9C27B015', text: '#9C27B0' },
  'International':   { bg: '#6A1B9A15', text: '#6A1B9A' },
  'Sustainability':  { bg: '#00ACC115', text: '#00ACC1' },
}

export default function BlogsPage() {
  const featured = blogs[0]
  const rest     = blogs.slice(1)

  return (
    <>
      <PageHero label="Pravartak Blog" title="Insights on Logistics & Supply Chain" description="Industry trends, expert advice, and practical guides to help your business ship smarter." />

      <Section>
        {/* Featured */}
        <Link href={`/blogs/${featured.slug}`} className="group block mb-12">
          <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: GRAD }} />
            <div className="min-h-56 lg:min-h-0 flex items-end p-8" style={{ background: 'linear-gradient(135deg, #1a0628, #0e1340, #001e2b)' }}>
              <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20 bg-white/10">Featured Post</span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: categoryColors[featured.category]?.bg, color: categoryColors[featured.category]?.text }}>{featured.category}</span>
                <span className="text-slate-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime} read</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent transition-colors duration-200" style={{ background: 'linear-gradient(135deg, #C2185B, #9C27B0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'inherit' }}>
                {featured.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ background: GRAD }}>{featured.authorInitials}</div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{featured.author}</p>
                    <p className="text-xs text-slate-400">{featured.date}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200" style={{ color: '#C2185B' }}>
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="h-40" style={{ background: `linear-gradient(135deg, ${post.from}40, ${post.to}40)` }}>
                <div className="h-full flex items-center justify-center">
                  <span className="font-display font-bold text-4xl opacity-20" style={{ color: post.from }}>{post.authorInitials}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: categoryColors[post.category]?.bg, color: categoryColors[post.category]?.text }}>{post.category}</span>
                  <span className="text-slate-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2 text-base leading-snug group-hover:text-transparent transition-colors duration-200 line-clamp-2" style={{ WebkitBackgroundClip: 'text' }}>
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${post.from}, ${post.to})` }}>{post.authorInitials}</div>
                    <span className="text-xs text-slate-500">{post.author}</span>
                  </div>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}

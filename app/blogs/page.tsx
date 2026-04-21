import Link from 'next/link'
import { Clock, ArrowRight, Tag } from 'lucide-react'
import { Section, SectionHeading, PageHero } from '@/components/SectionComponents'

export const blogs = [
  {
    slug: 'future-of-last-mile-delivery',
    title: 'The Future of Last-Mile Delivery: Drones, Robots & Beyond',
    excerpt: 'Last-mile delivery is the most complex and costly leg of the supply chain. Emerging technologies are set to transform how we get packages to doorsteps.',
    category: 'Industry Trends',
    author: 'Linda Park',
    authorInitials: 'LP',
    date: 'Apr 15, 2026',
    readTime: '5 min',
    featured: true,
  },
  {
    slug: 'supply-chain-resilience-2026',
    title: 'Building Supply Chain Resilience in a Volatile World',
    excerpt: 'Global disruptions have taught businesses painful lessons. Heres how companies are building resilient, adaptive supply chains for 2026 and beyond.',
    category: 'Strategy',
    author: 'Michael Torres',
    authorInitials: 'MT',
    date: 'Apr 8, 2026',
    readTime: '7 min',
    featured: false,
  },
  {
    slug: 'cold-chain-pharmaceuticals',
    title: 'Cold Chain Logistics in Pharmaceuticals: Why Every Degree Matters',
    excerpt: 'Temperature excursions cost the pharmaceutical industry billions annually. Robust cold chain logistics is not optional — its existential.',
    category: 'Cold Chain',
    author: 'Ananya Rao',
    authorInitials: 'AR',
    date: 'Mar 28, 2026',
    readTime: '6 min',
    featured: false,
  },
  {
    slug: 'ecommerce-fulfillment-guide',
    title: 'The E-Commerce Fulfillment Playbook for Growing Brands',
    excerpt: 'As your online store scales, fulfillment becomes a competitive differentiator. We break down the strategies top brands use to delight customers.',
    category: 'E-Commerce',
    author: 'David Osei',
    authorInitials: 'DO',
    date: 'Mar 19, 2026',
    readTime: '8 min',
    featured: false,
  },
  {
    slug: 'customs-clearance-tips',
    title: '10 Customs Clearance Mistakes That Delay Your Shipments',
    excerpt: 'Documentation errors are the #1 cause of customs delays. Learn the most common mistakes and how to avoid them for smooth international shipping.',
    category: 'International',
    author: 'Linda Park',
    authorInitials: 'LP',
    date: 'Mar 10, 2026',
    readTime: '4 min',
    featured: false,
  },
  {
    slug: 'green-logistics-sustainability',
    title: 'Green Logistics: How Sustainability Became a Competitive Advantage',
    excerpt: 'Sustainability in supply chains is no longer just about compliance. Forward-thinking brands are using it to win customers and reduce costs.',
    category: 'Sustainability',
    author: 'Michael Torres',
    authorInitials: 'MT',
    date: 'Feb 28, 2026',
    readTime: '6 min',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  'Industry Trends': 'bg-blue-50 text-blue-700',
  Strategy: 'bg-indigo-50 text-indigo-700',
  'Cold Chain': 'bg-cyan-50 text-cyan-700',
  'E-Commerce': 'bg-violet-50 text-violet-700',
  International: 'bg-amber-50 text-amber-700',
  Sustainability: 'bg-emerald-50 text-emerald-700',
}

export default function BlogsPage() {
  const featured = blogs[0]
  const rest = blogs.slice(1)

  return (
    <>
      <PageHero
        label="Pravartak Blog"
        title="Insights on Logistics & Supply Chain"
        description="Industry trends, expert advice, and practical guides to help your business ship smarter."
      />

      <Section>
        {/* Featured Post */}
        <Link href={`/blogs/${featured.slug}`} className="group block mb-12">
          <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 min-h-56 lg:min-h-0 flex items-end p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-medium border border-blue-400/30">
                Featured Post
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime} read
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {featured.authorInitials}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{featured.author}</p>
                    <p className="text-xs text-slate-400">{featured.date}</p>
                  </div>
                </div>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
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
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-40" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-2 text-base leading-snug group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-700 text-white text-xs font-bold flex items-center justify-center">
                      {post.authorInitials}
                    </div>
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

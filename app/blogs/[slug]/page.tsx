import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react'
import { blogs } from '../page'

const GRAD = 'linear-gradient(135deg, #C2185B 0%, #9C27B0 35%, #3949AB 65%, #00ACC1 100%)'

const blogContent: Record<string, string[]> = {
  'future-of-last-mile-delivery': [
    "Last-mile delivery — the final leg from a distribution center to the customer's doorstep — accounts for more than 53% of total shipping costs. Despite being the shortest part of the journey, it is the most complex, congested, and expensive.",
    "For years, the industry relied on human couriers and traditional route planning. But that model is cracking under e-commerce growth, rising customer expectations, and shrinking delivery windows. Today, leading logistics companies are investing heavily in the technologies that will define the next decade of delivery.",
    "Autonomous ground vehicles (AGVs) are already operating in controlled environments. Companies are deploying robots that navigate sidewalks, avoid pedestrians, and make doorstep deliveries without human intervention. While regulatory frameworks are still catching up, pilots have shown strong results.",
    "Drone delivery has moved from science fiction to commercial reality. Approved flight corridors in select areas enable pharmacy and grocery deliveries in under 30 minutes. The key advantage of drones is the ability to bypass traffic entirely — the single biggest variable in last-mile cost.",
    "Meanwhile, micro-fulfillment centers are moving closer to customers. Instead of shipping from large regional warehouses, brands are placing inventory in dark stores within existing retail spaces. This forward deployment strategy dramatically reduces the distance goods must travel for same-day delivery.",
    "The convergence of AI-powered routing, autonomous vehicles, and decentralized inventory will reshape the economics of last-mile delivery. Businesses that adapt early will build a significant competitive advantage in customer satisfaction and cost structure.",
  ],
  'supply-chain-resilience-2026': [
    "The pandemic exposed a painful truth: most global supply chains were built for efficiency, not resilience. Just-in-time manufacturing, single-source suppliers, and lean inventory — strategies that saved billions in normal times — became catastrophic liabilities when disruption struck.",
    "In 2026, the conversation has shifted. Businesses are no longer asking 'how do we minimize inventory costs?' but 'how do we ensure we can always deliver?' The answer involves a fundamental redesign of supply chain philosophy.",
    "Nearshoring has emerged as a primary risk mitigation strategy. Companies are relocating manufacturing closer to end markets, trading lower labor costs for reduced geopolitical exposure and shorter lead times.",
    "Diversification of supplier bases is now non-negotiable. Single-source dependencies — whether for raw materials, components, or logistics capacity — are being systematically eliminated. Best-in-class organizations require at least two qualified suppliers for every critical input.",
    "Technology plays a central role in resilience. Supply chain control towers, powered by AI and real-time data, give organizations end-to-end visibility across every tier of their supplier network. Early disruption detection is worth more than the most optimized baseline plan.",
    "Resilience doesn't come free — it requires accepting some efficiency tradeoffs. But businesses that made these investments before disruption struck are still growing while competitors scramble. In a volatile world, supply chain resilience is a strategic asset, not a cost center.",
  ],
}

const fallbackContent = [
  "Logistics and supply chain management sit at the intersection of technology, operations, and strategy. As Indian commerce continues to evolve rapidly, businesses that master their logistics operations will have a decisive competitive advantage.",
  "Visibility is the foundation of every modern logistics improvement. When you can see your shipments, inventory, and partners in real time, you gain the ability to make proactive decisions rather than reactive ones.",
  "The best logistics strategies combine process discipline with technological enablement. Neither alone is sufficient — technology without process creates expensive chaos, while process without technology creates expensive inefficiency.",
  "Building strong partnerships with logistics providers is as important as any internal capability. The right partner brings network density, expertise, and capacity that no individual business could replicate on its own.",
  "Finally, continuous improvement must be embedded in the culture of any logistics organisation. The industry changes rapidly, and yesterday's best practice is tomorrow's baseline expectation. Measure everything and never stop optimising.",
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Industry Trends': { bg: '#C2185B15', text: '#C2185B' },
  'Strategy':        { bg: '#3949AB15', text: '#3949AB' },
  'Cold Chain':      { bg: '#0097A715', text: '#0097A7' },
  'E-Commerce':      { bg: '#9C27B015', text: '#9C27B0' },
  'International':   { bg: '#6A1B9A15', text: '#6A1B9A' },
  'Sustainability':  { bg: '#00ACC115', text: '#00ACC1' },
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)
  if (!post) notFound()

  const content      = blogContent[post.slug] || fallbackContent
  const currentIndex = blogs.findIndex((b) => b.slug === post.slug)
  const prevPost     = blogs[currentIndex - 1] || null
  const nextPost     = blogs[currentIndex + 1] || null
  const related      = blogs.filter((b) => b.slug !== post.slug).slice(0, 3)
  const catStyle     = categoryColors[post.category] || { bg: '#9C27B015', text: '#9C27B0' }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Article */}
          <article className="lg:col-span-2">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium mb-8 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: catStyle.bg, color: catStyle.text }}>{post.category}</span>
              <span className="text-slate-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime} read</span>
            </div>

            <h1 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center" style={{ background: GRAD }}>{post.authorInitials}</div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{post.author}</p>
                <p className="text-slate-400 text-xs">{post.date}</p>
              </div>
            </div>

            {/* Hero image */}
            <div className="rounded-2xl h-56 lg:h-72 mb-10 flex items-center justify-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${post.from}60, ${post.to}60, #1a0628)` }}>
              <span className="font-display font-bold text-6xl opacity-10 text-white">{post.authorInitials}</span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8 border-l-4 pl-5" style={{ borderColor: post.from }}>{post.excerpt}</p>

            <div className="space-y-5">
              {content.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base">{para}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mt-10 pt-8 border-t border-slate-100">
              <Tag className="w-4 h-4 text-slate-400" />
              {[post.category, 'Logistics', 'Pravartak'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">{tag}</span>
              ))}
            </div>

            {/* Prev/Next */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {prevPost ? (
                <Link href={`/blogs/${prevPost.slug}`} className="group p-5 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-200">
                  <p className="text-xs text-slate-400 mb-1 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous</p>
                  <p className="font-semibold text-slate-800 text-sm group-hover:text-purple-700 transition-colors duration-200 line-clamp-2">{prevPost.title}</p>
                </Link>
              ) : <div />}
              {nextPost && (
                <Link href={`/blogs/${nextPost.slug}`} className="group p-5 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-200 text-right ml-auto w-full">
                  <p className="text-xs text-slate-400 mb-1 flex items-center gap-1 justify-end">Next <ArrowRight className="w-3 h-3" /></p>
                  <p className="font-semibold text-slate-800 text-sm group-hover:text-purple-700 transition-colors duration-200 line-clamp-2">{nextPost.title}</p>
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
              <h3 className="font-display font-bold text-slate-900 mb-4 text-sm">About the Author</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full text-white font-bold flex items-center justify-center" style={{ background: GRAD }}>{post.authorInitials}</div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{post.author}</p>
                  <p className="text-slate-400 text-xs">Pravartak Logistics</p>
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">A logistics expert sharing insights to help businesses across India ship smarter and build resilient supply chains.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden mb-6">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: GRAD }} />
              <h3 className="font-display font-bold text-slate-900 mb-5 text-sm">Related Articles</h3>
              <div className="space-y-5">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blogs/${r.slug}`} className="group block">
                    <div className="rounded-xl h-20 mb-3 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${r.from}30, ${r.to}30)` }}>
                      <span className="font-display font-bold text-3xl opacity-20" style={{ color: r.from }}>{r.authorInitials}</span>
                    </div>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-1" style={{ background: categoryColors[r.category]?.bg, color: categoryColors[r.category]?.text }}>{r.category}</span>
                    <p className="text-slate-800 text-sm font-semibold leading-snug group-hover:text-purple-700 transition-colors duration-200 line-clamp-2">{r.title}</p>
                    <p className="text-slate-400 text-xs mt-1">{r.readTime} read · {r.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 text-center relative overflow-hidden" style={{ background: GRAD }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <h3 className="font-display font-bold text-white mb-2">Ready to Ship?</h3>
                <p className="text-white/70 text-xs mb-5">Get a free quote and our team will be in touch within 2 hours.</p>
                <Link href="/order" className="block w-full py-3 bg-white rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors duration-200" style={{ color: '#9C27B0' }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

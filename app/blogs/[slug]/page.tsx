import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ArrowLeft, ArrowRight, Tag, Share2, BookOpen } from 'lucide-react'
import { blogs } from '../page'

const blogContent: Record<string, string> = {
  'future-of-last-mile-delivery': `
Last-mile delivery represents 53% of total shipping costs and is the most complex part of the entire supply chain. Yet it's also where the customer experience lives or dies.

**The Current Landscape**

Today's last-mile landscape is defined by rising consumer expectations. Same-day delivery, precise time windows, and real-time tracking are no longer differentiators — they're baseline requirements. Companies that can't meet these demands are losing customers fast.

The challenge is compounded by urban density, traffic congestion, and the relentless pressure to reduce costs. Traditional delivery models — a driver with a van making sequential stops — are reaching their physical and economic limits.

**What's Coming Next**

Autonomous delivery robots are already operating in college campuses and dense urban neighborhoods. These sidewalk robots navigate pedestrian environments, navigate around obstacles, and deliver within a defined radius cost-effectively.

Drone delivery, long the domain of pilot programs, is moving toward commercial scale. The regulatory environment is maturing, with air corridors being established in major cities. For rural and suburban deliveries, drones can dramatically cut delivery time and cost.

AI-powered route optimization is the near-term win that's already being realized. Modern routing algorithms consider traffic patterns, weather, delivery windows, vehicle capacity, and driver hours to create routes that would be impossible for humans to compute manually.

**The Human Element**

Despite all the technology, the human element remains essential. The most successful last-mile operations combine technology with empowered, well-supported delivery professionals. Real-time support, smart tools, and fair compensation lead to better service outcomes.

**Looking Ahead**

The last-mile delivery market is projected to reach $200 billion by 2027. Companies that invest now in the technology and partnerships to solve this challenge will have a meaningful competitive advantage. Those that wait will find themselves playing an expensive game of catch-up.
  `,
  'supply-chain-resilience-2026': `
The pandemic exposed a painful truth about global supply chains: decades of optimization for efficiency had come at the cost of resilience. Just-in-time inventory, single-source suppliers, and lean operations left companies unable to absorb shocks.

**The Cost of Fragility**

The numbers tell the story. Supply chain disruptions cost the average company 45% of one year's profits over the course of a decade. For companies heavily reliant on single-source suppliers or geographically concentrated production, the risk is even higher.

**What Resilience Actually Means**

Resilience is about building systems that can absorb disruption and recover quickly. This requires visibility — knowing where your goods are and what your suppliers' suppliers look like. It requires optionality — having backup suppliers, alternative routes, and diversified inventory positions. And it requires agility — the ability to pivot quickly when conditions change.

**Technology as a Foundation**

Modern supply chain technology is making resilience more achievable. Digital twins allow companies to simulate disruption scenarios before they happen. AI-powered demand forecasting reduces the need for safety stock while maintaining service levels. Blockchain-enabled supplier networks create the transparency needed to identify risks early.

**Building Your Resilience Roadmap**

Start with visibility. You can't manage what you can't see. Invest in tracking and monitoring across your supply chain. Then map your dependencies — understand which suppliers represent single points of failure. Prioritize diversification in your most critical material flows. Finally, build relationships, not just transactions. Suppliers who see you as a true partner will go the extra mile when disruptions hit.
  `,
}

const defaultContent = `
Logistics is one of the most dynamic and critical industries in the global economy. As businesses scale and customer expectations rise, the pressure on supply chains to perform has never been greater.

**Understanding the Challenge**

Modern logistics faces a perfect storm of complexity: global supply chains, rising customer expectations for speed and transparency, labor shortages, fuel volatility, and the relentless growth of e-commerce. Navigating this landscape requires both strategic thinking and operational excellence.

**Technology as the Enabler**

The most significant shift in logistics over the past decade has been the adoption of technology at every level of the supply chain. From warehouse management systems that optimize pick paths to AI-powered demand forecasting that reduces overstock, technology is turning logistics from a cost center into a competitive differentiator.

Real-time tracking, once a premium feature, is now table stakes. Customers expect to know where their package is at every moment. The operational data generated by tracking systems also provides valuable insights for route optimization, carrier performance management, and capacity planning.

**The Human Factor**

Despite all the technology, logistics remains fundamentally a people business. The relationships between shippers, carriers, and customers are built on trust. Skilled logistics professionals who understand both the operational realities and the strategic implications of supply chain decisions are in high demand.

**What This Means for Your Business**

Whether you're a growing e-commerce brand, a manufacturer with complex distribution needs, or a retailer managing seasonal demand swings, your logistics strategy has a direct impact on your bottom line and your customer relationships. Investing in the right logistics partnerships and technology is not a cost to be minimized — it's a competitive investment.

Working with a logistics partner that combines operational excellence with technological sophistication gives you the infrastructure to grow without logistics becoming a bottleneck.
`

const categoryColors: Record<string, string> = {
  'Industry Trends': 'bg-blue-50 text-blue-700',
  Strategy: 'bg-indigo-50 text-indigo-700',
  'Cold Chain': 'bg-cyan-50 text-cyan-700',
  'E-Commerce': 'bg-violet-50 text-violet-700',
  International: 'bg-amber-50 text-amber-700',
  Sustainability: 'bg-emerald-50 text-emerald-700',
}

function renderContent(content: string) {
  const paragraphs = content.trim().split('\n\n')
  return paragraphs.map((para, i) => {
    const trimmed = para.trim()
    if (!trimmed) return null
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      return (
        <h3 key={i} className="font-display text-xl font-bold text-slate-900 mt-8 mb-3">
          {trimmed.replace(/\*\*/g, '')}
        </h3>
      )
    }
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="text-slate-600 leading-relaxed text-base mb-5">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="text-slate-800 font-semibold">
              {part.replace(/\*\*/g, '')}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    )
  })
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug)
  if (!post) notFound()

  const content = blogContent[post.slug] || defaultContent
  const relatedPosts = blogs.filter((b) => b.slug !== post.slug).slice(0, 3)
  const currentIndex = blogs.findIndex((b) => b.slug === post.slug)
  const prevPost = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextPost = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

  return (
    <>
      {/* Hero */}
      <div className="pt-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-slate-100 text-slate-700'}`}>
              {post.category}
            </span>
            <span className="text-blue-300 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime} read
            </span>
            <span className="text-blue-300 text-xs">{post.date}</span>
          </div>

          <h1 className="font-display text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">{post.excerpt}</p>

          <div className="flex items-center gap-3 pb-12">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
              {post.authorInitials}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{post.author}</p>
              <p className="text-blue-300 text-xs">Pravartak Editorial Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h4 className="font-display font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Also Read
                  </h4>
                  <div className="space-y-3">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blogs/${p.slug}`}
                        className="block text-xs text-slate-600 hover:text-blue-600 transition-colors leading-snug"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-600 rounded-2xl p-5 text-white text-center">
                  <p className="font-display font-bold mb-2 text-sm">Need a Logistics Partner?</p>
                  <p className="text-blue-200 text-xs mb-4">Get a free quote from Pravartak today.</p>
                  <Link
                    href="/order"
                    className="block w-full py-2.5 bg-white text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              {renderContent(content)}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
                <span className="text-xs text-slate-400 flex items-center gap-1 mr-2">
                  <Tag className="w-3 h-3" /> Tags:
                </span>
                {['Logistics', post.category, 'Pravartak', 'Supply Chain'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-3 mt-5">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Share2 className="w-3 h-3" /> Share:
                </span>
                {['Twitter', 'LinkedIn', 'Facebook'].map((s) => (
                  <button
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Prev / Next */}
              <div className="grid sm:grid-cols-2 gap-4 mt-10 pt-8 border-t border-slate-100">
                {prevPost ? (
                  <Link
                    href={`/blogs/${prevPost.slug}`}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                  >
                    <ArrowLeft className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Previous</p>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 line-clamp-2">
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                ) : <div />}

                {nextPost ? (
                  <Link
                    href={`/blogs/${nextPost.slug}`}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 sm:justify-end"
                  >
                    <div className="text-right">
                      <p className="text-xs text-slate-400 mb-1">Next</p>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 line-clamp-2">
                        {nextPost.title}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  </Link>
                ) : <div />}
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

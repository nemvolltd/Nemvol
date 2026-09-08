import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Custom Vector Emblems matching the exact design style of the reference image
const SecurityGlobeEmblem = () => (
  <svg className="w-14 h-14 sm:w-16 sm:h-16 text-blue-300/80 group-hover:text-white transition-colors shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
    <circle cx="32" cy="32" r="24" strokeWidth="1.2" strokeDasharray="2 2" />
    <ellipse cx="32" cy="32" rx="14" ry="24" strokeWidth="1.2" />
    <line x1="8" y1="32" x2="56" y2="32" strokeWidth="1.2" />
    <line x1="14" y1="20" x2="50" y2="20" strokeWidth="1" strokeOpacity="0.6" />
    <line x1="14" y1="44" x2="50" y2="44" strokeWidth="1" strokeOpacity="0.6" />
    <text x="32" y="34.5" textAnchor="middle" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold" letterSpacing="0.05em">
      SECURE
    </text>
  </svg>
)

const AnalyticsRingEmblem = () => (
  <svg className="w-14 h-14 sm:w-16 sm:h-16 text-blue-300/80 group-hover:text-white transition-colors shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
    <circle cx="32" cy="32" r="23" strokeWidth="1.2" strokeDasharray="3 3" />
    <circle cx="32" cy="32" r="15" strokeWidth="1.2" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    <text x="32" y="47" textAnchor="middle" fontSize="5.5" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">
      ANALYTICS
    </text>
  </svg>
)

const CloudServerEmblem = () => (
  <svg className="w-16 h-14 sm:w-20 sm:h-16 text-blue-300/80 group-hover:text-white transition-colors shrink-0" viewBox="0 0 80 64" fill="none" stroke="currentColor">
    {/* Cloud outline */}
    <path
      d="M 12 36 C 12 31 16 28 20 28 C 22 21 28 17 35 17 C 43 17 49 22 51 29 C 55 29 59 32 59 37 C 59 42 55 45 50 45 L 17 45 C 13 45 12 41 12 36 Z"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="57" y1="26" x2="63" y2="26" strokeWidth="1" strokeOpacity="0.4" />
    <line x1="60" y1="23" x2="60" y2="40" strokeWidth="1.2" strokeOpacity="0.5" />
    {/* Server icon */}
    <rect x="66" y="24" width="12" height="7" rx="1.5" strokeWidth="1.2" />
    <circle cx="69" cy="27.5" r="0.8" fill="currentColor" />
    <rect x="66" y="34" width="12" height="7" rx="1.5" strokeWidth="1.2" />
    <circle cx="69" cy="37.5" r="0.8" fill="currentColor" />
  </svg>
)

const StarburstEmblem = () => (
  <svg className="w-14 h-14 sm:w-16 sm:h-16 text-blue-300/80 group-hover:text-white transition-colors shrink-0" viewBox="0 0 64 64" fill="none" stroke="currentColor">
    <circle cx="32" cy="32" r="23" strokeWidth="1" strokeDasharray="1 3" />
    {/* Star cluster in ring */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
      const rad = (deg * Math.PI) / 180
      const x = 32 + 18 * Math.cos(rad)
      const y = 32 + 18 * Math.sin(rad)
      return <polygon key={i} points={`${x},${y-1.5} ${x+1.2},${y+1.2} ${x-1.2},${y+1.2}`} fill="currentColor" />
    })}
    <text x="32" y="34" textAnchor="middle" fontSize="6.5" fill="currentColor" stroke="none" fontFamily="monospace" fontWeight="bold">
      API ACT
    </text>
  </svg>
)

const businessTiers = [
  {
    id: 'market-sellers',
    label: 'Market sellers',
    tierTag: 'Tier 01 • Instant Commerce',
    title: 'Market Sellers & Solo Merchants',
    lead: 'Zero technical setup for vendors moving inventory via WhatsApp, social channels, and physical stalls.',
    ctaText: 'Launch Your Storefront',
    features: [
      {
        title: 'WhatsApp Order Intake',
        desc: 'Direct order links that automatically record customer details without manual chat back-and-forth.',
        Emblem: SecurityGlobeEmblem
      },
      {
        title: 'Real-Time Inventory Tracking',
        desc: 'Live stock deductions across all sales channels so you never oversell out-of-stock items.',
        Emblem: AnalyticsRingEmblem
      },
      {
        title: 'Instant Verified Payments',
        desc: 'Automated bank transfer and card processing with zero fake receipt risks.',
        Emblem: CloudServerEmblem
      },
      {
        title: 'Customer Directory & Reorders',
        desc: 'Saved customer contacts and purchase histories to trigger easy repeat purchases.',
        Emblem: StarburstEmblem
      }
    ]
  },
  {
    id: 'service-pros',
    label: 'Service professionals',
    tierTag: 'Tier 02 • Agencies & Consultants',
    title: 'Service Professionals & Consultants',
    lead: 'Streamlined client intake, automated professional invoicing, and instant contract sign-offs.',
    ctaText: 'Streamline Your Practice',
    features: [
      {
        title: 'Automated Invoicing & Billing',
        desc: 'Generate branded PDF invoices with instant payment links and recurring billing options.',
        Emblem: SecurityGlobeEmblem
      },
      {
        title: 'Client Management Dashboard',
        desc: 'A dedicated dashboard for deliverables, revisions, and milestone progress tracking.',
        Emblem: AnalyticsRingEmblem
      },
      {
        title: 'Contract Sharing & Digital Signing',
        desc: 'Digital signing and document exchange built right into your client onboarding flow.',
        Emblem: CloudServerEmblem
      },
      {
        title: 'Fast Settlement Payouts',
        desc: 'Automated disbursement to your business bank account with detailed tax reporting.',
        Emblem: StarburstEmblem
      }
    ]
  },
  {
    id: 'smes',
    label: 'Growing SMEs',
    tierTag: 'Tier 03 • Scaling Operations',
    title: 'Growing SMEs & Multi-Branch Brands',
    lead: 'Robust operational backbone for businesses scaling teams, catalogs, and multi-location warehouses.',
    ctaText: 'Scale Operations with Nemvol',
    features: [
      {
        title: 'Role-Based Access Control',
        desc: 'Granular permissions for cashiers, managers, and accountants with full audit logs.',
        Emblem: SecurityGlobeEmblem
      },
      {
        title: 'Advanced Revenue Analytics',
        desc: 'Cohort analysis, best-selling product reports, and automated profit-margin calculations.',
        Emblem: AnalyticsRingEmblem
      },
      {
        title: 'Multi-Warehouse Sync',
        desc: 'Track and transfer stock across multiple store branches or fulfillment hubs.',
        Emblem: CloudServerEmblem
      },
      {
        title: 'Open API Connections',
        desc: 'Plug directly into existing ERPs, custom accounting software, and dispatch partners.',
        Emblem: StarburstEmblem
      }
    ]
  },
  {
    id: 'enterprise',
    label: 'Large enterprise',
    tierTag: 'Tier 04 • High Volume & Custom',
    title: 'Large Enterprise & High-Volume Platforms',
    lead: 'Dedicated infrastructure, tailored workflows, and enterprise SLAs designed for mission-critical throughput.',
    ctaText: 'Contact Enterprise Advisory',
    features: [
      {
        title: 'Dedicated Senior Engineering Lead',
        desc: 'Direct Slack channel with senior engineering architects and 24/7 incident response.',
        Emblem: SecurityGlobeEmblem
      },
      {
        title: 'Custom Workflow Automation',
        desc: 'Proprietary integrations designed around your internal legacy database architectures.',
        Emblem: AnalyticsRingEmblem
      },
      {
        title: 'High-Availability Cloud Infrastructure',
        desc: '99.99% uptime guarantee with isolated tenant databases and DDoS protection.',
        Emblem: CloudServerEmblem
      },
      {
        title: 'Custom Commercial Terms & Compliance',
        desc: 'Volume-based pricing schedules, white-label interfaces, and tailored compliance agreements.',
        Emblem: StarburstEmblem
      }
    ]
  }
]

const BuiltForEveryBusiness = () => {
  const [activeId, setActiveId] = useState(businessTiers[2].id) // Default to Growing SMEs
  const current = businessTiers.find((t) => t.id === activeId) || businessTiers[2]

  return (
    <section className="bg-white text-gray-900 py-20 sm:py-28 lg:py-32 relative overflow-hidden" id="built-for-every-business">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Bordered Grid with Brand Dark Blue solid background */}
        <div className="border border-blue-900/60 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#002752] shadow-2xl shadow-blue-950/40">
          
          {/* Left Column (Spans 5 Columns): Pure Minimalist Editorial */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-blue-900/60 bg-[#002244]/80">
            <div>
              <span className="text-[11px] font-mono font-bold text-blue-300 uppercase tracking-[0.2em] block mb-4">
                Audience & Scale
              </span>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-medium text-white tracking-tight leading-[1.1]">
                Built for Every Business
              </h2>

              {/* Subtitle */}
              <p className="mt-5 text-sm sm:text-base text-blue-100/75 leading-relaxed max-w-sm">
                From solo entrepreneurs to large enterprises: Nemvol adapts to your operating scale, multi-location branches, and transaction volume.
              </p>

              {/* Minimal Tier Selector Pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {businessTiers.map((tier) => {
                  const isActive = activeId === tier.id

                  return (
                    <button
                      key={tier.id}
                      onClick={() => setActiveId(tier.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#002752] font-bold shadow-xs'
                          : 'bg-transparent text-blue-200 border border-blue-800/70 hover:text-white hover:border-blue-400'
                      }`}
                    >
                      {tier.label}
                    </button>
                  )
                })}
              </div>

              {/* Active Tier Sub-heading */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mt-8 pt-6 border-t border-blue-900/60"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 block mb-1">
                    {current.tierTag}
                  </span>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/75 mt-1 leading-relaxed">
                    {current.lead}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Direct CTA */}
            <div className="pt-8 lg:pt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-[#002752] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md group w-fit cursor-pointer"
              >
                <span>{current.ctaText}</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform text-[#0056B8]" />
              </Link>
            </div>
          </div>

          {/* Right Column (Spans 7 Columns): Stacked Rows with Dividers & Right Emblems */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="divide-y divide-blue-900/50"
              >
                {current.features.map((feat, idx) => {
                  const Emblem = feat.Emblem

                  return (
                    <div
                      key={idx}
                      className="p-8 sm:p-10 lg:p-12 flex items-center justify-between gap-8 group hover:bg-white/[0.03] transition-colors"
                    >
                      <div className="max-w-md">
                        {/* Feature Title */}
                        <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                          {feat.title}
                        </h4>

                        {/* Feature Description */}
                        <p className="mt-2 text-xs sm:text-sm text-blue-100/70 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>

                      {/* Right Vector Emblem (Exact Reference Style) */}
                      <Emblem />
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}

export default BuiltForEveryBusiness

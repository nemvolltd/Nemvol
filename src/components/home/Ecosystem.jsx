import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingBag, CreditCard, Truck, Rocket, ArrowRight } from 'lucide-react'

const ecosystemSteps = [
  {
    step: '1',
    name: 'Nemvol Retail',
    tag: 'Storefront',
    tagBg: 'bg-blue-600 text-white',
    icon: ShoppingBag,
    summary:
      'Omnichannel commerce, multi-location inventory, and unified point-of-sale that syncs physical and online orders into one live catalog.',
    href: '/services'
  },
  {
    step: '2',
    name: 'Nemvol Pay',
    tag: 'Finance',
    tagBg: 'bg-[#003366] text-white',
    icon: CreditCard,
    summary:
      'Automated checkout gateways and instant bank transfer reconciliation, eliminating manual screenshot verification and delayed settlements.',
    href: '/services'
  },
  {
    step: '3',
    name: 'Shipco Logistics',
    tag: 'Fulfillment',
    tagBg: 'bg-[#003366] text-white',
    icon: Truck,
    summary:
      'Automated courier dispatch, smart rider assignment, and customer real-time GPS tracking webhooks with zero phone calls or lost packages.',
    href: '/services'
  },
  {
    step: '4',
    name: 'Nemvol For Startups',
    tag: 'Scale',
    tagBg: 'bg-blue-600 text-white',
    icon: Rocket,
    summary:
      'Custom API integrations, high-load cloud infrastructure, and senior engineering support designed to take platforms from launch to scale.',
    href: '/services'
  }
]

const Ecosystem = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white text-gray-900 border-t border-gray-100 relative overflow-hidden" id="ecosystem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Matching Reference Image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-5">
              The Platform Suite
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight"
            >
              Building a Seamless Business Ecosystem
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl"
            >
              Beyond standalone tools, we engineered an interconnected product suite that unifies commerce, payments, logistics, and scalable infrastructure.
            </motion.p>
          </div>

          {/* Right Status Pill Badges (Matching Reference Layout) */}
          <div className="flex items-center gap-2 self-start lg:self-end">
            <div className="px-4 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-xs font-mono font-medium">
              v2.4 Core
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-100">
              All-In-One Sync
            </div>
          </div>
        </div>

        {/* Connected Stepped Flow Cards with Staggered Layout */}
        <div className="relative space-y-8 sm:space-y-12">
          
          {/* Connector Line 1 to 2 (Desktop SVG) */}
          <div className="hidden lg:block absolute top-[18%] left-[42%] w-[22%] h-[120px] pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
              <path
                d="M 10 10 H 190 V 110"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Connector Line 2 to 3 (Desktop SVG) */}
          <div className="hidden lg:block absolute top-[43%] left-[38%] w-[22%] h-[120px] pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
              <path
                d="M 190 10 H 10 V 110"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Connector Line 3 to 4 (Desktop SVG) */}
          <div className="hidden lg:block absolute top-[68%] left-[42%] w-[22%] h-[120px] pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
              <path
                d="M 10 10 H 190 V 110"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Card 1 (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-xl"
          >
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex gap-4 sm:gap-6 items-start hover:border-gray-300 transition-all">
              {/* Vertical Pill Tag */}
              <div className={`w-9 sm:w-10 rounded-xl py-3 px-1 flex flex-col items-center justify-center shrink-0 ${ecosystemSteps[0].tagBg}`}>
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
                  {ecosystemSteps[0].tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <ShoppingBag size={15} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {ecosystemSteps[0].step} {ecosystemSteps[0].name}
                    </h3>
                  </div>
                  <Link
                    to={ecosystemSteps[0].href}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-2">
                  {ecosystemSteps[0].summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Right Aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 max-w-xl lg:ml-auto"
          >
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex gap-4 sm:gap-6 items-start hover:border-gray-300 transition-all">
              {/* Vertical Pill Tag */}
              <div className={`w-9 sm:w-10 rounded-xl py-3 px-1 flex flex-col items-center justify-center shrink-0 ${ecosystemSteps[1].tagBg}`}>
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
                  {ecosystemSteps[1].tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <CreditCard size={15} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {ecosystemSteps[1].step} {ecosystemSteps[1].name}
                    </h3>
                  </div>
                  <Link
                    to={ecosystemSteps[1].href}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-2">
                  {ecosystemSteps[1].summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-10 max-w-xl"
          >
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex gap-4 sm:gap-6 items-start hover:border-gray-300 transition-all">
              {/* Vertical Pill Tag */}
              <div className={`w-9 sm:w-10 rounded-xl py-3 px-1 flex flex-col items-center justify-center shrink-0 ${ecosystemSteps[2].tagBg}`}>
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
                  {ecosystemSteps[2].tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Truck size={15} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {ecosystemSteps[2].step} {ecosystemSteps[2].name}
                    </h3>
                  </div>
                  <Link
                    to={ecosystemSteps[2].href}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-2">
                  {ecosystemSteps[2].summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 (Right Aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 max-w-xl lg:ml-auto"
          >
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex gap-4 sm:gap-6 items-start hover:border-gray-300 transition-all">
              {/* Vertical Pill Tag */}
              <div className={`w-9 sm:w-10 rounded-xl py-3 px-1 flex flex-col items-center justify-center shrink-0 ${ecosystemSteps[3].tagBg}`}>
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase">
                  {ecosystemSteps[3].tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Rocket size={15} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {ecosystemSteps[3].step} {ecosystemSteps[3].name}
                    </h3>
                  </div>
                  <Link
                    to={ecosystemSteps[3].href}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-2">
                  {ecosystemSteps[3].summary}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Ecosystem

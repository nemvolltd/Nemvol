import { motion } from 'framer-motion'
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Compass,
  Zap,
  KeyRound,
  Coins,
  Rocket,
  ShieldCheck,
  Check,
  X
} from 'lucide-react'
import { Link } from 'react-router-dom'

const showdownSteps = [
  {
    step: '01',
    pill: 'STRATEGY',
    feature: 'Strategy',
    phase: 'Discovery & Product Architecture',
    icon: Compass,
    nemvol: {
      title: 'Market & Revenue Focused',
      desc: 'We research your market dynamics, audience demand, and unit economics upfront before writing code—engineering software engineered to generate revenue from day one.',
      highlight: 'Validated Unit Economics'
    },
    others: {
      title: 'Just writes code blindly',
      desc: 'Takes an unvalidated feature wishlist, builds blindly without business context, and hands you an expensive tool nobody pays for.',
      risk: 'High Burn & Zero Validation'
    }
  },
  {
    step: '02',
    pill: 'SPEED',
    feature: 'Delivery Speed',
    phase: 'Engineering Velocity',
    icon: Zap,
    nemvol: {
      title: '8–12 Weeks Guaranteed',
      desc: 'Fixed sprint cadences, production builds delivered every 7 days, and a binding launch date guaranteed in writing.',
      highlight: 'Binding Launch Deadline'
    },
    others: {
      title: '6+ Months of Delays',
      desc: 'Endless timeline pushes, sudden contractor turnover, radio silence, and months lost while your market window closes.',
      risk: 'Perpetual Timeline Drift'
    }
  },
  {
    step: '03',
    pill: 'OWNERSHIP',
    feature: 'Ownership',
    phase: 'IP & Infrastructure Governance',
    icon: KeyRound,
    nemvol: {
      title: '100% IP & Code Ownership',
      desc: 'Full GitHub repository access, database schemas, cloud infrastructure keys, and all intellectual property transferred unconditionally to you.',
      highlight: 'Zero Platform Lock-In'
    },
    others: {
      title: 'Locked into their platform',
      desc: 'Proprietary hosting traps and encrypted black-box code that hold your product hostage under expensive recurring retainers.',
      risk: 'Hostage Codebase'
    }
  },
  {
    step: '04',
    pill: 'PRICING',
    feature: 'Pricing',
    phase: 'Commercial Terms',
    icon: Coins,
    nemvol: {
      title: 'Fixed, Predictable Quotes',
      desc: 'Transparent milestone pricing agreed upfront. What we quote is what you pay—no surprise change orders or inflated hourly overages.',
      highlight: 'Zero Hidden Fees'
    },
    others: {
      title: 'Endless Scope Creep',
      desc: 'Lowball opening bids designed to hook you, followed by massive mid-project invoices for basic necessary features.',
      risk: 'Cost Overruns & Surprises'
    }
  },
  {
    step: '05',
    pill: 'SCALE',
    feature: 'Post-Launch',
    phase: 'Growth & Telemetry',
    icon: Rocket,
    nemvol: {
      title: 'Growth & Ads Optimized',
      desc: 'Shipped fully wired for growth: sub-second load times, SEO architecture, conversion tracking pixels, analytics pipelines, and payment automation ready for traffic.',
      highlight: 'Launch-Day Ready'
    },
    others: {
      title: 'Handed off and abandoned',
      desc: 'A raw zip file dropped in an email with broken dependencies, zero onboarding documentation, and no deployment support.',
      risk: 'Zero Post-Launch Support'
    }
  }
]

const Showdown = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#fafbfc] text-gray-900 border-t border-gray-100" id="showdown">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100/80 text-blue-700 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em] mb-4">
            The Showdown
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Nemvol vs. Typical Agencies
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            Traditional agencies bill for hours. We build for revenue, velocity, and complete ownership.
          </p>
        </div>

        {/* Stepped Brick Bento Flow */}
        <div className="relative space-y-8 sm:space-y-10">

          {showdownSteps.map((stepItem, idx) => {
            const Icon = stepItem.icon
            // Alternate alignments: 0, 2, 4 left / 1, 3 right
            const isRight = idx % 2 === 1
            const isFull = idx === 4

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className={`relative ${
                  isFull
                    ? 'w-full max-w-5xl mx-auto'
                    : isRight
                    ? 'w-full lg:w-[86%] lg:ml-auto'
                    : 'w-full lg:w-[86%] lg:mr-auto'
                }`}
              >
                {/* Connecting Dashed Curve on Desktop */}
                {idx < showdownSteps.length - 1 && (
                  <div
                    className={`hidden lg:block absolute -bottom-10 pointer-events-none z-0 ${
                      isRight ? 'left-16' : 'right-16'
                    }`}
                  >
                    <svg width="120" height="42" viewBox="0 0 120 42" fill="none" className="text-blue-300/60">
                      <path
                        d={
                          isRight
                            ? 'M 10 0 C 10 25, 90 15, 110 42'
                            : 'M 110 0 C 110 25, 30 15, 10 42'
                        }
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>
                )}

                {/* The Brick Card */}
                <div className="relative bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,86,184,0.06)] transition-all">
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-stretch">
                    
                    {/* Vertical Pill Tag (Inspired by reference image) */}
                    <div className="hidden sm:flex flex-col items-center justify-center bg-[#002752] text-white rounded-2xl px-3 py-5 shrink-0 select-none shadow-xs">
                      <span className="[writing-mode:vertical-lr] rotate-180 font-mono text-[10px] tracking-[0.25em] font-bold text-blue-100">
                        {stepItem.pill}
                      </span>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0 w-full">
                      
                      {/* Brick Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-blue-600">
                                Step {stepItem.step}
                              </span>
                              <span className="text-gray-300">•</span>
                              <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                                {stepItem.feature}
                              </h3>
                            </div>
                            <span className="text-[11px] font-mono text-gray-400">
                              {stepItem.phase}
                            </span>
                          </div>
                        </div>

                        {/* Mobile Pill Tag */}
                        <span className="sm:hidden font-mono text-[10px] font-bold uppercase tracking-wider text-white bg-[#002752] px-2.5 py-0.5 rounded-md">
                          {stepItem.pill}
                        </span>
                      </div>

                      {/* Bento Cards Split Comparison */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                        
                        {/* Nemvol Standard (Winner) */}
                        <div className="bg-blue-50/40 border border-blue-200/90 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                                  <Check size={10} strokeWidth={3} />
                                </div>
                                <span className="text-[11px] font-mono font-bold text-blue-800 uppercase tracking-wider">
                                  Nemvol Standard
                                </span>
                              </div>
                              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-100/80 text-blue-700">
                                Verified
                              </span>
                            </div>

                            <div className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug">
                              {stepItem.nemvol.title}
                            </div>

                            <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed">
                              {stepItem.nemvol.desc}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-blue-100 flex items-center gap-1.5 text-[11px] font-mono text-blue-700 font-semibold">
                            <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                            <span>{stepItem.nemvol.highlight}</span>
                          </div>
                        </div>

                        {/* Typical Agencies (Legacy Pitfall) */}
                        <div className="bg-gray-50/80 border border-gray-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center shrink-0">
                                  <X size={10} strokeWidth={3} />
                                </div>
                                <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                                  Typical Agencies
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-gray-400">
                                Legacy Trap
                              </span>
                            </div>

                            <div className="text-sm sm:text-base font-semibold text-gray-600 line-through decoration-gray-300 leading-snug">
                              {stepItem.others.title}
                            </div>

                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                              {stepItem.others.desc}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                            <XCircle size={13} className="text-gray-400 shrink-0" />
                            <span>{stepItem.others.risk}</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            )
          })}

        </div>

        {/* Bottom Call to Action Card */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#002752] text-white border border-blue-900/60 text-center max-w-3xl mx-auto shadow-2xl shadow-blue-950/30">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Experience software delivery done right.
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-blue-100/75 max-w-md mx-auto leading-relaxed">
            Get fixed pricing, guaranteed sprint deadlines, and full codebase ownership from sprint one.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-[#002752] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-xs group"
            >
              <span>Book Discovery Call</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform text-[#0056B8]" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>See Client Case Studies</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Showdown


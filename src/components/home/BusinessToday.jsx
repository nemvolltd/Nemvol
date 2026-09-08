import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Instagram,
  Landmark,
  Truck,
  FileSpreadsheet,
  ArrowRight,
  Check
} from 'lucide-react'

const channels = [
  {
    id: 'whatsapp',
    name: 'WhatsApp Orders',
    bottleneck: 'Lost in chats',
    summary: 'Orders arrive in messy chat threads with zero central tracking.',
    slowWork: 'Manually copy-pasting customer names and addresses into spreadsheets.',
    lostTime: 'Customer messages get buried under personal and group chats.',
    solution: 'Automated conversational order intake connected directly to your database.',
    metric: 'Instant response vs. hours of chat backlog'
  },
  {
    id: 'instagram',
    name: 'Instagram DMs',
    bottleneck: 'Unanswered DMs',
    summary: 'High-intent buyers wait hours for price quotes and account numbers.',
    slowWork: 'Typing the same price list and bank details repeatedly in DMs.',
    lostTime: 'Prospects lose interest and buy from competitors who respond faster.',
    solution: 'Direct checkout links generated automatically inside Instagram DMs.',
    metric: 'Direct conversion links with zero manual typing'
  },
  {
    id: 'payments',
    name: 'Bank Payments',
    bottleneck: 'Manual Check',
    summary: 'Staff manually verify transfer screenshots against banking apps.',
    slowWork: 'Opening bank apps to cross-check receipts before approving orders.',
    lostTime: 'Evening reconciliation matching statements against paper records.',
    solution: 'Automated webhook confirmation through Paystack, Flutterwave, or Stripe.',
    metric: 'Instant payment verification with zero fake receipts'
  },
  {
    id: 'delivery',
    name: 'Delivery Tracking',
    bottleneck: 'Call Rider',
    summary: 'Dispatching riders via phone calls with zero real-time customer tracking.',
    slowWork: 'Repeatedly calling third-party riders to ask for location updates.',
    lostTime: 'Fielding angry "Where is my order?" calls from waiting customers.',
    solution: 'Automated rider dispatch webhooks and live customer SMS tracking.',
    metric: 'Real-time GPS tracking without phone tag'
  },
  {
    id: 'excel',
    name: 'Manual Excel',
    bottleneck: 'Human Error',
    summary: 'Data scattered across outdated spreadsheets with broken formulas.',
    slowWork: 'Re-entering information across multiple conflicting Excel sheets.',
    lostTime: 'Fixing duplicate entries, typo mistakes, and missing delivery notes.',
    solution: 'One unified cloud database as your single source of truth.',
    metric: '100% synchronized inventory and order records'
  }
]

const BusinessToday = () => {
  const [activeTab, setActiveTab] = useState(0)
  const current = channels[activeTab]

  return (
    <section className="py-20 sm:py-28 bg-white text-gray-900 border-t border-gray-100" id="the-problem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean, Minimal, Mature */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-mono font-medium tracking-[0.2em] text-gray-400 uppercase mb-3">
            The Fragmented Reality
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight leading-tight">
            What business feels like today.
          </h2>
          <p className="mt-3 text-base text-gray-500 leading-relaxed">
            You're working too hard because your tools don't talk to each other. It's slow, messy, and you're losing money in the gaps.
          </p>
        </div>

        {/* Mature Enclosed Card Container */}
        <div className="bg-gray-50/80 border border-gray-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          
          {/* Segmented Pill Tabs on Top */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="bg-white border border-gray-200 rounded-full p-1 inline-flex flex-wrap items-center justify-center gap-1 shadow-xs">
              {channels.map((item, idx) => {
                const isActive = activeTab === idx
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 sm:px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0056B8] text-white shadow-xs'
                        : 'text-gray-600 hover:text-[#0056B8] hover:bg-blue-50/50'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Two-Column Content: Left Narrative, Right Minimal Status Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Concise Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div>
                    <div className="inline-block text-[11px] font-mono font-semibold text-blue-700 uppercase tracking-wider bg-blue-50 border border-blue-100/80 px-2.5 py-1 rounded-md mb-2.5">
                      Friction: {current.bottleneck}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                      {current.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {current.summary}
                    </p>
                  </div>

                  <div className="border-t border-gray-200/80 pt-4 space-y-3.5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-800 block">
                        Slow Work
                      </span>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        {current.slowWork}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-800 block">
                        Lost Time
                      </span>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        {current.lostTime}
                      </p>
                    </div>
                  </div>

                  {/* Clean Fix Line */}
                  <div className="bg-white border border-blue-100 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-gray-700 shadow-xs">
                    <Check size={16} className="text-[#0056B8] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">How Nemvol solves this:</span>{' '}
                      <span>{current.solution}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Minimalist, Mature Comparison Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                    System Comparison
                  </span>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100/60">
                    Your Business Flow
                  </span>
                </div>

                {/* Status rows for all 5 channels with the active one highlighted */}
                <div className="space-y-2">
                  {channels.map((item, idx) => {
                    const isSelected = activeTab === idx

                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveTab(idx)}
                        className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between text-xs ${
                          isSelected
                            ? 'bg-blue-50/60 border-blue-200 shadow-xs'
                            : 'bg-white border-gray-100 hover:border-gray-200 text-gray-500'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#0056B8]' : 'bg-gray-300'}`} />
                          <span className={`font-medium ${isSelected ? 'text-blue-950 font-bold' : 'text-gray-600'}`}>
                            {item.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] ${isSelected ? 'text-blue-700 font-medium' : 'text-gray-400'}`}>
                            {item.bottleneck}
                          </span>
                          <ArrowRight size={12} className={isSelected ? 'text-[#0056B8]' : 'text-gray-300'} />
                          <span className={`text-[11px] font-bold ${isSelected ? 'text-[#0056B8]' : 'text-gray-400'}`}>
                            Unified
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Footer Metric Note */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Active Channel Impact:</span>
                  <span className="font-semibold text-gray-800">{current.metric}</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default BusinessToday

import { motion } from 'framer-motion'
import Section from '../ui/Section'

const metrics = [
  {
    metric: '50+ Products',
    label: 'MVPs Launched',
    description: 'We help startups go from zero to live in record time.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.3" />
        <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.2" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    )
  },
  {
    metric: '90% Success',
    label: 'Discovery to MVP',
    description: 'Almost every founder who designs with us builds with us.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4v40M4 24h40" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path d="M24 4 L44 24 L24 44 L4 24 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.3" />
      </svg>
    )
  },
  {
    metric: '10 Weeks',
    label: 'Average Build Time',
    description: 'We launch your actual working app in under 3 months.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    metric: '100% Yours',
    label: 'Code Ownership',
    description: 'Every line of code and design is entirely owned by you.',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="8" y="20" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="30" r="4" fill="currentColor" />
      </svg>
    )
  }
]

const ImpactMetrics = () => {
  return (
    <Section background="white" className="py-24 md:py-32 relative">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.012] pointer-events-none select-none uppercase font-black text-[10vw] md:text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        By the Numbers
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              Track Record
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
            >
              Results that <br />
              <span className="text-blue-700 italic">speak volumes.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
              We measure our success entirely by how well our clients succeed. Here is how our track record looks.
            </p>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((item, index) => {
            const offsets = ['md:mt-0', 'md:mt-12', 'md:mt-6', 'md:mt-18']

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group ${offsets[index]}`}
              >
                <div className="bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between h-full min-h-[300px]">
                  {/* SVG Icon */}
                  <div className="w-12 h-12 text-blue-700 mb-6 group-hover:scale-105 transition-transform duration-300">
                    {item.svg}
                  </div>

                  {/* Content */}
                  <div>
                    {/* Metric */}
                    <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 tracking-tight">
                      {item.metric}
                    </div>

                    {/* Label */}
                    <div className="text-xs uppercase font-extrabold text-blue-600 mb-2 tracking-wider">
                      {item.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-500 font-medium leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default ImpactMetrics
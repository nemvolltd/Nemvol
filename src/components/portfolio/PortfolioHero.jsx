import { motion } from 'framer-motion'
import Section from '../ui/Section'

const PortfolioHero = () => {
  return (
    <Section className="min-h-[60vh] flex items-center pt-32 pb-20 relative overflow-hidden bg-white">
      {/* Soft Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.012] pointer-events-none select-none uppercase font-black text-[12vw] md:text-[18vw] whitespace-nowrap leading-none tracking-tighter">
        Our Work
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-start text-left max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Case Studies
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8"
          >
            MVPs that reached <br />
            <span className="text-blue-700 italic">real traction.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-500 max-w-3xl leading-relaxed mb-16 font-medium"
          >
            From simple ideas to funded startups. Here is how we helped founders validate their ideas, launch fast, and scale their products to real users.
          </motion.p>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-8 w-full border-t border-gray-100 pt-12">
            {[
              { label: 'MVPs Shipped', value: '50+ Real Products' },
              { label: 'Avg Delivery', value: '10 Weeks Or Less' },
              { label: 'Raised by Clients', value: '$15 Million+' },
              { label: 'Success Rate', value: '90% Traction' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-none">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase font-extrabold text-blue-500 tracking-widest leading-none">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default PortfolioHero
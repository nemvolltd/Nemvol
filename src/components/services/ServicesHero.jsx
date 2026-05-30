import { motion } from 'framer-motion'
import Section from '../ui/Section'

const ServicesHero = () => {
  return (
    <Section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Subtle background accents matching the homepage */}
      <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(0,86,184,0.06)_0%,transparent_70%)]" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(56,169,248,0.05)_0%,transparent_70%)]" />

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.012] pointer-events-none select-none uppercase font-black text-[16vw] whitespace-nowrap leading-none tracking-tighter">
        Nemvol Services
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-start text-left max-w-4xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-700 animate-pulse" />
            Product Development & MVP Agency
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8"
          >
            Build your product.
            <br />
            <span className="text-blue-700 italic">Fast and simple.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-16"
          >
            We design, build, and launch your product in 8 to 12 weeks. We handle the complicated tech stuff so you can focus on growing your business.
          </motion.p>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 w-full border-t border-gray-100 pt-12 mt-4">
            {[
              { label: 'Delivery Time', value: '8-12 Weeks' },
              { label: 'Weekly Updates', value: '100% Clear' },
              { label: 'Free Support', value: '90 Days' },
              { label: 'Code Ownership', value: '100% Yours' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-1.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.45 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">{stat.value}</div>
                <div className="text-xs uppercase font-extrabold text-gray-400 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ServicesHero
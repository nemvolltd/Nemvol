import { motion } from 'framer-motion'
import Section from '../ui/Section'

const AboutHero = () => {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 relative overflow-hidden bg-white">
      {/* Soft Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.012] pointer-events-none select-none uppercase font-black text-[12vw] md:text-[18vw] whitespace-nowrap leading-none tracking-tighter">
        Nemvol Studio
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-start text-left space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Our Mission
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight"
          >
            We turn ideas into <br />
            <span className="text-blue-700 italic">real software.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-500 max-w-3xl leading-relaxed font-medium"
          >
            We help founders and teams build, launch, and grow their software products in weeks, not months. No jargon, no hidden fees, just great code.
          </motion.p>

          {/* Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full border-t border-gray-100"
          >
            {[
              { label: 'Zero Jargon', value: 'Plain English' },
              { label: 'Fast Build', value: '8 to 12 Weeks' },
              { label: 'You Own It', value: '100% Code IP' },
              { label: 'Always Here', value: 'Free Support' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase font-extrabold text-blue-500 tracking-widest leading-none">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default AboutHero
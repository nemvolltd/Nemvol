import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, ShieldCheck, Users } from 'lucide-react'
import Modal from '../ui/Modal'
import HeroLeadForm from '../contact/HeroLeadForm'

const rotatingWords = ['scale.', 'ship faster.', 'for Startups.', 'for Africa.']

const partnerLogos = [
  { name: 'PACIFIC HOLDINGS', style: 'font-sans font-black tracking-tighter' },
  { name: 'Greenlife Pharma', style: 'font-serif font-bold italic' },
  { name: 'ALPHA STEP', style: 'font-mono font-extrabold tracking-widest' },
  { name: 'Paystack', style: 'font-sans font-black tracking-tight' },
  { name: 'Flutterwave', style: 'font-serif font-bold' },
  { name: 'Fashion Talent', style: 'font-sans uppercase font-medium tracking-[0.25em]' },
]

// Floating ambient particles matching the screenshot style in hero colors
const ambientParticles = [
  { top: '16%', left: '8%', size: 'w-2 h-2', opacity: 'opacity-40', delay: 0 },
  { top: '24%', left: '22%', size: 'w-2 h-2', opacity: 'opacity-50', delay: 1.2 },
  { top: '15%', right: '15%', size: 'w-2 h-2', opacity: 'opacity-35', delay: 0.7 },
  { top: '35%', right: '8%', size: 'w-1.5 h-1.5', opacity: 'opacity-60', delay: 2.1 },
  { top: '50%', left: '10%', size: 'w-2 h-2', opacity: 'opacity-45', delay: 1.8 },
  { top: '58%', right: '22%', size: 'w-2 h-2', opacity: 'opacity-40', delay: 0.4 },
  { top: '68%', left: '28%', size: 'w-1.5 h-1.5', opacity: 'opacity-55', delay: 2.5 },
  { top: '44%', right: '32%', size: 'w-2 h-2', opacity: 'opacity-30', delay: 1.5 },
]

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const trustPoints = [
    { icon: Clock, text: '8–12 Week Delivery' },
    { icon: ShieldCheck, text: '100% IP Ownership' },
    { icon: Users, text: '30+ Products Shipped' },
  ]

  return (
    <section
      className="relative min-h-screen lg:h-screen lg:max-h-[960px] flex flex-col justify-between bg-white overflow-hidden pt-24 sm:pt-26 lg:pt-28 pb-5 sm:pb-6 lg:pb-7"
      id="hero"
    >
      {/* Subtle background gradient glows */}
      <div className="absolute -top-[15%] -right-[5%] w-[550px] h-[550px] rounded-full pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(0,86,184,0.07)_0%,transparent_70%)]" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[450px] h-[450px] rounded-full pointer-events-none blur-[120px] bg-[radial-gradient(circle,rgba(56,169,248,0.05)_0%,transparent_70%)]" />

      {/* Floating square ambient dots matching reference screenshot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {ambientParticles.map((dot, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.25, 0.65, 0.25],
              y: [0, -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + (idx % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: dot.delay,
            }}
            className={`absolute rounded-[2px] bg-blue-600/30 ${dot.size} ${dot.opacity}`}
            style={{ top: dot.top, left: dot.left, right: dot.right }}
          />
        ))}
      </div>

      {/* Main Hero Content - Vertically balanced to fit desktop screen */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Main Headline - Reduced size for clean fit */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem] font-bold tracking-tight text-gray-900 leading-[1.12]"
          >
            The software development partner for teams who refuse to move{' '}
            <span className="inline-block relative text-blue-600">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed"
          >
            From architecture discovery to full-stack execution, our senior engineering team builds scalable digital platforms, modern web apps, and high-converting MVPs.
          </motion.p>

          {/* Action Row: BOOK A DEMO + SEE RESULTS with Arrow in circle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 sm:mt-7 flex flex-wrap items-center gap-5 sm:gap-6"
          >
            {/* Primary Pill Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              BOOK A DEMO
            </button>

            {/* Secondary CTA: SEE RESULTS with Circular Arrow */}
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-blue-600 transition-colors"
            >
              <span className="underline underline-offset-4 decoration-gray-300 group-hover:decoration-blue-600 transition-all">
                SEE RESULTS
              </span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-sm">
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4 sm:gap-7"
          >
            {trustPoints.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wide"
              >
                <item.icon size={14} className="text-blue-600 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Social Proof / Partner Logos Strip (Bottom) - Compact and fitted */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.38 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto pt-4 sm:pt-5 border-t border-gray-100"
      >
        {/* Eyebrow Label */}
        <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-700/90 mb-3 sm:mb-4">
          PARTNERING WITH 30+ HIGH-GROWTH STARTUPS & ENTERPRISES
        </p>

        {/* Logos Grid / Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 items-center">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="text-gray-400 hover:text-gray-900 transition-colors duration-200 flex items-center justify-start sm:justify-center cursor-default group"
            >
              <span className={`text-xs sm:text-sm group-hover:text-blue-600 transition-colors ${logo.style}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal for Lead Booking / Demo */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book Your Strategy Demo"
      >
        <HeroLeadForm compact />
      </Modal>
    </section>
  )
}

export default HeroSection

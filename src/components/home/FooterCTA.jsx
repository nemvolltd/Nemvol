import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const FooterCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white" id="cta">
      {/* Split background: top half is white, bottom half seamlessly transitions into the blue footer */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-[#002752]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Floating Pastel Ice-Blue Card matching the exact Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-[#eaf0fe] via-[#edf2fe] to-[#e4edfe] rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/80"
        >
          {/* Abstract Elegant Sweeping White Ribbons / Curves on the Right */}
          <div className="absolute top-0 right-0 w-full sm:w-2/3 lg:w-3/5 h-full pointer-events-none select-none">
            <svg
              viewBox="0 0 500 300"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full opacity-90"
            >
              <defs>
                <linearGradient id="curveFill1" x1="0%" y1="50%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.65" />
                </linearGradient>
                <linearGradient id="curveFill2" x1="0%" y1="50%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Upper sweeping curved petal */}
              <path
                d="M 230 160 C 290 160 380 90 480 30 L 500 0 L 380 0 C 310 50 250 140 230 160 Z"
                fill="url(#curveFill1)"
              />
              <path
                d="M 230 160 C 290 160 380 90 500 30"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M 380 0 C 320 60 270 130 230 160"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeOpacity="0.6"
              />

              {/* Lower sweeping curved ribbon */}
              <path
                d="M 290 195 C 360 195 440 215 500 240 L 500 300 L 410 300 C 370 270 320 220 290 195 Z"
                fill="url(#curveFill2)"
              />
              <path
                d="M 290 195 C 360 195 440 215 500 240"
                stroke="#ffffff"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M 410 300 C 370 260 325 215 290 195"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeOpacity="0.5"
              />
            </svg>
          </div>

          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            {/* Main Headline with Em-dash cadence */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-gray-900 tracking-tight leading-[1.18]">
              Transform your digital product—Smarter, Faster, More Scalable
            </h2>

            {/* Brand Blue Action Button with Light Blue Icon Block */}
            <div className="mt-8 sm:mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#0056B8] hover:bg-[#003366] text-white transition-all duration-200 pl-2.5 pr-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-md shadow-blue-600/25 group w-fit cursor-pointer"
              >
                {/* Light Blue Icon Square matching reference image */}
                <span className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center font-bold shrink-0 transition-transform group-hover:scale-105">
                  <ArrowUpRight size={17} strokeWidth={2.4} />
                </span>
                <span>Get in touch</span>
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default FooterCTA

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import craftsmanHands from '../../assets/craftsman-hands.jpg'
import partnershipHands from '../../assets/partnership-hands.jpg'
import blueChessKing from '../../assets/blue-chess-king.jpg'
import teamMaria from '../../assets/team-maria.png'

const WhyNemvol = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#f9f9fb] text-gray-900 border-t border-gray-200/60" id="why-nemvol">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Exact Luxury Style Matching Reference */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100/80 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.25em] mb-4">
            INNOVATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-gray-900 tracking-tight leading-tight">
            Why ambitious founders choose NEMVOL
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            Exceptional engineering and unparalleled craftsmanship that set the standard for modern digital platforms.
          </p>
        </div>

        {/* 4-Card Bento Grid Matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Card 1: Left Tall Card (Spans 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white border border-gray-200/70 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
          >
            {/* Top Inset Image */}
            <div className="w-full h-52 sm:h-56 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
              <img
                src={craftsmanHands}
                alt="Senior Engineering Craftsmanship"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Editorial Contrast Typography: Bold Black Words + Muted Gray */}
            <div className="my-6">
              <p className="text-lg sm:text-xl font-normal leading-snug text-gray-400">
                <strong className="font-extrabold text-gray-900">Handcrafted by senior architects</strong> to deliver{' '}
                <strong className="font-extrabold text-gray-900">timeless reliability</strong> and{' '}
                <strong className="font-extrabold text-gray-900">unmatched quality.</strong>
              </p>
            </div>

            {/* Pill Button: Brand Blue with White Circular Arrow */}
            <div className="pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#0056B8] hover:bg-[#003366] text-white transition-colors duration-200 pl-4 pr-1.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit group shadow-md shadow-blue-600/20"
              >
                <span>Explore Platform</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#0056B8] flex items-center justify-center font-bold transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={12} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Bento Group (Spans 8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6 justify-between">
            
            {/* Top Row: Cards 2 & 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
              
              {/* Card 2: Trusted By (Spans 7 Cols) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sm:col-span-7 bg-white border border-gray-200/70 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
              >
                {/* Photo: Partnership Handshake */}
                <div className="w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 mb-5">
                  <img
                    src={partnershipHands}
                    alt="Strategic Partnerships"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Editorial Typography */}
                <p className="text-base sm:text-lg font-normal text-gray-400 leading-snug">
                  <strong className="font-extrabold text-gray-900">Trusted by</strong> ambitious founders and high-growth brands{' '}
                  <strong className="font-extrabold text-gray-900">worldwide.</strong>
                </p>
              </motion.div>

              {/* Card 3: Metric Card with 3D Blue Chess King (Spans 5 Cols) */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="sm:col-span-5 bg-white border border-gray-200/70 rounded-2xl p-5 sm:p-6 flex items-center justify-between shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Metric Content */}
                <div className="max-w-[55%]">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight block">
                    100%
                  </span>
                  <p className="text-xs text-gray-400 font-normal leading-snug mt-1.5">
                    Full IP ownership & complete source code handover.
                  </p>
                </div>

                {/* 3D Blue Marble Chess King Image */}
                <div className="w-24 sm:w-28 h-32 sm:h-36 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={blueChessKing}
                    alt="Heritage & Ownership"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>

            </div>

            {/* Bottom Row: Card 4 (Spans Full 8 Columns) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-200/70 rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Left Editorial Copy */}
              <div className="md:w-3/5">
                <p className="text-xl sm:text-2xl font-normal text-gray-400 leading-snug">
                  <strong className="font-extrabold text-gray-900">Elevates product velocity and</strong>{' '}
                  <strong className="font-extrabold text-gray-900">transforms</strong> your vision into a{' '}
                  <strong className="font-extrabold text-gray-900">market-leading platform.</strong>
                </p>
              </div>

              {/* Right Visionary Portrait */}
              <div className="md:w-2/5 w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                <img
                  src={teamMaria}
                  alt="Visionary Leadership"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyNemvol

import { useState, useEffect } from 'react'
import { ChevronUp, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY_INFO } from '../../utils/constants'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredAction, setHoveredAction] = useState(null)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const whatsappNumber = COMPANY_INFO.phone
  const whatsappMessage = encodeURIComponent("Hi Nemvol, I'd like to talk about an MVP project.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="relative group"
            >
              <AnimatePresence>
                {hoveredAction === 'whatsapp' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#002752] text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-xl"
                  >
                    Chat with an MVP Strategist
                    <div className="absolute top-1/2 -translate-y-1/2 left-full w-2 h-2 bg-[#002752] rotate-45 -ml-1" />
                  </motion.div>
                )}
              </AnimatePresence>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredAction('whatsapp')}
                onMouseLeave={() => setHoveredAction(null)}
                className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-2xl shadow-xl shadow-green-500/20 hover:scale-110 transition-transform duration-300"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={28} />
              </a>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <AnimatePresence>
                {hoveredAction === 'top' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-xl"
                  >
                    Back to Top
                    <div className="absolute top-1/2 -translate-y-1/2 left-full w-2 h-2 bg-blue-600 rotate-45 -ml-1" />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={scrollToTop}
                onMouseEnter={() => setHoveredAction('top')}
                onMouseLeave={() => setHoveredAction(null)}
                className="flex items-center justify-center w-14 h-14 bg-white text-blue-600 rounded-2xl shadow-xl border border-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="Back to top"
              >
                <ChevronUp size={28} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BackToTop
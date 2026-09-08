import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight, Mail, Phone, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { COMPANY_INFO } from '../../utils/constants'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      items: [
        { name: 'Web Applications', desc: 'Scalable cloud-native platforms', href: '/services' },
        { name: 'Mobile Apps', desc: 'iOS & Android native development', href: '/services' },
        { name: 'UI/UX & Product Design', desc: 'High-conversion intuitive interfaces', href: '/services' },
        { name: 'MVP Development', desc: 'Rapid 8-12 week market validation', href: '/services' },
      ]
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
      hasDropdown: true,
      items: [
        { name: 'Case Studies', desc: 'Real products delivered with impact', href: '/portfolio' },
        { name: 'Client Success Stories', desc: 'Testimonials and metrics', href: '/portfolio' },
        { name: 'Technical Architecture', desc: 'Enterprise scalability benchmarks', href: '/portfolio' },
      ]
    },
    {
      name: 'About',
      href: '/about',
      hasDropdown: true,
      items: [
        { name: 'Company Story', desc: 'Our engineering mission & team ethos', href: '/about' },
        { name: 'Core Values', desc: 'Quality, velocity, and transparency', href: '/about' },
        { name: 'Strategic Partnerships', desc: 'Collaborating for long-term growth', href: '/about' },
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      hasDropdown: true,
      items: [
        { name: 'Tech Insights', desc: 'Modern software engineering breakdowns', href: '/blog' },
        { name: 'Product Guides', desc: 'Strategic tips for startups & scale-ups', href: '/blog' },
        { name: 'FAQ', desc: 'Common questions on timelines & pricing', href: '/faq' },
      ]
    },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Floating Island Navbar */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <nav className="bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-2xl shadow-[0_4px_25px_-4px_rgba(0,0,0,0.06)] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between relative">
            
            {/* Scroll Progress Bar tucked into the bottom of the pill */}
            <div className="absolute bottom-0 left-4 right-4 h-[2px] overflow-hidden rounded-full pointer-events-none">
              <motion.div
                className="h-full bg-blue-600 origin-left"
                style={{ scaleX }}
              />
            </div>

            {/* Left: Brand Logo & Uppercase Title */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="h-8 w-8 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/image.svg"
                  alt="Nemvol Logo"
                  className="w-full h-full object-contain"
                  width="32"
                  height="32"
                />
              </div>
              <span className="text-base sm:text-lg font-black tracking-[0.16em] uppercase text-gray-900 group-hover:text-blue-600 transition-colors">
                Nemvol
              </span>
            </Link>

            {/* Center: Navigation Links with Downward Chevron */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-6">
              <div className="flex items-center gap-1 xl:gap-2">
                {navigation.map((item) => {
                  const isItemActive = isActive(item.href)
                  const isHovered = activeDropdown === item.name

                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        to={item.href}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 group ${
                          isItemActive
                            ? 'text-blue-600 bg-blue-50/80 font-semibold'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/70'
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.hasDropdown && (
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${
                              isHovered ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-gray-700'
                            }`}
                          />
                        )}
                      </Link>

                      {/* Dropdown Menu on Desktop */}
                      <AnimatePresence>
                        {isHovered && item.hasDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[280px]"
                          >
                            <div className="bg-white/95 backdrop-blur-2xl border border-gray-200/80 rounded-2xl shadow-xl shadow-gray-900/10 p-2.5">
                              <div className="px-3 py-1.5 border-b border-gray-100 mb-1 flex items-center justify-between">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                  {item.name}
                                </span>
                                <Link
                                  to={item.href}
                                  className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                                >
                                  View all
                                  <ArrowRight size={11} />
                                </Link>
                              </div>

                              <div className="space-y-1">
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block px-3 py-2 rounded-xl text-left hover:bg-blue-50/60 transition-colors group/sub"
                                  >
                                    <div className="text-[13px] font-semibold text-gray-800 group-hover/sub:text-blue-600 flex items-center justify-between">
                                      <span>{subItem.name}</span>
                                      <ArrowRight
                                        size={12}
                                        className="opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-blue-600"
                                      />
                                    </div>
                                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                                      {subItem.desc}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right: BOOK A DEMO Pill Button */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
              >
                <span>BOOK A DEMO</span>
              </Link>
            </div>

            {/* Mobile Actions: Compact CTA + Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
              >
                BOOK A DEMO
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl hover:bg-gray-100 text-gray-800 transition-colors"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 220,
              }}
              className="fixed top-0 right-0 h-full w-full sm:w-88 bg-white shadow-2xl z-50 lg:hidden flex flex-col overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="h-8 w-8 relative flex-shrink-0">
                    <img
                      src="/image.svg"
                      alt="Nemvol Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-black tracking-[0.16em] uppercase text-gray-900">
                    Nemvol
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 p-6 space-y-4">
                <div className="space-y-1">
                  {navigation.map((item) => {
                    const isItemActive = isActive(item.href)
                    const isExpanded = activeDropdown === item.name

                    return (
                      <div key={item.name} className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between">
                          <Link
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex-1 py-2 text-base font-semibold transition-colors ${
                              isItemActive ? 'text-blue-600' : 'text-gray-800'
                            }`}
                          >
                            {item.name}
                          </Link>
                          {item.hasDropdown && (
                            <button
                              type="button"
                              onClick={() =>
                                setActiveDropdown(isExpanded ? null : item.name)
                              }
                              className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
                            >
                              <ChevronDown
                                size={18}
                                className={`transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180 text-blue-600' : ''
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Mobile Submenu */}
                        <AnimatePresence>
                          {isExpanded && item.hasDropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-3 py-1 space-y-2"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>

                {/* Secondary Actions in Drawer */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                  >
                    <span>BOOK A DEMO</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/70 space-y-3 text-xs text-gray-600">
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-blue-600" />
                  <span>nemvolltd@gmail.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-blue-600" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-200/60">
                  © 2026 Nemvol Ltd. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
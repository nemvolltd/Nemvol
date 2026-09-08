import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-[#002752] text-white relative overflow-hidden pt-14 sm:pt-16 lg:pt-20 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Newsletter on Left, Navigation & Socials on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 sm:pb-16">
          
          {/* Left Column (5 cols): Newsletter Subscription */}
          <div className="lg:col-span-5 max-w-md">
            <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight mb-4">
              Stay up to date with our newsletter
            </h3>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 flex items-center shadow-md border border-blue-100">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscribed ? "Thanks for subscribing!" : "Your email..."}
                  className="text-gray-900 text-xs sm:text-sm px-3.5 outline-none flex-1 bg-transparent placeholder:text-gray-400 font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#0056B8] hover:bg-[#003366] text-white px-5 py-2.5 rounded-lg sm:rounded-xl text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  {subscribed ? 'Subscribed' : 'Sign up'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column (7 cols): Link Columns & Social Badges */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:pl-8">
            
            {/* Column 1: Product */}
            <div>
              <h4 className="text-xs font-semibold text-blue-200/90 uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <Link to="/services" className="text-blue-100/70 hover:text-white transition-colors">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-blue-100/70 hover:text-white transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-blue-100/70 hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-blue-100/70 hover:text-white transition-colors">
                    Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-100/70 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="text-xs font-semibold text-blue-200/90 uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <Link to="/portfolio" className="text-blue-100/70 hover:text-white transition-colors">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-100/70 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-blue-100/70 hover:text-white transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-blue-100/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-blue-100/70 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Socials (White Rounded Square Badges Matching Reference) */}
            <div>
              <h4 className="text-xs font-semibold text-blue-200/90 uppercase tracking-wider mb-4">
                Socials
              </h4>
              <div className="flex items-center gap-2.5">
                {/* X / Twitter Badge */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="w-9 h-9 rounded-lg bg-white text-[#002752] hover:text-[#0056B8] flex items-center justify-center font-black text-sm hover:bg-blue-50 transition-colors shadow-xs"
                >
                  <span className="font-sans font-bold text-xs">𝕏</span>
                </a>

                {/* LinkedIn Badge */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white text-[#002752] hover:text-[#0056B8] flex items-center justify-center hover:bg-blue-50 transition-colors shadow-xs"
                >
                  <Linkedin size={16} fill="currentColor" strokeWidth={0} />
                </a>

                {/* GitHub Badge */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-lg bg-white text-[#002752] hover:text-[#0056B8] flex items-center justify-center hover:bg-blue-50 transition-colors shadow-xs"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Middle Line: Copyright on Left, Legal on Right */}
        <div className="pt-6 pb-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/70 font-normal">
          <div>
            © 2026 Nemvol. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-blue-200/70">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom Massive Brand Watermark matching CONCOURSE in reference image */}
        <div className="w-full select-none pointer-events-none overflow-hidden text-center pt-2">
          <span className="block font-black tracking-wider uppercase text-white/[0.08] text-[15vw] sm:text-[16vw] leading-[0.82] font-sans">
            NEMVOL
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
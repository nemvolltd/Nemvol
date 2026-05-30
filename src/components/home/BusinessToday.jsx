import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Instagram, Landmark, Bike, FileText, XCircle, AlertCircle, Clock } from 'lucide-react'

const ProblemNode = ({ icon: Icon, label, status, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    animate={{ 
      x: [0, Math.random() * 10 - 5, 0],
      y: [0, Math.random() * 10 - 5, 0]
    }}
    transition={{
      x: { duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut" },
      y: { duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut" }
    }}
    style={{ left: x, top: y }}
    className="absolute group"
  >
    <div className="relative p-5 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 flex items-center gap-4 min-w-[240px]">
      <div className="p-3 bg-red-50 text-red-500 rounded-2xl group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900 leading-tight">{label}</h4>
        <div className="flex items-center gap-1 mt-1">
          <AlertCircle size={12} className="text-red-400" />
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{status}</span>
        </div>
      </div>
    </div>
  </motion.div>
)

const BusinessToday = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative" id="the-problem">
      
      {/* Background Decorative Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
          
          {/* Left: Impactful Text */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              The Fragmented Reality
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1] tracking-tight mb-8"
            >
              What <br />
              business <br />
              <span className="text-blue-600 italic">feels like </span> <br />
              today.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-md mb-10 md:mb-12"
            >
              You're working too hard because your tools don't talk to each other. It's slow, messy, and you're losing money in the gaps.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-8 mt-12"
            >
              <div className="space-y-2">
                <XCircle className="text-red-500" size={24} />
                <h4 className="font-bold text-gray-900">Slow Work</h4>
                <p className="text-sm text-gray-500">Copy-pasting data between five different apps.</p>
              </div>
              <div className="space-y-2">
                <Clock className="text-red-500" size={24} />
                <h4 className="font-bold text-gray-900">Lost Time</h4>
                <p className="text-sm text-gray-500">Searching for info that should be in one place.</p>
              </div>
            </motion.div>
          </div>

          {/* Right: The "Chaos Dashboard" Interactive Visual */}
          <div className="relative h-[600px] w-full rounded-[3rem] bg-gray-50/50 border border-gray-100 overflow-hidden">
            {/* Center Core */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 z-20"
            >
              <div className="text-white font-black text-center text-xs leading-none">
                YOUR <br /> BUSINESS
              </div>
              {/* Pulsing rings */}
              <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping opacity-20" />
            </motion.div>

            {/* Floating Nodes of Fragmentation */}
            <ProblemNode 
              icon={MessageCircle} 
              label="WhatsApp Orders" 
              status="Lost in chats" 
              x="5%" 
              y="15%" 
              delay={0.1} 
            />
            <ProblemNode 
              icon={Instagram} 
              label="Instagram Marketing" 
              status="Unanswered DMs" 
              x="55%" 
              y="10%" 
              delay={0.2} 
            />
            <ProblemNode 
              icon={Landmark} 
              label="Bank Payments" 
              status="Manual Check" 
              x="10%" 
              y="45%" 
              delay={0.3} 
            />
            <ProblemNode 
              icon={Bike} 
              label="Delivery Tracking" 
              status="Call Rider" 
              x="50%" 
              y="75%" 
              delay={0.4} 
            />
            <ProblemNode 
              icon={FileText} 
              label="Manual Excel" 
              status="Human Error" 
              x="15%" 
              y="70%" 
              delay={0.5} 
            />

            {/* Connecting lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-10">
              <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="70%" y2="20%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="25%" y2="55%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="65%" y2="85%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BusinessToday

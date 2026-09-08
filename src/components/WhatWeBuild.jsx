import { motion } from 'framer-motion'
import { ArrowUpRight, Smartphone, Globe, Brain, Shield, Layout, ShoppingCart } from 'lucide-react'

const BuildCard = ({ title, description, icon: Icon, className, delay, dark = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative group overflow-hidden rounded-[2.5rem] p-8 flex flex-col justify-between border transition-all duration-500 ${
        dark 
          ? 'bg-[#002752] border-blue-900/60 text-white hover:bg-[#003366] shadow-xl shadow-blue-950/25' 
          : 'bg-white border-gray-100 text-gray-900 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5'
      } ${className}`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-2xl ${dark ? 'bg-white/10 text-white' : 'bg-blue-50 text-blue-600'}`}>
            <Icon size={24} />
          </div>
          <motion.div 
            whileHover={{ rotate: 45 }}
            className={`p-2 rounded-full border transition-colors ${dark ? 'border-white/20 group-hover:bg-white group-hover:text-[#002752]' : 'border-gray-100 group-hover:bg-blue-600 group-hover:text-white'}`}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className={`text-base leading-relaxed ${dark ? 'text-blue-100/75' : 'text-gray-500'}`}>
          {description}
        </p>
      </div>

      {/* Background Decorative Element */}
      <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${dark ? 'bg-blue-500' : 'bg-blue-600'}`} />
    </motion.div>
  )
}

const WhatWeBuild = () => {
  const categories = [
    {
      title: "Business Websites",
      description: "We build powerful websites that help you run your whole business online.",
      icon: Globe,
      className: "mb-6 break-inside-avoid",
      delay: 0,
      dark: true
    },
    {
      title: "Phone Apps",
      description: "Easy-to-use apps for iPhones and Android phones that your customers will love.",
      icon: Smartphone,
      className: "mb-6 break-inside-avoid",
      delay: 0.1
    },
    {
      title: "Smart Tools",
      description: "We add smart tech to your website to help you work faster and better.",
      icon: Brain,
      className: "mb-6 break-inside-avoid",
      delay: 0.2
    },
    {
      title: "Money & Payments",
      description: "Safe and simple ways for your business to take payments and send money.",
      icon: Shield,
      className: "mb-6 break-inside-avoid",
      delay: 0.4,
      dark: true
    },
    {
      title: "Online Shops",
      description: "Start selling your products online today with a shop that is easy to manage.",
      icon: ShoppingCart,
      className: "mb-6 break-inside-avoid",
      delay: 0.3
    },
    {
      title: "Business Reports",
      description: "See exactly how your business is growing with simple charts and numbers.",
      icon: Layout,
      className: "mb-6 break-inside-avoid",
      delay: 0.5
    }
  ]

  return (
    <section className="py-24 bg-white" id="what-to-build">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Build the Future
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              How can we <br /> 
              <span className="text-blue-700 italic">help you?</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-sm mb-2"
          >
            We build tools that make your business better. Pick what you need and let's get to work.
          </motion.p>
        </div>

        {/* Flow Grid (Content-Driven Layout) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {categories.map((cat, i) => (
            <div key={i} className="break-inside-avoid">
              <BuildCard 
                {...cat}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild

import { motion } from 'framer-motion'
import { Palette, Rocket, Code2, Settings, ArrowRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Section from '../ui/Section'

const productizedServices = [
  {
    icon: Palette,
    title: 'Discovery Sprint',
    targetCustomers: 'Pre-seed Founders & Startups',
    solutionOutline: "Find out if your idea is good. We design your user flows and write a clear build plan in 2 weeks. No coding yet.",
    deliverables: ['Clear Build Plan', 'Simple Wireframes', 'Market Check'],
    highlight: false
  },
  {
    icon: Rocket,
    title: 'MVP Express',
    targetCustomers: 'Founders & SMEs',
    solutionOutline: "Build your actual product and launch it to real users in 8 to 12 weeks. Only the features you really need.",
    deliverables: ['Working Web App', 'Launch-Ready Design', 'Accept Payments Today'],
    highlight: true
  },
  {
    icon: Settings,
    title: 'Launch & Grow Retainer',
    targetCustomers: 'Post-Launch Startups',
    solutionOutline: "We stay with you after launch. We look at user data, fix bugs, and add features to help you make money.",
    deliverables: ['Monthly Updates', 'Fast Bug Fixes', 'Ad & Sales Setup'],
    highlight: false
  },
  {
    icon: Code2,
    title: 'White-Label Dev',
    targetCustomers: 'Agencies & Studios',
    solutionOutline: "Need more developers? Use our team under your own brand name. We do the work, you take the credit.",
    deliverables: ['Full NDA Protection', 'Dedicated Developers', 'Direct Slack Access'],
    highlight: false
  }
]

const ServiceOfferings = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-gray-50/50">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-10 opacity-[0.015] pointer-events-none select-none uppercase font-black text-[10vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Productized <br /> Services
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              What We Deliver
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
            >
              Clear outcomes, <br />
              <span className="text-blue-700 italic">fixed scope.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-8">
              Forget hourly rates and surprise bills. We sell fixed outcomes, clear milestones, and guaranteed delivery times.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-200/50 px-8 py-4 text-base font-bold rounded-xl group">
                Start Discovery Sprint
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productizedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-500 group flex flex-col justify-between ${
                service.highlight
                  ? 'bg-blue-700 border-blue-700 text-white shadow-2xl shadow-blue-100/50'
                  : 'bg-white border-gray-100 shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:border-blue-100'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${
                    service.highlight ? 'bg-white/10 backdrop-blur-md' : 'bg-blue-50 group-hover:bg-blue-100/70'
                  } transition-colors duration-300`}>
                    <service.icon size={26} className={service.highlight ? 'text-white' : 'text-blue-700'} />
                  </div>
                  <div className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                    service.highlight ? 'bg-white/10 backdrop-blur-md text-white' : 'bg-gray-50 text-gray-500'
                  }`}>
                    <Users size={12} />
                    {service.targetCustomers}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl sm:text-3xl font-extrabold mb-4 tracking-tight ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-base leading-relaxed mb-8 font-medium ${service.highlight ? 'text-blue-50/90' : 'text-gray-500'}`}>
                  {service.solutionOutline}
                </p>
              </div>

              {/* Deliverables */}
              <div className={`space-y-3 pt-6 border-t border-dashed w-full block mt-auto relative z-10 ${
                service.highlight ? 'border-white/15' : 'border-gray-150/70'
              }`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${service.highlight ? 'text-blue-100/80' : 'text-gray-400'}`}>
                  What you get:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold ${
                        service.highlight
                          ? 'bg-white/10 text-white border border-white/15'
                          : 'bg-gray-50 text-gray-600 border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/25'
                      } transition-colors`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ServiceOfferings
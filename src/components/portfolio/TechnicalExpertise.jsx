import { motion } from 'framer-motion'
import { Smartphone, Globe, Cpu, Database, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import Button from '../ui/Button'

const techStack = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    highlight: 'Flutter & iOS/Android',
    description: 'We write one codebase that works beautifully on both iPhone and Android. This saves you time, keeps costs low, and launches your app twice as fast.'
  },
  {
    icon: Globe,
    title: 'Web Products',
    highlight: 'Next.js & React',
    description: 'We build websites that load instantly, rank high on Google, and work perfectly on any screen. It gives your users a smooth, premium feel.'
  },
  {
    icon: Cpu,
    title: 'Backend Systems',
    highlight: 'Node.js & Redis',
    description: 'We build strong systems to run your app behind the scenes. This ensures it stays fast and never slows down, even when thousands of users are chatting or buying.'
  },
  {
    icon: Database,
    title: 'Cloud & Security',
    highlight: 'AWS & PostgreSQL',
    description: 'We host your app on secure servers that never go down. Your user data is fully protected, encrypted, and backed up automatically every single day.'
  }
]

const TechnicalExpertise = () => {
  return (
    <Section background="none" className="py-24 md:py-32 relative overflow-hidden bg-blue-700">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.06] pointer-events-none select-none uppercase font-black text-[10vw] md:text-[12vw] whitespace-nowrap leading-none tracking-tighter text-white">
        Our Engine
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/15"
            >
              Our Tech Stack
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight"
            >
              The tools behind <br />
              <span className="text-white/90 italic">your success.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-lg md:text-xl text-blue-50 max-w-xl leading-relaxed mb-8 font-medium">
              We choose modern, robust, and industry-standard technologies so your product runs fast, scales easily, and stays fully secure.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white hover:bg-blue-50 !text-blue-700 px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 group">
                Let's Build Together
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-extrabold text-white leading-none">{item.title}</h3>
                    <span className="px-3 py-1 bg-white/10 rounded-lg text-[9px] font-bold text-blue-100 uppercase tracking-widest leading-none border border-white/5">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-blue-50/90 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TechnicalExpertise
import { motion } from 'framer-motion'
import { Target, Lightbulb, Heart, Eye } from 'lucide-react'
import Section from '../ui/Section'

const values = [
  {
    icon: Heart,
    title: 'End-Users First',
    description: 'We build everything for the people who will actually use your product. If they don\'t love it, we don\'t build it.'
  },
  {
    icon: Target,
    title: 'Fast & Safe',
    description: 'We launch quickly, but we never compromise on quality. We test every line of code to make sure your launch is smooth.'
  },
  {
    icon: Eye,
    title: '100% Honest',
    description: 'No hidden costs, no confusing tech speak. You see exactly what we see, and we write everything in plain English.'
  },
  {
    icon: Lightbulb,
    title: 'Founder Mindset',
    description: 'We treat your app, your budget, and your timeline as if they were our own. We win when you win.'
  }
]

const CoreValues = () => {
  return (
    <Section className="py-24 md:py-32 relative bg-white border-t border-gray-100">
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-10 opacity-[0.012] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Our Ethos
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
              Design Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
            >
              Principles that <br />
              <span className="text-blue-700 italic">guide us.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
              We engineer software with a strong focus on absolute excellence, direct transparency, and everyday usefulness.
            </p>
          </motion.div>
        </div>

        {/* 4-Card Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-xl shadow-gray-150/20 hover:shadow-2xl hover:border-blue-100/70 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-gray-50 text-blue-700 group-hover:bg-blue-50 group-hover:scale-105 transition-all duration-350">
                  <value.icon size={26} className="stroke-[2.5]" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                
                {/* Description */}
                <p className="text-gray-500 text-base leading-relaxed font-medium">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default CoreValues
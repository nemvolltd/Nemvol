import { motion } from 'framer-motion'
import Section from '../ui/Section'

const CompanyStory = () => {
  const pillars = [
    {
      title: 'Our Purpose',
      description: 'We exist to help you build great software so you can focus on growing your business.'
    },
    {
      title: 'Our Vision',
      description: 'To be the most trusted, simple, and founder-friendly software partner in the world.'
    },
    {
      title: 'Our Mission',
      description: 'To build real working products for startups on time, on budget, with zero stress.'
    }
  ]

  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-10 opacity-[0.012] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Our Core
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              The Nemvol Way
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-8"
            >
              We build to <br />
              <span className="text-blue-700 italic">empower you.</span>
            </motion.h2>

            <div className="space-y-6 text-gray-500 leading-relaxed text-lg md:text-xl max-w-xl font-medium">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Nemvol isn't just a development studio. We act as the technical co-founder you wish you had. We handle all the code, design, and product decisions so you can launch safely without engineering risks.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-6">
              {pillars.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  className="relative p-8 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:border-blue-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
                >
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-350">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-medium">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default CompanyStory
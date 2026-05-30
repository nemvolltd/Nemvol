import { motion } from 'framer-motion'
import Section from './ui/Section'

const StrategicPartnerships = () => {
  const categories = [
    { name: "Early Startups", sector: "Idea to MVP", logo: "SU", description: "Founders looking to validate ideas, raise capital, and launch their first working MVP." },
    { name: "Creative Agencies", sector: "Tech Partner", logo: "AG", description: "Design and marketing agencies looking for a trusted technical team to write great code." },
    { name: "Growing Brands", sector: "Software Scaling", logo: "GB", description: "Established brands looking to automate tasks, connect systems, and build custom web tools." },
    { name: "Local Businesses", sector: "Digital Setup", logo: "LB", description: "SMEs seeking to go digital, launch online bookings, or build professional software." }
  ]

  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-10 opacity-[0.012] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Nemvol Partners
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
              Our Partners
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
            >
              Who we <br />
              <span className="text-blue-700 italic">work with.</span>
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
              We build high-performance web and mobile software for teams at every stage of their business journey.
            </p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50/50 rounded-[2.5rem] p-8 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-blue-100/50 transition-all duration-500 text-center group flex flex-col justify-between h-full min-h-[360px]"
            >
              <div>
                {/* Logo Wrapper */}
                <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-6 shadow-lg shadow-blue-100 transition-transform group-hover:scale-105">
                  {partner.logo}
                </div>
                
                {/* Partner Name */}
                <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">{partner.name}</h3>
                
                {/* Sector */}
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-500 mb-4">{partner.sector}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed font-medium mt-auto">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default StrategicPartnerships
import { motion } from 'framer-motion'
import { Rocket, Building2, Users, Briefcase, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'

const clientSegments = [
  {
    id: 'founders',
    title: 'Early Founders',
    icon: Lightbulb,
    description: 'You have a great idea and need to build it fast to show users or get funding.',
    needs: ['Test the idea', 'Launch fast', 'Show investors'],
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'vc-backed',
    title: 'Startups with Funding',
    icon: Rocket,
    description: 'You need to move quickly, add new features, and keep code quality high.',
    needs: ['Grow quickly', 'Perfect code'],
    span: 'md:col-span-1'
  },
  {
    id: 'agencies',
    title: 'Other Agencies',
    icon: Users,
    description: 'You have too much client work and need extra developers to build under your brand.',
    needs: ['Private help', 'Clear timelines'],
    span: 'md:col-span-1'
  },
  {
    id: 'smes',
    title: 'Growing Businesses',
    icon: Briefcase,
    description: 'You want to automate manual work and build custom web apps to grow your sales.',
    needs: ['Save time', 'Web apps', 'Mobile apps'],
    span: 'md:col-span-1'
  },
  {
    id: 'corporate',
    title: 'Innovation Teams',
    icon: Building2,
    description: 'You are in a large company and want to test a new product idea quickly without standard corporate delays.',
    needs: ['Quick tests', 'Proof of concept'],
    span: 'md:col-span-1'
  }
]

const IndustryExpertise = () => {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-gray-50/50">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-10 opacity-[0.015] pointer-events-none select-none uppercase font-black text-[10vw] whitespace-nowrap leading-none tracking-tighter text-right">
        Our Clients
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              Who We Work With
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
            >
              Built for <br />
              <span className="text-blue-700 italic">ambitious teams.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-6">
              More structured and reliable than freelancers. Faster, leaner, and more friendly than giant software agencies.
            </p>
            <p className="text-base text-gray-400 italic font-medium">
              "The perfect sweet spot between boutique speed and enterprise reliability."
            </p>
          </motion.div>
        </div>

        {/* Client Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {clientSegments.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-[2rem] p-8 border border-gray-100/70 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group cursor-pointer ${segment.span}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gray-50 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <segment.icon size={22} className="text-gray-400 group-hover:text-blue-700 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {segment.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                {segment.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {segment.needs.map((need) => (
                  <span
                    key={need}
                    className="px-3.5 py-1.5 bg-gray-50 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-gray-100/50 group-hover:border-blue-50 transition-colors duration-300"
                  >
                    {need}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-blue-700 font-bold text-lg hover:gap-4 transition-all duration-300 group"
          >
            See if we're a fit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

export default IndustryExpertise
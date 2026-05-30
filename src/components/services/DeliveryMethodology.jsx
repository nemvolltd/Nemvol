import { motion } from 'framer-motion'
import Section from '../ui/Section'

const phases = [
  {
    step: '01',
    title: 'Plan',
    description: 'Understand first',
    details: 'We talk about your idea, look at your competitors, and agree on what to build. This keeps costs low.',
    deliverables: ['Competitor Check', 'Feature List', 'Timeline Map'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    )
  },
  {
    step: '02',
    title: 'Design',
    description: 'Draw the app',
    details: 'We draw what the app will look like. You click through it to see how it works before we write code.',
    deliverables: ['Sleek Wireframes', 'Visual Screens', 'Clickable Prototype'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    )
  },
  {
    step: '03',
    title: 'Build',
    description: 'Write the code',
    details: 'Our developers build your app. We show you our progress every week so there are no surprises.',
    deliverables: ['Clean Code', 'Working Database', 'Secure Setup'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Go live',
    details: 'We launch your app to real users, set up tracking, and make sure everything runs fast and secure.',
    deliverables: ['Fast Deployment', 'User Analytics', 'Secure Servers'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  },
  {
    step: '05',
    title: 'Grow',
    description: 'Get more sales',
    details: 'We look at how people use your app and make regular updates to get you more sales.',
    deliverables: ['App Updates', 'Bug Support', 'Ad Setups'],
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }
]

const DeliveryMethodology = () => {
  return (
    <Section background="white" className="py-24 md:py-32 relative">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.015] pointer-events-none select-none uppercase font-black text-[12vw] whitespace-nowrap leading-none tracking-tighter">
        Our Approach
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
              Methodology
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight"
            >
              Simple process, <br />
              <span className="text-blue-700 italic">proven results.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-16"
          >
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
              We break down the build process into 5 simple steps. You will always know what we are doing, when we will finish, and how much it costs.
            </p>
          </motion.div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg shadow-gray-200/10 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header (Icon and Step Number) */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      {phase.svg}
                    </div>
                    <span className="text-3xl font-black text-blue-100 group-hover:text-blue-200 transition-colors duration-300 leading-none">
                      {phase.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                    {phase.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="text-xs uppercase font-extrabold text-blue-500 tracking-wider mb-4">
                    {phase.description}
                  </div>

                  {/* Details */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
                    {phase.details}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="space-y-2 pt-4 border-t border-gray-50 mt-auto">
                  {phase.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-block mr-1.5 mb-1.5 px-2.5 py-1 bg-gray-50 group-hover:bg-blue-50/30 text-gray-500 group-hover:text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-gray-100/50 group-hover:border-blue-50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DeliveryMethodology
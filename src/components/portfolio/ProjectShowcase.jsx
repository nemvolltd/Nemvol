import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, X, Clock, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import { projects } from '../../data/projects'

// Map projects to Before/After transformation format
const getTransformationData = (project) => {
  const beforeAfterMap = {
    'Blynque': {
      before: {
        headline: 'The Challenge',
        points: [
          'No validated product yet',
          'Fierce market competition',
          'Heavy swipe fatigue',
          'Tough real-time needs'
        ]
      },
      after: {
        headline: 'The Outcome',
        points: [
          'Launched in 14 weeks',
          '10,000+ active users',
          '99.9% chat uptime',
          'High daily traction'
        ]
      }
    },
    'Comtranz Global': {
      before: {
        headline: 'The Challenge',
        points: [
          'Manual booking system',
          'Fragmented payment stack',
          'Low customer trust',
          'Inefficient cleaner match'
        ]
      },
      after: {
        headline: 'The Outcome',
        points: [
          'Launched in 10 weeks',
          '500+ weekly bookings',
          'Secure Stripe pay',
          '4.9/5 star average'
        ]
      }
    },
    'Lucis': {
      before: {
        headline: 'The Challenge',
        points: [
          'Losing image quality',
          'Slow gallery loading',
          'Manual client feedback',
          'Complex photo sharing'
        ]
      },
      after: {
        headline: 'The Outcome',
        points: [
          'Launched in 8 weeks',
          'Sub-1s loading speed',
          'Auto client approval',
          'High-res photo delivery'
        ]
      }
    }
  }
  return beforeAfterMap[project.title] || {
    before: { headline: 'The Challenge', points: ['Complex requirements'] },
    after: { headline: 'The Outcome', points: ['Successful delivery'] }
  }
}

const ProjectCard = ({ project }) => {
  const transformation = getTransformationData(project)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-xl shadow-gray-200/20 hover:shadow-2xl hover:border-blue-100/70 transition-all duration-500 flex flex-col justify-between h-full">
        <div>
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

            {/* Top Technologies Pills */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).filter(Boolean).map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold rounded-xl border border-white/15 uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            {/* Image Overlay Header */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                  {project.industry}
                </span>
                <span className="text-white/40">•</span>
                <div className="flex items-center gap-1 text-white/70 text-xs font-semibold">
                  <Clock size={12} />
                  {project.timeline}
                </div>
              </div>
              <h3 className="text-2xl font-black text-white leading-none">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8">
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
              {project.description}
            </p>

            {/* Before → After Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Challenge (Before) */}
              <div className="p-5 rounded-2xl bg-red-50/50 border border-red-100/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <X size={10} className="stroke-[3]" />
                  </div>
                  <span className="text-red-700 font-extrabold uppercase tracking-wider text-[10px]">
                    {transformation.before.headline}
                  </span>
                </div>
                <ul className="space-y-2">
                  {transformation.before.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-300 mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome (After) */}
              <div className="p-5 rounded-2xl bg-blue-50/30 border border-blue-100/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <span className="text-blue-700 font-extrabold uppercase tracking-wider text-[10px]">
                    {transformation.after.headline}
                  </span>
                </div>
                <ul className="space-y-2">
                  {transformation.after.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results Badges */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-dashed border-gray-100 mt-auto">
              {project.results.slice(0, 3).map((result, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100/50">
                  <Trophy size={11} className="text-blue-700" />
                  <span className="text-[10px] font-extrabold text-gray-600 uppercase tracking-wider">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="px-8 pb-8">
          <Link
            to={`/portfolio/${project.id}`}
            className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:gap-3 transition-all duration-300 group/link"
          >
            Read Full Case Study
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Startups', value: 'startup' },
    { label: 'Agencies', value: 'agency' },
    { label: 'SMEs', value: 'service' }
  ]

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter)

  return (
    <Section className="py-24 md:py-32 relative overflow-hidden bg-gray-50/50">
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-10 opacity-[0.012] pointer-events-none select-none uppercase font-black text-[12vw] md:text-[18vw] whitespace-nowrap leading-none tracking-tighter overflow-hidden">
        Case Studies
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              Featured Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-2"
            >
              Before → After <br />
              <span className="text-blue-700 italic">transformations.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
              Real products built for ambitious founders. Shipped on time, within budget, and validated by real users.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                selectedFilter === filter.value
                  ? 'bg-blue-700 border-blue-700 text-white shadow-lg shadow-blue-200/50'
                  : 'bg-white border-gray-150 text-gray-500 hover:bg-blue-50/50 hover:text-blue-700 hover:border-blue-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-white rounded-[2.5rem] border border-gray-150/60 p-12 shadow-xl shadow-gray-200/10 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight">
            Ready to build your own MVP?
          </h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto font-medium text-base leading-relaxed">
            We will help you go from a clean design plan to a live, polished product in 8 to 12 weeks.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

export default ProjectShowcase
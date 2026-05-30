import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag, CreditCard, Truck, Rocket, Check } from 'lucide-react'
import retailImg from '../../assets/ecosystem-retail.png'
import payImg from '../../assets/ecosystem-pay.png'
import shipImg from '../../assets/ecosystem-ship.png'
import startupImg from '../../assets/ecosystem-startup.png'

const EcosystemCard = ({ title, image, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative rounded-[2rem] overflow-hidden flex flex-col justify-end ${className}`}
  >
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

    {/* Content */}
    <div className="relative p-8 md:p-10 flex flex-col gap-2 w-full z-10">
      <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
        {title}
      </h4>
      <div className="flex items-center gap-2 text-white/90 text-sm md:text-base font-semibold group-hover:text-white transition-colors cursor-pointer w-fit">
        Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
)

const Ecosystem = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="ecosystem">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            The <span className="text-blue-600 italic">Nemvol</span> Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl"
          >
            Everything you need to run your business, all in one platform.
          </motion.p>
        </div>

        {/* Mixed Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:h-[700px]">
          
          {/* Retail - Tall Left (Spans 2 rows) */}
          <EcosystemCard 
            title="Nemvol Retail"
            image={retailImg}
            className="md:col-span-2 lg:col-span-6 lg:row-span-2 h-[400px] lg:h-auto"
            delay={0.1}
          />

          {/* Pay - Top Right 1 */}
          <EcosystemCard 
            title="Nemvol Pay"
            image={payImg}
            className="md:col-span-1 lg:col-span-3 h-[300px] lg:h-auto"
            delay={0.2}
          />

          {/* Shipco - Top Right 2 */}
          <EcosystemCard 
            title="Shipco"
            image={shipImg}
            className="md:col-span-1 lg:col-span-3 h-[300px] lg:h-auto"
            delay={0.3}
          />

          {/* Startup - Bottom Right (Wide) */}
          <EcosystemCard 
            title="Nemvol For Startups"
            image={startupImg}
            className="md:col-span-2 lg:col-span-6 h-[300px] lg:h-auto"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

export default Ecosystem

import { motion } from 'framer-motion'
import { Download, Check, ArrowRight } from 'lucide-react'
import Section from './ui/Section'
import FormInput from './contact/base/FormInput'
import FormSubmit from './contact/base/FormSubmit'
import FormStatus from './contact/base/FormStatus'
import useContactForm from './contact/hooks/useContactForm'

const LeadMagnet = () => {
    const { formData, isSubmitting, status, handleChange, handleSubmit } = useContactForm({
        email: '',
        subject: 'MVP Playbook Download'
    }, '/api/email/lead-magnet')

    return (
        <Section className="hidden md:block py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-[#002752] border border-blue-900/60 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-950/40">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -mr-40 -mt-40" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] -ml-20 -mb-20" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 md:p-20">
                        {/* Content Column */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8"
                            >
                                Free Technical Resource
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight"
                            >
                                Download the <br />
                                <span className="text-blue-500 italic">2026 MVP Playbook.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed font-medium"
                            >
                                Learn the exact framework we use to take startups from idea to validated product in under 10 weeks. Your roadmap for 2026 development.
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4 mb-10 md:mb-12 inline-block lg:block text-left"
                            >
                                {[
                                    'Ruthless prioritization framework',
                                    'Technical stack selection guide',
                                    'MVP to v1.0 scaling roadmap',
                                    'Bonus: Discovery Sprint template'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                                            <Check size={12} />
                                        </div>
                                        <span className="font-bold text-sm tracking-tight">{item}</span>
                                    </li>
                                ))}
                            </motion.ul>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                                <div className="flex flex-col sm:flex-row gap-4 items-end">
                                    <FormInput
                                        label="Work Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="flex-1 w-full"
                                        labelClassName="text-gray-400"
                                    />
                                    <FormSubmit
                                        isLoading={isSubmitting}
                                        text="Get Playbook"
                                        icon={Download}
                                        className="pt-0 w-full sm:w-auto"
                                    />
                                </div>

                                <FormStatus
                                    status={status}
                                    successMessage="Playbook sent to your email!"
                                    errorMessage="Something went wrong. Please try again."
                                />
                            </form>
                        </div>

                        {/* Visual Column - The "Book" (Hidden on Mobile) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -2, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', damping: 15, duration: 1 }}
                            className="hidden lg:flex justify-center relative"
                        >
                            <div className="relative group">
                                <img
                                    src="/assets/playbook-cover-2026.png"
                                    alt="2026 MVP Playbook Cover"
                                    className="w-full max-w-[400px] h-auto rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3"
                                />
                                {/* Ambient Glow */}
                                <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default LeadMagnet

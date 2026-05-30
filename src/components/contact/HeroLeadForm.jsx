import { motion } from 'framer-motion'
import { Calendar, CheckCircle2 } from 'lucide-react'
import FormInput from './base/FormInput'
import FormSelect from './base/FormSelect'
import FormSubmit from './base/FormSubmit'
import FormStatus from './base/FormStatus'
import useContactForm from './hooks/useContactForm'

const HeroLeadForm = ({ compact = false }) => {
    const { formData, isSubmitting, status, handleChange, handleSubmit } = useContactForm({
        name: '',
        email: '',
        projectType: '',
        message: ''
    }, '/api/email/contact')

    const projectOptions = [
        { value: 'new-mvp', label: 'New MVP Build' },
        { value: 'scaling', label: 'Scale Product' },
        { value: 'discovery', label: 'Discovery' }
    ]

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-green-100 text-center flex flex-col items-center justify-center min-h-[400px]"
            >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 font-black uppercase tracking-widest text-sm">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-500 font-medium">We'll reach out within 24 hours.</p>
            </motion.div>
        )
    }

    return (
        <div className={`bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-500/5 ${compact ? 'p-6' : ''}`}>
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Strategy Call</h3>
                <p className="text-sm text-gray-500 font-medium">Free 30-min discovery for your MVP.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    labelClassName="text-[10px]"
                />

                <FormInput
                    label="Work Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    labelClassName="text-[10px]"
                />

                <FormSelect
                    label="Project Type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    options={projectOptions}
                    labelClassName="text-[10px]"
                />

                <FormSubmit
                    isLoading={isSubmitting}
                    text="Claim Free Session"
                    icon={Calendar}
                    className="pt-2"
                />

                <FormStatus
                    status={status === 'error' ? 'error' : null}
                    successMessage=""
                    errorMessage="Submission failed. Please try again."
                />
            </form>
        </div>
    )
}

export default HeroLeadForm

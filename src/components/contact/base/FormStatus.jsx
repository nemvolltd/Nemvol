import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const FormStatus = ({ status, successMessage, errorMessage }) => {
    if (!status) return null

    const isSuccess = status === 'success'

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-3 p-4 rounded-2xl font-bold text-sm mt-4 border ${isSuccess
                    ? 'bg-green-50 border-green-100 text-green-700'
                    : 'bg-red-50 border-red-100 text-red-700'
                }`}
        >
            {isSuccess ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            {isSuccess ? successMessage : errorMessage}
        </motion.div>
    )
}

export default FormStatus

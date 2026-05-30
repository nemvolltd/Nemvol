import { useState } from 'react'

const API_BASE = import.meta.env.DEV ? (import.meta.env.VITE_API_URL || 'http://localhost:5000') : ''

const useContactForm = (initialData, endpoint = '/api/email/contact') => {
    const [formData, setFormData] = useState(initialData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState(null) // 'success' | 'error' | null
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus(null)

        try {
            const response = await fetch(`${API_BASE}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json()

            if (result.success) {
                setStatus('success')
                setErrorMessage('')
                setFormData(initialData)
            } else {
                setStatus('error')
                // Show specific validation errors from the server
                if (result.errors && result.errors.length > 0) {
                    setErrorMessage(result.errors.map(e => e.msg).join('. '))
                } else {
                    setErrorMessage(result.message || 'Submission failed. Please try again.')
                }
                console.error('Form submission error:', result)
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Could not connect to server. Please try again.')
            console.error('Submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        formData,
        isSubmitting,
        status,
        errorMessage,
        handleChange,
        handleSubmit,
        setFormData
    }
}

export default useContactForm

import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import emailRoutes from './routes/email.js'
import { adminLogin } from './middleware/auth.js'
import { apiLimiter } from './middleware/rateLimit.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// ─── Security & Parsing ─────────────────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }))
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// ─── Static Files (Admin Dashboard) ─────────────────────────────────────
app.use(express.static(path.join(__dirname, '..', 'public')))

// ─── CORS ────────────────────────────────────────────────────────────────
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173']
allowedOrigins.push(`http://localhost:${PORT}`) // Allow admin dashboard (same-origin)

app.use(cors({
    origin: (origin, callback) => {
        // 1. Allow if no origin (server-to-server, mobile apps, Postman)
        if (!origin) return callback(null, true)

        // 2. Allow if explicitly whitelisted
        if (allowedOrigins.includes(origin)) return callback(null, true)

        // 3. Fallback: Check if it's explicitly allowed in our list
        callback(null, false)
    },
    credentials: true
}))

// ─── Rate Limiting ───────────────────────────────────────────────────────
app.use('/api', apiLimiter)

// ─── Routes ──────────────────────────────────────────────────────────────
app.use('/api/email', emailRoutes)

// Admin login endpoint
app.post('/api/admin/login', adminLogin)

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    })
})

// ─── Admin Dashboard ─────────────────────────────────────────────────────
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'admin.html'))
})

// ─── 404 Handler ─────────────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' })
})

// ─── Error Handler ───────────────────────────────────────────────────────
app.use((err, req, res, _next) => {
    console.error('Server error:', err.stack)
    res.status(500).json({
        error: process.env.NODE_ENV === 'production'
            ? 'Internal server error'
            : err.message
    })
})

// ─── Start Server ────────────────────────────────────────────────────────
const startServer = async () => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`\n🚀 Nemvol API running on http://localhost:${PORT}`)
        console.log(`📧 Email API:  http://localhost:${PORT}/api/email`)
        console.log(`🔐 Admin:      http://localhost:${PORT}/admin`)
        console.log(`❤️  Health:     http://localhost:${PORT}/api/health\n`)
    })
}

startServer()

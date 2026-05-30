import jwt from 'jsonwebtoken'

// Simple API key auth for programmatic access
export const apiKeyAuth = (req, res, next) => {
    const apiKey = req.headers['x-api-key']

    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(401).json({ error: 'Unauthorized — invalid API key' })
    }

    next()
}

// JWT auth for admin dashboard
export const jwtAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized — no token provided' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.admin = decoded
        next()
    } catch {
        return res.status(401).json({ error: 'Unauthorized — invalid token' })
    }
}

// Admin login
export const adminLogin = (req, res) => {
    const { username, password } = req.body

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        const token = jwt.sign(
            { username, role: 'admin' },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )
        return res.json({ token, username })
    }

    return res.status(401).json({ error: 'Invalid credentials' })
}

import { useState, useEffect } from 'react'

const WP_API_URL = (import.meta.env.VITE_WORDPRESS_API_URL || 'https://nemvol.wordpress.com/wp-json/wp/v2').replace(/\/$/, '')

const stripHTML = (html = '') => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

const extractFirstImage = (html = '') => {
    const match = html.match(/<img[^>]+src="([^"]+)"/i)
    return match ? match[1] : ''
}

const normalizePost = (post) => {
    const title = post.title?.rendered || 'Untitled Post'
    const content = post.content?.rendered || ''
    const excerpt = stripHTML(post.excerpt?.rendered || '')
    const authors = post._embedded?.author || []
    const terms = post._embedded?.['wp:term'] || []
    const categories = terms.flat().filter((term) => term.taxonomy === 'category')
    const tags = terms.flat().filter((term) => term.taxonomy === 'post_tag')
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]

    const category = categories[0]?.name || 'Uncategorized'
    const image = featuredMedia?.source_url || extractFirstImage(content) || ''
    const author = authors[0]?.name || 'Nemvol Team'
    const wordCount = stripHTML(content).split(/\s+/).filter(Boolean).length
    const readTime = `${Math.max(1, Math.ceil(wordCount / 220))} min read`

    return {
        id: post.id,
        slug: post.slug,
        title,
        excerpt,
        content,
        date: post.date,
        author,
        image,
        category,
        tags: tags.map((tag) => tag.name),
        keywords: [],
        metaDescription: excerpt,
        readTime
    }
}

const fetchJSON = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status}`)
    }
    return res.json()
}

export const useBlogPosts = ({ categoryId = null, page = 1, limit = 10 } = {}) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            setError(null)

            try {
                const params = new URLSearchParams({ per_page: limit, page, _embed: 'true' })
                if (categoryId) params.set('categories', String(categoryId))

                const data = await fetchJSON(`${WP_API_URL}/posts?${params}`)
                setPosts(data.map(normalizePost))
            } catch (err) {
                console.error('Blog fetch error:', err)
                setError('Could not load blog posts')
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [categoryId, page, limit])

    return { posts, loading, error }
}

export const useBlogPost = (slug) => {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!slug) return

        const fetchPost = async () => {
            setLoading(true)
            setError(null)

            try {
                const params = new URLSearchParams({ slug, _embed: 'true' })
                const data = await fetchJSON(`${WP_API_URL}/posts?${params}`)

                if (Array.isArray(data) && data.length > 0) {
                    setPost(normalizePost(data[0]))
                } else {
                    setError('Post not found')
                }
            } catch (err) {
                console.error('Blog post fetch error:', err)
                setError('Could not load blog post')
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug])

    return { post, loading, error }
}

export const useBlogCategories = () => {
    const [categories, setCategories] = useState([{ id: null, name: 'All' }])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const params = new URLSearchParams({ per_page: 100, orderby: 'name', order: 'asc' })
                const data = await fetchJSON(`${WP_API_URL}/categories?${params}`)
                setCategories([{ id: null, name: 'All' }, ...data.map((category) => ({ id: category.id, name: category.name }))])
            } catch (err) {
                console.error('Categories fetch error:', err)
            }
        }

        fetchCategories()
    }, [])

    return categories
}

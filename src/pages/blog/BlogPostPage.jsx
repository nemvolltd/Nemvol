import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { useBlogPost } from '../../hooks/useBlog'
import SEO from '../../components/SEO'
import Section from '../../components/ui/Section'
import SectionSkeleton from '../../components/ui/SectionSkeleton'

const BlogPostPage = () => {
    const { slug } = useParams()
    const { post, loading, error } = useBlogPost(slug)

    if (loading) {
        return (
            <Section className="min-h-screen bg-white pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <SectionSkeleton />
                </div>
            </Section>
        )
    }

    if (error || !post) {
        return <Navigate to="/blog" replace />
    }

    return (
        <Section className="min-h-screen bg-white pt-32 pb-24">
            <SEO
                title={`${post.title} - Nemvol Blog`}
                description={post.metaDescription || post.excerpt}
                keywords={post.keywords}
                image={post.image}
            />

            <div className="max-w-4xl mx-auto px-6">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold mb-12 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    {/* Category Badge */}
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest rounded-full mb-6 border border-blue-100/50">
                        {post.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-400">
                        <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-blue-600" />
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={16} className="text-blue-600" />
                            {post.readTime}
                        </span>
                        <span className="text-gray-900">
                            By {post.author}
                        </span>
                    </div>
                </motion.div>

                {/* Featured Image */}
                {post.image && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 mb-12"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}

                {/* Content (Markdown rendered as basic HTML) */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
            prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50/30 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-lg prose-code:text-sm
            prose-li:text-gray-600
            prose-img:rounded-2xl prose-img:shadow-lg
          "
                >
                    {/* Simple markdown-to-HTML rendering */}
                    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
                </motion.article>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100"
                    >
                        <Tag size={16} className="text-gray-400 mt-1" />
                        {post.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                )}

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 p-8 md:p-12 bg-[#002752] border border-blue-900/50 rounded-[2rem] text-center shadow-2xl shadow-blue-950/20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to build your MVP?
                    </h3>
                    <p className="text-blue-100/75 mb-8 max-w-lg mx-auto">
                        Book a free 30-minute strategy call and let's turn your idea into a product.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Book Consultation →
                    </Link>
                </motion.div>
            </div>
        </Section>
    )
}

/**
 * Simple markdown to HTML renderer for blog content.
 * Handles: headings, paragraphs, bold, italic, links, lists, blockquotes, code blocks, horizontal rules, images.
 */
function renderMarkdown(md) {
    if (!md) return ''

    let html = md
        // Code blocks (must be before inline code)
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
        // Headings
        .replace(/^######\s+(.+)$/gm, '<h6>$1</h6>')
        .replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>')
        .replace(/^####\s+(.+)$/gm, '<h4>$1</h4>')
        .replace(/^###\s+(.+)$/gm, '<h3>$1</h3>')
        .replace(/^##\s+(.+)$/gm, '<h2>$1</h2>')
        .replace(/^#\s+(.+)$/gm, '<h1>$1</h1>')
        // Images
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Horizontal rules
        .replace(/^---$/gm, '<hr />')
        // Blockquotes
        .replace(/^>\s+(.+)$/gm, '<blockquote><p>$1</p></blockquote>')
        // Unordered lists
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        // Checkboxes
        .replace(/^- \[x\]\s+(.+)$/gm, '<li>✅ $1</li>')
        .replace(/^- \[ \]\s+(.+)$/gm, '<li>⬜ $1</li>')

    // Wrap consecutive <li> tags in <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, '<ul>$&</ul>')

    // Paragraphs — wrap standalone text lines
    html = html
        .split('\n\n')
        .map(block => {
            block = block.trim()
            if (!block) return ''
            if (block.startsWith('<')) return block
            return `<p>${block.replace(/\n/g, '<br />')}</p>`
        })
        .join('\n')

    return html
}

export default BlogPostPage

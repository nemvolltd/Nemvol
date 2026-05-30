import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import Section from '../ui/Section'
import LoadingSkeleton from '../ui/LoadingSkeleton'
import { useBlogPosts, useBlogCategories } from '../../hooks/useBlog'

const BlogGrid = () => {
  const categories = useBlogCategories()
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const { posts, loading, error } = useBlogPosts({ categoryId: selectedCategoryId })

  return (
    <Section className="py-20 bg-gray-50/50">
      {/* Category Filter */}
      <div className="mb-16">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id ?? 'all'}
              onClick={() => setSelectedCategoryId(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategoryId === category.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-600 border border-gray-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-2">{error}</p>
          <p className="text-sm text-gray-400">Blog posts will load once WordPress is configured and available.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`skeleton-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <LoadingSkeleton.Card />
              </motion.div>
            ))
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post._id || post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
              >
                {/* Image */}
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="h-56 relative overflow-hidden bg-gray-100">
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-blue-600" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-blue-600" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm font-medium">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold border border-blue-100">
                        {post.author?.charAt(0) || 'N'}
                      </div>
                      <span className="text-xs font-bold text-gray-900">{post.author || 'Nemvol Team'}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:gap-3 flex items-center gap-2 transition-all duration-300 font-bold text-sm"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {!loading && !error && posts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-gray-400 mb-4">No insights found in this category yet.</div>
          <button
            onClick={() => setSelectedCategory('All')}
            className="text-blue-600 font-bold hover:underline"
          >
            Show all posts
          </button>
        </motion.div>
      )}
    </Section>
  )
}

export default BlogGrid
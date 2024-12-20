import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '../components/footer'
import { ArrowRight, Calendar, User } from 'lucide-react'

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Marketing Tools for Startups in 2024",
    excerpt: "Discover the most effective marketing tools that can help your startup grow in 2024. We've curated a list of the best tools for social media management, email marketing, SEO, and more.",
    date: "2024-03-01",
    author: "Jane Doe",
    slug: "top-10-marketing-tools-2024",
    category: "Tools",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Digital Marketing",
    excerpt: "Explore the ways artificial intelligence is transforming the landscape of digital marketing. Learn about AI-powered chatbots, personalized content creation, and predictive analytics.",
    date: "2024-02-15",
    author: "John Smith",
    slug: "ai-revolutionizing-digital-marketing",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "The Power of Content Marketing for B2B Companies",
    excerpt: "Learn why content marketing is crucial for B2B companies and how to implement an effective strategy. Discover the types of content that resonate with B2B audiences and drive conversions.",
    date: "2024-01-30",
    author: "Emily Johnson",
    slug: "power-of-content-marketing-b2b",
    category: "Strategy",
    readTime: "10 min read"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] bg-[radial-gradient(circle_at_center,rgba(0,206,209,0.15),rgba(0,0,0,0)_50%)]">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 sm:py-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/getmorebacklinks.png"
                alt="Logo"
                width={532}
                height={132}
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-bold"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-white transition-colors text-sm sm:text-base font-bold"
            >
              Blog
            </Link>
            <Link 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-bold"
            >
              Pricing
            </Link>
            <button className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-[#00CED1] text-black hover:bg-[#00CED1]/90 transition-colors font-bold">
              Try Now
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Marketing Insights Blog
          </h1>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Stay updated with the latest trends, strategies, and tools in digital marketing.
          </p>
          
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden hover:border-[#00CED1] transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#00CED1] text-sm font-semibold px-3 py-1 bg-[#00CED1]/10 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-[#00CED1] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{post.author}</p>
                        <p className="text-gray-500 text-sm">{post.readTime}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-[#00CED1] hover:text-[#00CED1]/80 transition-colors flex items-center"
                    >
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-[#00CED1] text-black font-bold rounded-md hover:bg-[#00CED1]/90 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


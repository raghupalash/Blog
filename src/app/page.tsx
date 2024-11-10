import Layout from '@/components/Layout'
import { getAllPosts, getAboutContent } from '@/lib/markdown'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  
  // Add suffix to day
  const day = date.getDate()
  const suffix = ['th', 'st', 'nd', 'rd'][day % 10 > 3 ? 0 : (day % 100 - day % 10 != 10 ? day % 10 : 0)] || 'th'
  
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).replace(/\d+/, day + suffix)
}

export default async function Home() {
  const posts = await getAllPosts()
  const aboutContent = await getAboutContent()

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        {/* About section */}
        <section 
          className="mb-16 prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: aboutContent }}
        />

        {/* Blog posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Posts</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    <a 
                      href={`/blog/${post.slug}`} 
                      className="hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"  // Add these two
                    >
                      {post.title}
                    </a>
                  </h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(post.date)}
                </time>
                {post.description && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
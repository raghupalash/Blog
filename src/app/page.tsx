import Layout from '@/components/Layout'
import { getAllPosts, getAboutContent } from '@/lib/markdown'

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
          <h2 className="text-2xl font-bold mb-6">Blog Posts</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </a>
                </h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
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
import Layout from '@/components/Layout'
import { getPostBySlug } from '@/lib/markdown'

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  console.log('Slug received:', params.slug) // Debug log
  
  try {
    const post = await getPostBySlug(params.slug)
    
    return (
      <Layout>
        <article className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <time className="text-gray-500 mb-8 block">
            {post.date}
          </time>
          <div 
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </Layout>
    )
  } catch (error) {
    console.error('Error loading post:', error)
    return <div>Error loading post</div>
  }
}
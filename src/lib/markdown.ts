import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const postsDirectory = path.join(process.cwd(), 'content/posts')
const aboutFile = path.join(process.cwd(), 'content/about.md')

export type Post = {
  slug: string
  title: string
  date: string
  content: string
  description?: string
}

export async function getAboutContent() {
  const fileContents = fs.readFileSync(aboutFile, 'utf8')
  const { content } = matter(fileContents)
  return md.render(content)
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const post = await getPostBySlug(slug)
      return post
    })
  )

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content: md.render(content)
  }
}
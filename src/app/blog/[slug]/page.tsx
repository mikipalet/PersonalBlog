import { getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === params.slug)
  return {
    title: `${post?.title} – Miquel Palet`,
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <article className="space-y-2">
      <header className="space-y-2">
        <Link 
          href="/" 
          className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
        >
          ← Back
        </Link>
        <div className="space-y-1">
          <h1 className="text-4xl tracking-tight">{post.title}</h1>
          <time className="text-sm text-zinc-400 block">{post.date}</time>
        </div>
      </header>
      <div 
        className="prose prose-zinc prose-quoteless [&_h2]:mt-10 [&_h2]:mb-4"
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />
    </article>
  )
} 
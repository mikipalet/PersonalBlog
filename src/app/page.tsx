import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import profileImage from './profile.jpg'

export default function Home() {
  const posts = getAllPosts()

  return (
    <main className="space-y-20">
      {/* Profile Section */}
      <div className="space-y-5">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-zinc-100">
          <Image
            src={profileImage}
            alt="Profile"
            fill
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl tracking-tight">Miquel Palet</h1>
          <p className="text-zinc-600 max-w-xl">
            Entrepreneur and developer from Spain. My focus is on building companies that last.
            <br />
            Currently working on <a href="https://get-invoice.com" target="_blank" className="hover:text-zinc-800 underline">GetInvoice</a>, the AI invoice collection software.
          </p>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link href="https://x.com/paletmiki" target="_blank" className="text-zinc-500 hover:text-zinc-800">X</Link>
          <Link href="https://www.linkedin.com/in/miquel-palet/" target="_blank" className="text-zinc-500 hover:text-zinc-800">LinkedIn</Link>
          <Link href="https://github.com/mikipalet" target="_blank" className="text-zinc-500 hover:text-zinc-800">GitHub</Link>
          <Link href="mailto:miki.palet@gmail.com" target="_blank" className="text-zinc-500 hover:text-zinc-800">Email</Link>
        </nav>
      </div>

      {/* Writing Section */}
      <section className="space-y-4">
        <h2 className="text-xs text-zinc-500 uppercase tracking-widest">Writing</h2>
        <div className="border-b border-zinc-200"></div>
        <div className="space-y-2">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-zinc-600 tracking-tight group-hover:text-zinc-800 transition-colors">
                  {post.title}
                </h3>
                <time className="text-xs text-zinc-400">{post.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
} 
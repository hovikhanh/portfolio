import Link from "next/link";
import { getAllPosts } from "@/lib/content/blog";
import { formatDate } from "@/lib/utils/formatting";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20">
      <p className="font-mono text-accent">tail -n 3 ./blog</p>
      <h2 className="mt-2 text-2xl font-semibold">Writing</h2>

      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-foreground/60">
          No posts published yet — check back soon.
        </p>
      ) : (
        <ul className="mt-8 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <p className="font-mono text-xs text-foreground/50">
                  {formatDate(post.date)} · {post.readingTime}
                </p>
                <h3 className="mt-1 font-medium group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/70">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/blog"
        className="mt-8 inline-block font-mono text-sm text-accent hover:underline"
      >
        View all posts →
      </Link>
    </section>
  );
}

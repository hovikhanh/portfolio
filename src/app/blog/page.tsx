import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content/blog";
import { formatDate } from "@/lib/utils/formatting";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on security research, CTFs, and things I've learned.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20">
      <p className="font-mono text-accent">ls ./blog</p>
      <h1 className="mt-2 text-2xl font-semibold">Blog</h1>

      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-foreground/60">
          No posts published yet — check back soon.
        </p>
      ) : (
        <ul className="mt-8 space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-border pb-8">
              <Link href={`/blog/${post.slug}`} className="group block">
                <p className="font-mono text-xs text-foreground/50">
                  {formatDate(post.date)} · {post.readingTime}
                </p>
                <h2 className="mt-1 text-lg font-medium group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-foreground/70">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <p className="mt-2 font-mono text-xs text-foreground/50">
                    {post.tags.join(" · ")}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

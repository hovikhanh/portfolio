import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/content/blog";
import { formatDate } from "@/lib/utils/formatting";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-20">
      <p className="font-mono text-xs text-foreground/50">
        {formatDate(post.date)} · {post.readingTime}
      </p>
      <h1 className="mt-2 text-3xl font-semibold">{post.title}</h1>
      {post.tags && post.tags.length > 0 && (
        <p className="mt-3 font-mono text-xs text-accent">{post.tags.join(" · ")}</p>
      )}
      <div className="prose prose-invert mt-8 max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

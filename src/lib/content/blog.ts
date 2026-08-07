import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogFrontmatter, BlogPost, BlogPostSummary } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function isPublished(frontmatter: BlogFrontmatter): boolean {
  return process.env.NODE_ENV === "development" || !frontmatter.draft;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;

  if (!isPublished(frontmatter)) return null;

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: readingTime(content).text,
  };
}

export function getAllPosts(): BlogPostSummary[] {
  return getAllSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(toSummary);
}

function toSummary(post: BlogPost): BlogPostSummary {
  const { title, description, date, tags, draft, slug, readingTime: time } = post;
  return { title, description, date, tags, draft, slug, readingTime: time };
}

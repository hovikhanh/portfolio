export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  draft?: boolean;
}

export interface BlogPostSummary extends BlogFrontmatter {
  slug: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
}

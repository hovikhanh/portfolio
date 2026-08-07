import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { describe, expect, it } from "vitest";
import type { BlogFrontmatter } from "@/types/blog";

describe("blog frontmatter parsing", () => {
  it("parses the fixture post's frontmatter and content", () => {
    const raw = fs.readFileSync(
      path.join(process.cwd(), "tests/fixtures/sample-post.mdx"),
      "utf8",
    );
    const { data, content } = matter(raw);
    const frontmatter = data as BlogFrontmatter;

    expect(frontmatter.title).toBe("Sample Post");
    expect(frontmatter.tags).toEqual(["test"]);
    expect(content.trim()).toContain("Fixture content");
  });
});

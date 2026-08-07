import fs from "node:fs";
import path from "node:path";

const title = process.argv.slice(2).join(" ");
if (!title) {
  console.error("Usage: npm run new-post -- \"My Post Title\"");
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const blogDir = path.join(process.cwd(), "src/content/blog");
const filePath = path.join(blogDir, `${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`Post already exists: ${filePath}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const template = `---
title: "${title}"
description: ""
date: "${today}"
tags: []
draft: true
---

Write your post here.
`;

fs.mkdirSync(blogDir, { recursive: true });
fs.writeFileSync(filePath, template);
console.log(`Created ${filePath}`);

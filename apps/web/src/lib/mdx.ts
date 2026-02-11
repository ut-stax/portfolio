import fs from "fs";
import path from "path";

interface Frontmatter {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

interface BlogPost {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

// Blog posts directory
const blogDir = path.join(process.cwd(), "content/blog");

// Read MDX files from directory
export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const posts: BlogPost[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    // Simple frontmatter parser
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const frontmatter: Frontmatter = {
      title: "",
      excerpt: "",
      category: "Tutorial",
      tags: [],
      publishedAt: new Date().toISOString(),
      readTime: 5,
      featured: false,
    };

    if (frontmatterMatch) {
      const frontmatterContent = frontmatterMatch[1];
      frontmatterContent.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        const value = valueParts.join(":").trim();

        if (key && value) {
          switch (key.trim()) {
            case "title":
              frontmatter.title = value.replace(/^"|"$/g, "");
              break;
            case "excerpt":
              frontmatter.excerpt = value.replace(/^"|"$/g, "");
              break;
            case "category":
              frontmatter.category = value.replace(/^"|"$/g, "");
              break;
            case "tags":
              frontmatter.tags = JSON.parse(value);
              break;
            case "publishedAt":
              frontmatter.publishedAt = value.replace(/^"|"$/g, "");
              break;
            case "readTime":
              frontmatter.readTime = parseInt(value, 10);
              break;
            case "featured":
              frontmatter.featured = value === "true";
              break;
          }
        }
      });
    }

    // Remove frontmatter from content
    const markdownContent = content.replace(/^---\n[\s\S]*?\n---/, "");

    return {
      slug,
      frontmatter,
      content: markdownContent,
    };
  });

  // Sort by published date
  return posts.sort((a, b) => new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime());
}

// Get single blog post by slug
export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

// Get featured blog posts
export function getFeaturedPosts(): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter((post) => post.frontmatter.featured);
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter((post) => post.frontmatter.category === category);
}

// Search posts
export function searchPosts(query: string): BlogPost[] {
  const posts = getBlogPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().includes(lowerQuery) ||
      post.frontmatter.excerpt.toLowerCase().includes(lowerQuery) ||
      post.frontmatter.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

// Get all categories
export function getAllCategories(): string[] {
  const posts = getBlogPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));
  return Array.from(categories);
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

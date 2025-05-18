import config from "@/config/site.config";
import allAuthors from "@/data/author.json";
import allPosts from "@/data/posts.json";
import allVideoPosts from "@/data/video-posts.json";

export default async function sitemap() {
  const siteURL = config.siteURL;

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/videos',
    '/archive',
    '/author',
    '/category',
    '/privacy',
    '/terms',
    '/contact',
  ].map(route => ({
    url: `${siteURL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 1,
  }));

  // blog posts routes
  const posts = await allPosts;
  const blogPostRoutes = posts.map(post => ({
    url: `${siteURL}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  // blog posts routes
  const videoPosts = await allVideoPosts;
  const videoPostRoutes = videoPosts.map(post => ({
    url: `${siteURL}/videos/${post.slug}`,
    lastModified: new Date(post.frontmatter.date).toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  // author routes
  const authors = await allAuthors;
  const authorRoutes = authors.map(author => ({
    url: `${siteURL}/author/${author.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogPostRoutes, ...videoPostRoutes, ...authorRoutes]
}
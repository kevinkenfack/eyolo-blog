import config from "@/config/site.config";
import RSS from "rss";

export const generateRSSFeed = (posts) => {
  const site_url = config.siteURL;

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: config.logo,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Eyolo`,
  };

  const rss = new RSS(feedOptions);

  posts.forEach((post) => {
    rss.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${site_url}/blog/${post.slug}`,
      date: post.frontmatter.date,
      author: post.frontmatter.author,
      categories: [post.frontmatter.category],
      custom_elements: [
        { published: post.frontmatter.published ? true : false },
        { featured: post.frontmatter.featured ? true : false },
        { trending: post.frontmatter.trending ? true : false },
        { post_of_the_week: post.frontmatter.post_of_the_week ? true : false },
        { readingTime: post.frontmatter.readingTime },
      ],
    });
  });

  return rss.xml({ indent: true });
};

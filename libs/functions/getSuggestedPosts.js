export const getSuggestedPosts = (allPosts, slug, category) => {
  // Filter with Categories
  const filterPostsByCategory = allPosts.filter((item) =>
    item.frontmatter.category.includes(category)
  );

  // Get 3 Random Posts from all Posts
  const randomPosts = [];
  for (let i = 0; i < 4; i++) {
    const randomPost = allPosts[Math.floor(Math.random() * allPosts.length)];
    randomPosts.push(randomPost);
  }

  const mergedPosts = [...new Set([...filterPostsByCategory, ...randomPosts])];
  const suggestedPosts = mergedPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 3);

  return suggestedPosts;
};

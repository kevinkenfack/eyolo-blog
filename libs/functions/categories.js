export const popularCategories = (posts) => {
  const categoryCounts = {};

  // count the frequency of each category
  posts.forEach((post) => {
    const category = post.frontmatter.category;
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
  });

  // sort categories based on their counts in descending order
  const sortedCategories = Object.keys(categoryCounts).sort(
    (a, b) => categoryCounts[b] - categoryCounts[a]
  );

  // store unique category names and their counts
  const categorizedImages = sortedCategories.map((category) => {
    const postWithCategory = posts.find(
      (post) => post.frontmatter.category === category
    );

    const image = postWithCategory ? postWithCategory.frontmatter.image : null;

    return {
      name: category.split("-").join(" "),
      count: categoryCounts[category],
      image: image,
    };
  });

  return categorizedImages;
};

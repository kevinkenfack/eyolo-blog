export const isPostInArray = (post, array) =>
  array.some((item) => item.slug === post.slug);

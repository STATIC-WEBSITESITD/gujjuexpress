import blogsData from "./blogs.json";

export const blogs = blogsData;

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}

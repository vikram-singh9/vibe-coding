import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import { blogPosts, categories, getAuthorById, getCategoryById, getFeaturedPosts } from "@/data/blog-data";

export default function Home() {
  // Get featured posts
  const featuredPosts = getFeaturedPosts();
  const mainFeaturedPost = featuredPosts[0];
  const author = getAuthorById(mainFeaturedPost.authorId);
  const category = getCategoryById(mainFeaturedPost.categoryId);

  // Get recent posts (excluding the main featured post)
  const recentPosts = blogPosts
    .filter(post => post.id !== mainFeaturedPost.id)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container py-8 md:py-12">
        <FeaturedPost
          id={mainFeaturedPost.id}
          title={mainFeaturedPost.title}
          description={mainFeaturedPost.description}
          category={category?.name || ""}
          date={mainFeaturedPost.date}
          imageUrl={mainFeaturedPost.imageUrl}
          authorName={author?.name || ""}
          authorImageUrl={author?.imageUrl || ""}
        />
      </section>

      {/* Recent Posts Section */}
      <section className="container py-8 md:py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Recent Articles</h2>
          <Link href="/blog" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentPosts.map((post) => {
            const postAuthor = getAuthorById(post.authorId);
            const postCategory = getCategoryById(post.categoryId);
            return (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                category={postCategory?.name || ""}
                date={post.date}
                imageUrl={post.imageUrl}
                authorName={postAuthor?.name || ""}
                authorImageUrl={postAuthor?.imageUrl || ""}
              />
            );
          })}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container py-8 md:py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Browse by Category</h2>
          <Link href="/categories" className="text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const postCount = blogPosts.filter(post => post.categoryId === category.id).length;
            return (
              <CategoryCard
                key={category.id}
                name={category.name}
                slug={category.slug}
                imageUrl={category.imageUrl}
                postCount={postCount}
              />
            );
          })}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

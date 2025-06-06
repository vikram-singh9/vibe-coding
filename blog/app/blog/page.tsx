import { blogPosts, getAuthorById, getCategoryById } from "@/data/blog-data";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-muted-foreground">
          Discover the latest articles and insights on technology, lifestyle, travel, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => {
          const author = getAuthorById(post.authorId);
          const category = getCategoryById(post.categoryId);
          return (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              category={category?.name || ""}
              date={post.date}
              imageUrl={post.imageUrl}
              authorName={author?.name || ""}
              authorImageUrl={author?.imageUrl || ""}
            />
          );
        })}
      </div>
    </div>
  );
}
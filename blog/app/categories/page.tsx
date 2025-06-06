import { categories, blogPosts } from "@/data/blog-data";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Categories</h1>
        <p className="text-muted-foreground">
          Browse our articles by topic to find exactly what you're looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
}
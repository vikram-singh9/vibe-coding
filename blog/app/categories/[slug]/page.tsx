import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { categories, blogPosts, getAuthorById } from "@/data/blog-data";
import BlogCard from "@/components/BlogCard";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryPosts = blogPosts.filter(post => post.categoryId === category.id);

  return (
    <div className="container py-8 md:py-12">
      <div className="relative h-[300px] w-full mb-12 rounded-lg overflow-hidden">
        <Image 
          src={category.imageUrl} 
          alt={category.name} 
          fill 
          className="object-cover" 
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg">{categoryPosts.length} {categoryPosts.length === 1 ? 'Article' : 'Articles'}</p>
          </div>
        </div>
      </div>

      {categoryPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => {
            const author = getAuthorById(post.authorId);
            return (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                category={category.name}
                date={post.date}
                imageUrl={post.imageUrl}
                authorName={author?.name || ""}
                authorImageUrl={author?.imageUrl || ""}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">No articles found</h2>
          <p className="text-muted-foreground mb-6">There are no articles in this category yet.</p>
          <Link 
            href="/blog"
            className="text-primary hover:underline"
          >
            Browse all articles
          </Link>
        </div>
      )}
    </div>
  );
}
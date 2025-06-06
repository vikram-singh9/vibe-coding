import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, getAuthorById, getCategoryById } from "@/data/blog-data";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostById(params.id);
  
  if (!post) {
    notFound();
  }

  const author = getAuthorById(post.authorId);
  const category = getCategoryById(post.categoryId);

  return (
    <article className="container py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Category and Date */}
        <div className="flex items-center gap-2 mb-4 text-sm">
          <Link 
            href={`/categories/${category?.slug}`}
            className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs"
          >
            {category?.name}
          </Link>
          <span className="text-muted-foreground">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image 
              src={author?.imageUrl || ""} 
              alt={author?.name || ""} 
              fill 
              className="object-cover" 
            />
          </div>
          <div>
            <p className="font-medium">{author?.name}</p>
            <p className="text-sm text-muted-foreground">Author</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share and Navigation */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Share:</span>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
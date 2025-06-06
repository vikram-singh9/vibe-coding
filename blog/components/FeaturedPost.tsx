import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

interface FeaturedPostProps {
  
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  authorName: string;
  authorImageUrl: string;
}

export default function FeaturedPost({
  id,
  title,
  description,
  category,
  date,
  imageUrl,
  authorName,
  authorImageUrl,
}: FeaturedPostProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative h-[400px] w-full">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover" 
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mb-2">
            {category}
          </span>
          <span className="text-xs ml-2">{date}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-sm md:text-base mb-4 line-clamp-2 text-gray-200">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image 
                src={authorImageUrl} 
                alt={authorName} 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-sm">{authorName}</span>
          </div>
          <Button asChild variant="secondary">
            <Link href={`/blog/${id}`}>Read Article</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
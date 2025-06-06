import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';

interface CategoryCardProps {
  name: string;
  slug: string;
  imageUrl: string;
  postCount: number;
}

export default function CategoryCard({ name, slug, imageUrl, postCount }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-32 w-full">
          <Image 
            src={imageUrl} 
            alt={name} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h3 className="text-xl font-bold text-center">{name}</h3>
          <p className="text-sm">{postCount} {postCount === 1 ? 'post' : 'posts'}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
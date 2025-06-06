import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  authorName: string;
  authorImageUrl: string;
}

export default function BlogCard({
  id,
  title,
  description,
  category,
  date,
  imageUrl,
  authorName,
  authorImageUrl,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="text-xs">{date}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image 
              src={authorImageUrl} 
              alt={authorName} 
              fill 
              className="object-cover" 
            />
          </div>
          <span className="text-xs">{authorName}</span>
        </div>
        <Button asChild size="sm">
          <Link href={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
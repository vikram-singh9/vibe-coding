import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">Browse Articles</Link>
        </Button>
      </div>
    </div>
  );
}
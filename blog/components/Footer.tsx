import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/next.svg" alt="Blog Logo" width={100} height={24} className="dark:invert" />
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern blog platform built with Next.js and Tailwind CSS.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/technology" className="text-muted-foreground hover:text-foreground transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/categories/lifestyle" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/categories/travel" className="text-muted-foreground hover:text-foreground transition-colors">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/categories/food" className="text-muted-foreground hover:text-foreground transition-colors">
                  Food
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="mailto:contact@blog.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/Newsletter";

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Our Blog</h1>
        <p className="text-muted-foreground text-lg">
          A modern platform sharing insights on technology, lifestyle, travel, and food.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Our Team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            We believe in the power of sharing knowledge and experiences. Our mission is to create a platform where readers can find valuable insights, practical advice, and inspiring stories across various topics that matter in today's world.
          </p>
          <p className="text-muted-foreground mb-6">
            Whether you're looking to stay updated on the latest technology trends, discover new travel destinations, explore lifestyle improvements, or find delicious recipes, our blog aims to be your trusted source of information and inspiration.
          </p>
          <Button size="lg">Join Our Community</Button>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="John Doe"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-primary mb-2">Founder & Tech Editor</p>
            <p className="text-muted-foreground">
              John has over 10 years of experience in web development and is passionate about sharing his knowledge with the community.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Jane Smith"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-primary mb-2">Lifestyle & Food Editor</p>
            <p className="text-muted-foreground">
              Jane is a certified nutritionist and lifestyle coach who believes in the power of mindful living and sustainable choices.
            </p>
          </div>
          <div className="text-center">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Robert Johnson"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">Robert Johnson</h3>
            <p className="text-primary mb-2">Travel Editor</p>
            <p className="text-muted-foreground">
              Robert has visited over 50 countries and loves to share hidden gems and authentic travel experiences with our readers.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="m7 10 3 3 7-7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Quality Content</h3>
          <p className="text-muted-foreground">
            We are committed to creating well-researched, accurate, and valuable content that serves our readers' needs and interests.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Community Focus</h3>
          <p className="text-muted-foreground">
            We believe in building a community of like-minded individuals who can learn from each other and grow together.
          </p>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Transparency</h3>
          <p className="text-muted-foreground">
            We are transparent about our content creation process and any partnerships or affiliations we may have.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
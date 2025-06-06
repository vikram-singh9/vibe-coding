import { Button } from './ui/button';

export default function Newsletter() {
  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with our latest articles, news, and special offers. No spam, just valuable content.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
            <Button type="submit" className="sm:w-auto w-full">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

export const metadata = {};

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">We're glad you're here!</p>
        <Button asChild>
          <a href="https://example.com">Learn More</a>
        </Button>
      </div>
    </div>
  );
}

export default Page;
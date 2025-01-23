import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function About() {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4">About InteriorCraft</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating beautiful, functional spaces that inspire and delight since 2010.
            </p>
          </div>
  
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px]" data-aos="fade-right">
              <Image
                src="/about.jpg"
                alt="Our studio"
                fill
                className="object-cover rounded-lg"
                data-aos="fade-up"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, InteriorCraft has grown from a small design studio to a full-service interior design firm. Our passion for creating beautiful, functional spaces has driven us to work on hundreds of successful projects across the country.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that great design should be accessible to everyone. Our team of experienced designers and architects works closely with each client to understand their needs, preferences, and lifestyle, creating spaces that are both beautiful and practical.
              </p>
              <Button size="lg">Learn More</Button>
            </div>
          </div>
          </div>
    </div>
  );
}
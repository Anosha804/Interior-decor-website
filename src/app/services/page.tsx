import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TiArrowRightThick } from "react-icons/ti";

const services = [
  {
    title: "Interior Design",
    description: "Complete interior design services for residential and commercial spaces. Our expert designers will work with you to create a space that reflects your style and meets your needs.",
    image: "/services-1.jpg",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Project Management"]
  },
  {
    title: "Space Planning",
    description: "Optimize your space for both functionality and aesthetics. We create detailed floor plans and 3D visualizations to help you make the most of your space.",
    image: "/services-2.jpg",
    features: ["Floor Plans", "Traffic Flow Analysis", "Furniture Layout", "3D Visualization"]
  },
  {
    title: "Furniture Selection",
    description: "Let us help you choose the perfect furniture pieces for your space. We work with top manufacturers to provide high-quality, stylish furniture that fits your budget.",
    image: "/services-3.jpg",
    features: ["Custom Furniture", "Retail Sourcing", "Budget Planning", "Installation"]
  },
  {
    title: "Color Consultation",
    description: "Create the perfect atmosphere with our professional color consultation services. We'll help you choose colors that complement your space and create the desired mood.",
    image: "/services-4.jpg",
    features: ["Color Psychology", "Paint Selection", "Material Coordination", "Lighting Integration"]
  }
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your space with our professional interior design services. We offer comprehensive solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden" data-aos="fade-up">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <TiArrowRightThick className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
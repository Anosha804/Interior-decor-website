import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';



const Hero = () => {
    return (
        <div>
          {/* Hero Section */}
          <section className="relative h-[90vh] flex items-center">
            <Image
              src="/hero.jpg"
              alt="Modern interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white" data-aos="fade-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Space</h1>
              <p className="text-xl mb-8 max-w-2xl">Create the home of your dreams with our expert interior design services and curated collection of furniture.</p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>
          </div>
          )
          }

export default Hero
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";


const products = [
    {
      id: 1,
      name: "Modern Sofa",
      category: "Living Room",
      price: "$1,299",
      image: "/product-1.jpg"
    },
    {
      id: 2,
      name: "Dining Table",
      category: "Dining Room",
      price: "$899",
      image: "/product-2.jpg"
    },
    {
      id: 3,
      name: "Accent Chair",
      category: "Living Room",
      price: "$499",
      image: "/product-3.jpg"
    },
    {
      id: 4,
      name: "Floor Lamp",
      category: "Lighting",
      price: "$199",
      image: "/product-4.jpg"
    },
    {
      id: 5,
      name: "Coffee Table",
      category: "Living Room",
      price: "$399",
      image: "/product-5.jpg"
    },
    {
      id: 6,
      name: "Bed Frame",
      category: "Bedroom",
      price: "$899",
      image: "/product-6.jpg"
    },
    {
      id: 7,
      name: "Bookshelf",
      category: "Storage",
      price: "$299",
      image: "/product-7.jpg"
    },
    {
      id: 8,
      name: "Desk",
      category: "Office",
      price: "$499",
      image: "/product-8.jpg"
    }
  ];

  const categories = ["All", "Living Room", "Dining Room", "Bedroom", "Office", "Lighting", "Storage"];

  export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
  
    const filteredProducts = products.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">Our Products</h1>
  
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative" data-aos="fade-up">
              <IoSearchOutline className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2" data-aos="fade-up">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
  
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-primary font-semibold">{product.price}</span>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
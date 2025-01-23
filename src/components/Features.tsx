import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Modern Sofa",
                price: "$1,299",
                image: "/product-1.jpg"
              },
              {
                name: "Dining Table",
                price: "$899",
                image: "/product-2.jpg"
              },
              {
                name: "Accent Chair",
                price: "$499",
                image: "/product-3.jpg"
              },
              {
                name: "Floor Lamp",
                price: "$199",
                image: "/product-4.jpg"
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
    </div>
    </div>
  )
}

export default Features
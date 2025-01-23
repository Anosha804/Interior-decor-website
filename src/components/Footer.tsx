import React from "react";


const Footer= () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">InteriorCraft</h3>
              <p className="text-gray-400">
                Transforming spaces into beautiful, functional environments that inspire and delight.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Interior Design</li>
                <li className="text-gray-400">Space Planning</li>
                <li className="text-gray-400">Color Consultation</li>
                <li className="text-gray-400">Furniture Selection</li>
                <li className="text-gray-400">Project Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>XYZ Street</li>
                <li>Karchi, Pakistan</li>
                <li>Phone: +92 331-2234555</li>
                <li>Email: info@interiorcraft.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} InteriorCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer
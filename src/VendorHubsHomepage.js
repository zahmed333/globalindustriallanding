import React from 'react';
import { Search, ShoppingCart, User, ChevronRight, Star, Heart } from 'lucide-react';

const VendorHubsHomepage = () => {
  const industries = [
    { name: 'WAREHOUSE', image: '/api/placeholder/300/200' },
    { name: 'MANUFACTURING', image: '/api/placeholder/300/200' },
    { name: 'CONSTRUCTION', image: '/api/placeholder/300/200' },
    { name: 'EDUCATION', image: '/api/placeholder/300/200' },
    { name: 'HEALTHCARE', image: '/api/placeholder/300/200' },
    { name: 'HOSPITALITY', image: '/api/placeholder/300/200' },
    { name: 'RETAIL', image: '/api/placeholder/300/200' },
    { name: 'PUBLIC SECTOR', image: '/api/placeholder/300/200' },
  ];

  const newProducts = [
    { name: 'DirectFactory™ Indoor/Outdoor Flexible Duct', price: 125.95, image: '/api/placeholder/200/200', model: 'DF604190', rating: 0, shipping: 'Ships within 1 Business Day' },
    { name: 'DirectFactory™ Safety Floor Curb', price: 75.95, image: '/api/placeholder/200/200', model: 'DF670812', rating: 0, shipping: 'Available on or around 07/29/2024' },
    { name: 'DirectFactory™ Urban 6\' Plastic Picnic Table', price: 849.15, originalPrice: 999.00, image: '/api/placeholder/200/200', model: 'DF348136', rating: 0, shipping: 'Ships within 1 Business Day' },
    { name: 'DirectFactory™ Universal Adjustable Forklift Seat', price: 179.95, image: '/api/placeholder/200/200', model: 'DF293275', rating: 4, reviewCount: 2, shipping: 'Ships within 1 Business Day' },
    { name: 'DirectFactory™ Universal Ergonomic Forklift Seat', price: 225.95, image: '/api/placeholder/200/200', model: 'DF293276', rating: 0, shipping: 'Ships within 1 Business Day' },
  ];

  const categories = ['Door Hardware', 'Electrical & Clocks', 'Office Supplies', 'Medical Supplies', 
    'Industrial Equipment', 'Safety Gear', 'Packaging Materials', 'Cleaning Supplies'];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-4">DirectFactory</h1>
            <span>Sales: 1.888.978.7759</span>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="hover:underline">Browse History</a>
            <a href="#" className="hover:underline">Customer Support</a>
            <a href="#" className="hover:underline">Chat</a>
            <a href="#" className="hover:underline">Catalog</a>
            <a href="#" className="hover:underline">Knowledge Center</a>
          </nav>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-grow mr-4">
            <input type="text" placeholder="Enter a keyword or part number" className="w-full p-2 border rounded-md" />
          </div>
          <button className="bg-red-600 text-white p-2 rounded-md"><Search /></button>
          <button className="ml-4 p-2 border rounded-md">Track Order</button>
          <button className="ml-4 p-2 border rounded-md flex items-center">
            <User className="mr-2" /> Sign In/Register
          </button>
          <button className="ml-4 p-2 border rounded-md flex items-center">
            <ShoppingCart className="mr-2" /> My Cart
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <button className="font-bold">SHOP ALL CATEGORIES</button>
          <button>SHOP BY INDUSTRY</button>
          <button>EXCLUSIVE BRANDS</button>
          <button>NEW PRODUCTS</button>
          <button>EXPLORE SOLUTIONS</button>
          <button>CATALOG</button>
          <button>DEALS</button>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative bg-gray-800 text-white">
        <img src="/api/placeholder/1200/400" alt="Factory workers" className="w-full object-cover h-64 rounded-md" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center rounded-md">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">DIRECT FROM FACTORIES TO YOU</h2>
            <p className="text-xl mb-4">Quality Products at Competitive Prices</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md">Learn More</button>
          </div>
        </div>
      </div>

      {/* Industry Solutions Section */}
      <div className="bg-red-600 text-white p-4 mt-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">SOLUTIONS FOR YOUR INDUSTRY. WE CAN SUPPLY THAT.®</h2>
          <div className="grid grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div key={industry.name} className="relative rounded-md overflow-hidden">
                <img src={industry.image} alt={industry.name} className="w-full h-40 object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 w-full">
                  <p className="text-sm font-bold">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="container mx-auto py-8">
        <h3 className="text-2xl font-bold mb-4">Explore Our Product Categories</h3>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category} className="border p-4 text-center rounded-md">
              <div className="text-4xl mb-2">🏭</div>
              <p>{category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Products Section */}
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">New Products</h2>
        <div className="grid grid-cols-5 gap-4">
          {newProducts.map((product) => (
            <div key={product.name} className="border p-4 rounded-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2 rounded-md" />
              <p className="text-sm font-bold mb-1">{product.name}</p>
              <p className="text-xs text-gray-600 mb-1">Model #: {product.model}</p>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
                ))}
                {product.reviewCount && <span className="text-xs ml-1">({product.reviewCount})</span>}
              </div>
              <Heart size={16} className="mb-1 text-gray-400" />
              <div className="flex justify-between items-center mb-1">
                <select className="border text-sm p-1 rounded-md">
                  <option>1</option>
                </select>
                <button className="bg-red-600 text-white text-sm py-1 px-4 rounded-md">Add</button>
              </div>
              <p className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
              )}
              <p className="text-xs text-gray-600">{product.shipping}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Registration Call-to-Action */}
      <div className="bg-blue-800 text-white py-8">
        <div className="container mx-auto flex">
          <div className="w-1/3 pr-8">
            <h2 className="text-2xl font-bold mb-2">New customer? Register now. It is fast and easy.</h2>
            <p className="mb-4">Sign in for a personalized experience</p>
            <button className="bg-white text-blue-800 py-2 px-4 rounded-md font-bold">Sign in</button>
            <div className="mt-4">
              <span className="mr-2">New Customer?</span>
              <a href="#" className="underline">Start here</a>
            </div>
          </div>
          <div className="w-1/3 px-8 border-l border-r border-blue-700">
            <h3 className="text-xl font-bold mb-4">Account Benefits:</h3>
            <ul className="list-disc pl-5">
              <li>Enjoy a faster and more personalized checkout</li>
              <li>Manage your payment preferences, returns, & cancellations</li>
              <li>View your order history with easy order tracking</li>
              <li>Create and manage multiple order lists, auto re-orders, & subscriptions</li>
              <li>Get insights into savings and spending anytime</li>
              <li>Receive more personalized product recommendations</li>
              <li>Manage your communication preferences</li>
              <li>Convert your quote to an order</li>
            </ul>
          </div>
          <div className="w-1/3 pl-8">
            <img src="/api/placeholder/400/300" alt="Happy customer" className="w-full h-64 object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorHubsHomepage;
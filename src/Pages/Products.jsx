import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function ProductCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  // بيانات المنتجات
  const allProducts = [
    // الصفحة الأولى
    [
      {
        id: 1,
        name: 'Compact Mini Plant Pot For Desk Or Shelf Display',
        price: 37.00,
        image: '🌿',
        rating: 0
      },
      {
        id: 2,
        name: 'Round Wooden Coffee Table With Marble Top Design',
        price: 40.00,
        image: '🪑',
        rating: 0
      },
      {
        id: 3,
        name: 'Wooden Basket With Clean Towels For Home Decor',
        price: 25.00,
        oldPrice: 30.00,
        discount: '-16%',
        image: '🧺',
        rating: 0
      },
      {
        id: 4,
        name: 'Small Decorative Mini Plant Pot For Home Decor',
        price: 37.00,
        image: '🌱',
        rating: 0
      },
      {
        id: 5,
        name: 'Miniature Plant Pot For Stylish Indoor Decoration',
        price: 34.00,
        image: '🪴',
        rating: 0
      }
    ],
    // الصفحة الثانية
    [
      {
        id: 6,
        name: 'Solid Wood Plant Stand For Indoor Display',
        price: 12.00,
        image: '🎋',
        rating: 0
      },
      {
        id: 7,
        name: 'Modern Ceramic Vase With Geometric Design',
        price: 45.00,
        image: '🏺',
        rating: 0
      },
      {
        id: 8,
        name: 'Decorative Wall Mirror With Gold Frame',
        price: 55.00,
        image: '🪞',
        rating: 0
      },
      {
        id: 9,
        name: 'Luxury Scented Candle Set',
        price: 28.00,
        oldPrice: 35.00,
        discount: '-20%',
        image: '🕯️',
        rating: 0
      },
      {
        id: 10,
        name: 'Handwoven Cotton Throw Blanket',
        price: 42.00,
        image: '🧶',
        rating: 0
      }
    ],
    // الصفحة الثالثة
    [
      {
        id: 11,
        name: 'Vintage Style Table Lamp',
        price: 38.00,
        image: '💡',
        rating: 0
      },
      {
        id: 12,
        name: 'Bamboo Storage Organizer Box',
        price: 22.00,
        image: '📦',
        rating: 0
      },
      {
        id: 13,
        name: 'Elegant Crystal Glass Decanter',
        price: 65.00,
        image: '🍷',
        rating: 0
      },
      {
        id: 14,
        name: 'Rustic Wooden Wall Shelf',
        price: 48.00,
        image: '📚',
        rating: 0
      },
      {
        id: 15,
        name: 'Minimalist Clock With Metal Frame',
        price: 32.00,
        image: '⏰',
        rating: 0
      }
    ]
  ];

  const totalPages = allProducts.length;
  const currentProducts = allProducts[currentPage];

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              HANDPICKED ELEGANCE FHJNJYWZST
            </h1>
            <div className="h-px w-20 bg-gray-300"></div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Timeless Elegance For Your Home
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Page Indicators */}
            <div className="flex gap-2">
              {allProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentPage ? 'bg-gray-900 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Products Row */}
        <div className="grid grid-cols-5 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative bg-gray-50 rounded-lg aspect-square flex items-center justify-center mb-4 overflow-hidden">
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                    {product.discount}
                  </span>
                )}
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gray-200 text-gray-200"
                  />
                ))}
              </div>

              {/* Product Name */}
              <h3 className="text-sm text-gray-700 mb-3 leading-relaxed min-h-10 group-hover:text-gray-900 transition-colors">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
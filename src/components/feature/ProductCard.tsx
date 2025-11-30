
import { useState } from 'react';

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  link: string;
}

export default function ProductCard({
  image,
  category,
  title,
  price,
  originalPrice,
  discount,
  link,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      data-product-shop
    >
      {/* Image Container */}
      <div className="relative w-full h-64">
        <img
          src={image}
          alt={title}
          title={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Discount Badge - Top Left */}
        <div className="absolute top-3 left-3 bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          -{discount}%
        </div>
        
        {/* Heart Icon - Top Right */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
          aria-label="Ajouter aux favoris"
          aria-pressed={isFavorite}
        >
          <i 
            className={`${isFavorite ? 'ri-heart-fill' : 'ri-heart-line'} text-xl`}
            style={{ color: isFavorite ? '#ec4899' : '#6b7280' }}
          ></i>
        </button>
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
          {category}
        </p>
        
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mb-auto line-clamp-2">
          {title}
        </h3>
        
        {/* Price Section */}
        <div className="flex items-center gap-2 mb-3 mt-3">
          <span className="text-2xl font-bold text-gray-900">
            {price.toFixed(2)}€
          </span>
          <span className="text-base text-gray-400 line-through">
            {originalPrice.toFixed(2)}€
          </span>
        </div>
        
        {/* Full Width Button */}
        <a
          href={link}
          className="w-full bg-gray-900 text-white text-center py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          aria-label={`Voir le produit ${title}`}
        >
          Voir le produit
          <i className="ri-arrow-right-up-line text-lg"></i>
        </a>
      </div>
    </div>
  );
}

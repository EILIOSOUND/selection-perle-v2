import { useState } from 'react';

interface ProductImageGalleryProps {
  title: string;
  mainImage: string;
  images?: string[];
}

export default function ProductImageGallery({
  title,
  mainImage,
  images = [],
}: ProductImageGalleryProps) {
  const cleanImages = Array.from(
    new Set([mainImage, ...images].filter(Boolean))
  ).slice(0, 6);

  const [selectedImage, setSelectedImage] = useState(cleanImages[0] || mainImage);

  return (
    <div>
      <div className="w-full h-64 overflow-hidden bg-gray-50">
        <img
          src={selectedImage}
          alt={title}
          title={title}
          className="product-image w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {cleanImages.length > 1 && (
        <div className="flex gap-2 p-3 overflow-x-auto bg-white">
          {cleanImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`w-12 h-12 shrink-0 rounded-lg overflow-hidden border ${
                selectedImage === image ? 'border-pink-500' : 'border-gray-200'
              }`}
              aria-label={`Voir l’image ${index + 1} de ${title}`}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-contain object-center bg-white p-1"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
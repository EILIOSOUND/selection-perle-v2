import { useState, useEffect } from 'react';

interface Product {
  title: string;
  img: string;
  link: string;
}

export default function DynamicProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/products.json')
      .then(res => {
        if (!res.ok) throw new Error('Erreur de chargement');
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Produits dynamiques
            </h2>
            <p className="text-gray-600 text-base">
              Chargement en cours...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <p className="text-red-500">Erreur : {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Sélection dynamique
          </h2>
          <p className="text-gray-600 text-base">
            Produits chargés automatiquement depuis products.json
          </p>
        </div>

        {/* Products Grid */}
        <div id="product-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden bg-gray-50">
                <img 
                  src={product.img} 
                  alt={product.title}
                  title={product.title}
                  className="product-image w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="product-title text-base font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3rem]">
                  {product.title}
                </h3>
                
                {/* Button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="product-button w-full bg-pink-500 text-white text-center py-3 rounded-xl font-medium hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  aria-label={`Voir le produit ${product.title}`}
                >
                  Voir le produit
                  <i className="ri-arrow-right-line" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
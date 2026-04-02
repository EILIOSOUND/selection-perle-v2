import { useState, useEffect } from 'react';

interface ApiProduct {
  product_id?: string;
  title: string;
  main_image: string;
  affiliate_link: string;
  category?: string;
  subCategory?: string;
  sub_category?: string;
}

interface Product {
  id: string;
  title: string;
  img: string;
  link: string;
  category: string;
  subCategory: string;
}

interface Props {
  category: string;
  subCategory?: string;
}

const STOREFRONT_URL =
  'https://2d1219ea-d5ad-43c7-81cc-2cfeae9789c2-00-t12cj9iblvwm.spock.replit.dev/api/storefront/products';

export default function CategoryProducts({ category, subCategory }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(STOREFRONT_URL)
      .then(res => {
        if (!res.ok) throw new Error('Erreur de chargement');
        return res.json();
      })
      .then((data: { products?: ApiProduct[] }) => {
        const all: Product[] = (data.products ?? []).map((p, index) => ({
          id: p.product_id || `${p.title}-${index}`,
          title: p.title,
          img: p.main_image,
          link: p.affiliate_link,
          category: p.category || '',
          subCategory: p.subCategory || p.sub_category || '',
        }));

        const filtered = all.filter(p => {
          const matchCat = p.category === category;
          const matchSub = subCategory ? p.subCategory === subCategory : true;
          return matchCat && matchSub;
        });

        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [category, subCategory]);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.img}
                  alt={product.title}
                  title={product.title}
                  className="product-image w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="product-title text-base font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3rem]">
                  {product.title}
                </h3>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="product-button w-full bg-pink-500 text-white text-center py-3 rounded-xl font-medium hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  Voir l&apos;offre
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
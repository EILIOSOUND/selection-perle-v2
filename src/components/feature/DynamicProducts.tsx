import { useState, useEffect } from 'react';

interface ApiProduct {
  product_id?: string;
  title: string;
  main_image: string;
  affiliate_link: string;
  date_generated?: string;
  category?: string;
  subCategory?: string;
  sub_category?: string;
}

interface Product {
  id: string;
  title: string;
  img: string;
  link: string;
  date: number;
  category: string;
  subCategory: string;
}

const STOREFRONT_URL =
  'https://2d1219ea-d5ad-43c7-81cc-2cfeae9789c2-00-t12cj9iblvwm.spock.replit.dev/api/storefront/products';

function parseDate(value?: string): number {
  if (!value) return 0;

  // ISO direct
  const iso = new Date(value).getTime();
  if (!Number.isNaN(iso)) return iso;

  // Format DD/MM/YYYY ou DD/MM/YYYY HH:mm:ss
  const match = value.match(
    /^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2}):(\d{2}))?$/
  );

  if (!match) return 0;

  const [, dd, mm, yyyy, hh = '00', min = '00', ss = '00'] = match;

  return new Date(
    `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}`
  ).getTime();
}

function categoryLabel(category: string) {
  switch (category) {
    case 'shopping':
      return 'Shopping';
    case 'bien-etre':
      return 'Bien-être';
    case 'tech':
      return 'Tech';
    case 'loisirs':
      return 'Loisirs';
    default:
      return category;
  }
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div
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
  );
}

export default function DynamicProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [groupedProducts, setGroupedProducts] = useState<
    Record<string, Record<string, Product[]>>
  >({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(STOREFRONT_URL)
      .then(res => {
        if (!res.ok) throw new Error('Erreur de chargement');
        return res.json();
      })
      .then((data: { products?: ApiProduct[] }) => {
        const mapped: Product[] = (data.products ?? []).map((p, index) => ({
          id: p.product_id || `${p.title}-${index}`,
          title: p.title,
          img: p.main_image,
          link: p.affiliate_link,
          date: parseDate(p.date_generated),
          category: p.category || 'autres',
          subCategory: p.subCategory || p.sub_category || 'Divers',
        }));

        const sorted = [...mapped].sort((a, b) => b.date - a.date);
        const latest = sorted.slice(0, 4);

        const grouped: Record<string, Record<string, Product[]>> = {};
        sorted.forEach(product => {
          if (!grouped[product.category]) {
            grouped[product.category] = {};
          }
          if (!grouped[product.category][product.subCategory]) {
            grouped[product.category][product.subCategory] = [];
          }
          grouped[product.category][product.subCategory].push(product);
        });

        setProducts(sorted);
        setLatestProducts(latest);
        setGroupedProducts(grouped);
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
        {/* Dernières pépites */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Dernières pépites
          </h2>
          <p className="text-gray-600 text-base">
            Mes 4 dernières trouvailles à ne pas manquer
          </p>
        </div>

        <div id="product-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {latestProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Catégories */}
        {Object.entries(groupedProducts).map(([category, subGroups]) => (
          <div key={category} className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {categoryLabel(category)}
              </h2>
            </div>

            {Object.entries(subGroups).map(([subCategory, items]) => (
              <div key={subCategory} className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {subCategory}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
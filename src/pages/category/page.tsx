import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import Layout from '../../components/feature/Layout';
import ProductCard from '../../components/feature/ProductCard';
import Skeleton from '../../components/base/Skeleton';
import { categoryData } from '../../mocks/categoryData';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tout');

  // Reset filter when slug changes
  useEffect(() => {
    setActiveFilter('Tout');
  }, [slug]);

  // Configuration des catégories
  const categoryConfig: Record<string, { name: string; description: string; icon: string; gradient: string; subtitle: string; bgColor: string; heroBg: string }> = {
    shopping: {
      name: 'Shopping',
      description: 'Mode, accessoires et plus encore',
      icon: 'ri-shopping-bag-3-line',
      gradient: 'from-pink-400 to-pink-500',
      subtitle: 'Mode & Accessoires',
      bgColor: 'bg-pink-50',
      heroBg: 'from-pink-100 via-pink-50 to-white'
    },
    'bien-etre': {
      name: 'Bien-être',
      description: 'Beauté & Santé',
      icon: 'ri-heart-pulse-line',
      gradient: 'from-purple-400 to-purple-500',
      subtitle: 'Beauté & Santé',
      bgColor: 'bg-purple-50',
      heroBg: 'from-purple-100 via-purple-50 to-white'
    },
    tech: {
      name: 'Tech',
      description: 'Gadgets & Électronique',
      icon: 'ri-smartphone-line',
      gradient: 'from-cyan-400 to-cyan-500',
      subtitle: 'Gadgets & Électronique',
      bgColor: 'bg-cyan-50',
      heroBg: 'from-cyan-100 via-cyan-50 to-white'
    },
    loisirs: {
      name: 'Loisirs',
      description: 'Jeux & Détente',
      icon: 'ri-gamepad-line',
      gradient: 'from-orange-400 to-orange-500',
      subtitle: 'Jeux & Détente',
      bgColor: 'bg-orange-50',
      heroBg: 'from-orange-100 via-orange-50 to-white'
    }
  };

  const currentSlug = slug || 'shopping';
  const currentCategory = categoryConfig[currentSlug] || categoryConfig.shopping;

  // Filtres et produits selon la catégorie active
  const currentData = categoryData[currentSlug] || categoryData.shopping;
  const filters = currentData.filters;
  const allProducts = currentData.products;

  // Filtrage des produits selon le filtre actif
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'Tout') return allProducts;
    return allProducts.filter((p) => p.subCategory === activeFilter);
  }, [allProducts, activeFilter]);

  useEffect(() => {
    document.title = `${currentCategory.name} - ${currentCategory.subtitle} | La sélection de Perle`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Découvrez notre sélection ${currentCategory.name} : ${currentCategory.subtitle}. Des produits soigneusement choisis pour vous.`);
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: `${currentCategory.name} - La sélection de Perle`,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      window.fbq('track', 'ViewContent', {
        content_name: currentCategory.name,
        content_category: currentCategory.subtitle,
      });
    }
  }, [slug, currentCategory]);

  const allCategories = [
    { slug: 'shopping', ...categoryConfig.shopping },
    { slug: 'bien-etre', ...categoryConfig['bien-etre'] },
    { slug: 'tech', ...categoryConfig.tech },
    { slug: 'loisirs', ...categoryConfig.loisirs }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${currentCategory.heroBg} py-12`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <i className={`${currentCategory.icon} text-4xl bg-gradient-to-br ${currentCategory.gradient} bg-clip-text text-transparent`} aria-hidden="true"></i>
            </div>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">{currentCategory.name}</h1>
              <p className="text-gray-700 text-lg mt-2">{currentCategory.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Banner */}
      <nav className="bg-white border-b border-gray-200" aria-label="Navigation des catégories">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-4 gap-4">
            {allCategories.map((cat) => {
              const isActive = cat.slug === currentSlug;
              return (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className={`relative flex flex-col items-center justify-center gap-3 py-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? `bg-gradient-to-br ${cat.gradient} text-white shadow-lg`
                      : 'bg-white border-2 border-gray-200 hover:border-gray-300 hover:scale-105 hover:shadow-xl'
                  }`}
                  aria-label={`Catégorie ${cat.name} - ${cat.subtitle}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className={`relative z-10 w-12 h-12 flex items-center justify-center ${
                    isActive ? '' : `bg-gradient-to-br ${cat.gradient} rounded-full`
                  }`}>
                    <i className={`${cat.icon} text-3xl text-white`} aria-hidden="true"></i>
                  </div>
                  <div className="relative z-10 text-center">
                    <span className={`text-base font-semibold block ${isActive ? 'text-white' : 'text-gray-900'}`}>
                      {cat.name}
                    </span>
                    <span className={`text-xs block mt-1 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                      {cat.subtitle}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 mr-4">
              <i className="ri-filter-3-line text-gray-600" aria-hidden="true"></i>
              <span className="text-sm font-medium text-gray-700">Filtrer:</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filtres de produits">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={activeFilter === filter}
                  aria-label={`Filtrer par ${filter}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-4">
              <span className="text-sm text-gray-600">Trier par</span>
              <button
                className="flex items-center gap-2 text-sm font-medium text-gray-900 cursor-pointer whitespace-nowrap"
                aria-label="Options de tri"
              >
                <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Count */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-gray-600" role="status" aria-live="polite">{filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="status" aria-label="Chargement des produits">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  category={product.category}
                  title={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={parseInt(product.discount)}
                  link={product.link}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className="ri-inbox-2-line text-5xl text-gray-300" aria-hidden="true"></i>
              </div>
              <p className="text-gray-500 text-lg">Aucun produit dans cette sous-catégorie.</p>
              <button
                onClick={() => setActiveFilter('Tout')}
                className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium cursor-pointer whitespace-nowrap hover:bg-gray-700 transition-all"
              >
                Voir tous les produits
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-12 text-center shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ne manquez aucune pépite !
              </h2>
              <p className="text-base text-gray-300 mb-8 leading-relaxed">
                Revenez régulièrement pour découvrir de nouvelles trouvailles sélectionnées avec soin.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full font-medium hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                aria-label="Découvrir maintenant"
              >
                Découvrir maintenant
                <i className="ri-arrow-right-line" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
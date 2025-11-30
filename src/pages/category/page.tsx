import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/feature/Layout';
import ProductCard from '../../components/feature/ProductCard';
import Skeleton from '../../components/base/Skeleton';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Tout');

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

  const currentCategory = categoryConfig[slug || 'shopping'] || categoryConfig.shopping;

  useEffect(() => {
    // Update page title dynamically
    document.title = `${currentCategory.name} - ${currentCategory.subtitle} | La sélection de Perle`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `Découvrez notre sélection ${currentCategory.name} : ${currentCategory.subtitle}. Des produits soigneusement choisis pour vous.`);
    }
    
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: `${currentCategory.name} - La sélection de Perle`,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
    
    // Meta Pixel PageView
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      window.fbq('track', 'ViewContent', {
        content_name: currentCategory.name,
        content_category: currentCategory.subtitle,
      });
    }
  }, [slug, currentCategory]);

  // Toutes les catégories pour le bandeau de navigation
  const allCategories = [
    { slug: 'shopping', ...categoryConfig.shopping },
    { slug: 'bien-etre', ...categoryConfig['bien-etre'] },
    { slug: 'tech', ...categoryConfig.tech },
    { slug: 'loisirs', ...categoryConfig.loisirs }
  ];

  // Filtres selon la catégorie
  const filters = ['Tout', 'Accessoires', 'Bijoux', 'Chaussures', 'Montres', 'Pantalons', 'Plus'];

  // Produits par catégorie
  const products = [
    {
      id: 1,
      name: 'Robe d\'été fleurie rouge',
      price: 45.99,
      originalPrice: 72.99,
      discount: '-37%',
      image: 'https://readdy.ai/api/search-image?query=elegant%20red%20floral%20summer%20dress%20on%20beige%20background%2C%20fashion%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20warm%20minimalist%20backdrop&width=400&height=500&seq=cat1&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005004567890123.html'
    },
    {
      id: 2,
      name: 'Pantalon cargo streetwear',
      price: 59.99,
      originalPrice: 89.99,
      discount: '-34%',
      image: 'https://readdy.ai/api/search-image?query=urban%20cargo%20pants%20streetwear%20on%20neutral%20background%2C%20fashion%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20backdrop&width=400&height=500&seq=cat2&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005005678901234.html'
    },
    {
      id: 3,
      name: 'T-shirt vintage original',
      price: 29.99,
      originalPrice: 47.99,
      discount: '-38%',
      image: 'https://readdy.ai/api/search-image?query=vintage%20original%20tshirt%20on%20white%20background%2C%20fashion%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20clean%20minimalist%20backdrop&width=400&height=500&seq=cat3&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005006789012345.html'
    },
    {
      id: 4,
      name: 'Boucles d\'oreilles élégantes',
      price: 34.99,
      originalPrice: 61.99,
      discount: '-44%',
      image: 'https://readdy.ai/api/search-image?query=elegant%20earrings%20on%20green%20leaf%20background%2C%20jewelry%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20natural%20minimalist%20backdrop&width=400&height=500&seq=cat4&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005007890123456.html'
    },
    {
      id: 5,
      name: 'Montre élégante minimaliste',
      price: 129.99,
      originalPrice: 199.99,
      discount: '-35%',
      image: 'https://readdy.ai/api/search-image?query=elegant%20minimalist%20watch%20on%20white%20background%2C%20luxury%20timepiece%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=cat5&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005008901234567.html'
    },
    {
      id: 6,
      name: 'Sac à main cuir premium',
      price: 89.99,
      originalPrice: 149.99,
      discount: '-40%',
      image: 'https://readdy.ai/api/search-image?query=premium%20leather%20handbag%20on%20white%20background%2C%20luxury%20fashion%20accessory%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=cat6&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005009012345678.html'
    },
    {
      id: 7,
      name: 'Lunettes de soleil design',
      price: 39.99,
      originalPrice: 69.99,
      discount: '-43%',
      image: 'https://readdy.ai/api/search-image?query=designer%20sunglasses%20on%20white%20background%2C%20fashion%20accessory%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=cat7&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005010123456789.html'
    },
    {
      id: 8,
      name: 'Écharpe en soie premium',
      price: 34.99,
      originalPrice: 59.99,
      discount: '-42%',
      image: 'https://readdy.ai/api/search-image?query=premium%20silk%20scarf%20on%20white%20background%2C%20luxury%20fashion%20accessory%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=cat8&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005011234567890.html'
    },
    {
      id: 9,
      name: 'Chaussures tendance confortables',
      price: 69.99,
      originalPrice: 109.99,
      discount: '-36%',
      image: 'https://readdy.ai/api/search-image?query=trendy%20comfortable%20shoes%20on%20white%20background%2C%20fashion%20footwear%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=cat9&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005012345678901.html'
    },
    {
      id: 10,
      name: 'Bijoux fantaisie élégants',
      price: 24.99,
      originalPrice: 44.99,
      discount: '-45%',
      image: 'https://readdy.ai/api/search-image?query=elegant%20fashion%20jewelry%20on%20white%20background%2C%20luxury%20accessory%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=cat10&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005013456789012.html'
    },
    {
      id: 11,
      name: 'Portefeuille cuir compact',
      price: 44.99,
      originalPrice: 79.99,
      discount: '-44%',
      image: 'https://readdy.ai/api/search-image?query=compact%20leather%20wallet%20on%20white%20background%2C%20luxury%20accessory%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20backdrop&width=400&height=500&seq=cat11&orientation=portrait',
      category: currentCategory.name,
      link: 'https://fr.aliexpress.com/item/1005014567890123.html'
    }
  ];

  return (
    <Layout>
      {/* Hero Section avec bandeau coloré en dégradé pastel doux */}
      <section className={`bg-gradient-to-br ${currentCategory.heroBg} py-12`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-6">
            {/* Icône dans un carré avec ombre */}
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <i className={`${currentCategory.icon} text-4xl bg-gradient-to-br ${currentCategory.gradient} bg-clip-text text-transparent`} aria-hidden="true"></i>
            </div>
            
            {/* Titre et sous-titre */}
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
              const isActive = cat.slug === slug;
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
                  {/* Icon */}
                  <div className={`relative z-10 w-12 h-12 flex items-center justify-center ${
                    isActive ? '' : `bg-gradient-to-br ${cat.gradient} rounded-full`
                  }`}>
                    <i className={`${cat.icon} text-3xl ${isActive ? 'text-white' : 'text-white'}`} aria-hidden="true"></i>
                  </div>
                  
                  {/* Category Name */}
                  <div className="relative z-10 text-center">
                    <span className={`text-base font-semibold block ${
                      isActive ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cat.name}
                    </span>
                    <span className={`text-xs block mt-1 ${
                      isActive ? 'text-white/80' : 'text-gray-500'
                    }`}>
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
          <p className="text-sm text-gray-600" role="status" aria-live="polite">{products.length} produits trouvés</p>
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
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
          )}
        </div>
      </section>

      {/* CTA Section - Identique à l'accueil */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Bulle avec fond gris foncé comme le footer */}
            <div className="bg-gray-900 rounded-3xl p-12 text-center shadow-xl">
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ne manquez aucune pépite !
              </h2>
              
              {/* Description */}
              <p className="text-base text-gray-300 mb-8 leading-relaxed">
                Revenez régulièrement pour découvrir de nouvelles trouvailles sélectionnées avec soin.
              </p>
              
              {/* CTA Button - Retour à l'accueil */}
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
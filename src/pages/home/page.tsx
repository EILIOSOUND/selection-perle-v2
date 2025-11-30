import { Link } from 'react-router-dom';
import Layout from '../../components/feature/Layout';
import CategoryNav from '../../components/feature/CategoryNav';
import ProductCard from '../../components/feature/ProductCard';
import DynamicProducts from '../../components/feature/DynamicProducts';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Accueil - La sélection de Perle',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
    
    // Meta Pixel PageView
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Robe élégante à motifs floraux',
      price: 45.99,
      image: 'https://readdy.ai/api/search-image?query=elegant%20floral%20pattern%20dress%20on%20white%20background%2C%20fashion%20photography%2C%20professional%20product%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod1&orientation=portrait',
      category: 'Shopping',
      link: 'https://fr.aliexpress.com/item/1005004567890123.html'
    },
    {
      id: 2,
      name: 'Sac à main cuir premium',
      price: 89.99,
      image: 'https://readdy.ai/api/search-image?query=premium%20leather%20handbag%20on%20white%20background%2C%20luxury%20fashion%20accessory%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod2&orientation=portrait',
      category: 'Shopping',
      link: 'https://fr.aliexpress.com/item/1005005678901234.html'
    },
    {
      id: 3,
      name: 'Montre connectée sport',
      price: 129.99,
      image: 'https://readdy.ai/api/search-image?query=modern%20sport%20smartwatch%20on%20white%20background%2C%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod3&orientation=portrait',
      category: 'Tech',
      link: 'https://fr.aliexpress.com/item/1005006789012345.html'
    },
    {
      id: 4,
      name: 'Écouteurs sans fil premium',
      price: 79.99,
      image: 'https://readdy.ai/api/search-image?query=premium%20wireless%20earbuds%20on%20white%20background%2C%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod4&orientation=portrait',
      category: 'Tech',
      link: 'https://fr.aliexpress.com/item/1005007890123456.html'
    },
    {
      id: 5,
      name: 'Set de soins visage bio',
      price: 34.99,
      image: 'https://readdy.ai/api/search-image?query=organic%20facial%20care%20set%20on%20white%20background%2C%20beauty%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod5&orientation=portrait',
      category: 'Bien-être',
      link: 'https://fr.aliexpress.com/item/1005008901234567.html'
    },
    {
      id: 6,
      name: 'Tapis de yoga premium',
      price: 49.99,
      image: 'https://readdy.ai/api/search-image?query=premium%20yoga%20mat%20rolled%20on%20white%20background%2C%20fitness%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod6&orientation=portrait',
      category: 'Bien-être',
      link: 'https://fr.aliexpress.com/item/1005009012345678.html'
    },
    {
      id: 7,
      name: 'Appareil photo instantané',
      price: 99.99,
      image: 'https://readdy.ai/api/search-image?query=instant%20camera%20on%20white%20background%2C%20technology%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod7&orientation=portrait',
      category: 'Loisirs',
      link: 'https://fr.aliexpress.com/item/1005010123456789.html'
    },
    {
      id: 8,
      name: 'Kit de peinture artistique',
      price: 54.99,
      image: 'https://readdy.ai/api/search-image?query=artistic%20painting%20kit%20on%20white%20background%2C%20hobby%20product%20photography%2C%20professional%20shot%2C%20soft%20lighting%2C%20minimalist%20clean%20white%20backdrop&width=400&height=500&seq=prod8&orientation=portrait',
      category: 'Loisirs',
      link: 'https://fr.aliexpress.com/item/1005011234567890.html'
    }
  ];

  const categories = [
    {
      id: 1,
      name: 'Shopping',
      subtitle: 'Mode & Accessoires',
      icon: 'ri-shopping-bag-3-line',
      gradient: 'from-pink-400 to-pink-500',
      bgColor: 'bg-pink-50',
      link: '/category/shopping'
    },
    {
      id: 2,
      name: 'Bien-être',
      subtitle: 'Beauté & Santé',
      icon: 'ri-heart-pulse-line',
      gradient: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-50',
      link: '/category/bien-etre'
    },
    {
      id: 3,
      name: 'Tech',
      subtitle: 'Gadgets & Électronique',
      icon: 'ri-smartphone-line',
      gradient: 'from-cyan-400 to-cyan-500',
      bgColor: 'bg-cyan-50',
      link: '/category/tech'
    },
    {
      id: 4,
      name: 'Loisirs',
      subtitle: 'Jeux & Détente',
      icon: 'ri-gamepad-line',
      gradient: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
      link: '/category/loisirs'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-pink-50 min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://static.readdy.ai/image/f64a4f029ff087c4e70229551572bd89/ddc2303c71c1e2a9b77361ab10e7fb01.jpeg"
            alt="Perle - Influenceuse lifestyle et sélection de produits"
            title="La sélection de Perle - Influenceuse"
            loading="eager"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/95 via-pink-50/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <i className="ri-gift-line text-pink-500" aria-hidden="true"></i>
              <span className="text-sm text-gray-700">Sélection soignée par Perle</span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Découvrez mes<br />
              <span className="text-pink-500">pépites</span> préférées
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-700 max-w-lg leading-relaxed mb-8">
              Une sélection personnelle des meilleurs produits du web. Des trouvailles uniques à prix imbattables, testées et approuvées.
            </p>
            
            {/* CTA Button */}
            <Link 
              to="/category/shopping"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              aria-label="Explorer la sélection de produits"
            >
              Explorer la sélection
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Explorez nos catégories
            </h2>
            <p className="text-gray-600 text-base">
              Trouvez exactement ce que vous cherchez
            </p>
          </div>

          {/* Bandeau pastel dégradé */}
          <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-orange-400 opacity-30 rounded-full mb-12" aria-hidden="true"></div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className={`relative flex flex-col items-center justify-center gap-3 py-8 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${category.bgColor} border-2 border-gray-200 hover:border-gray-300 hover:scale-105 hover:shadow-xl`}
                aria-label={`Découvrir la catégorie ${category.name} - ${category.subtitle}`}
              >
                {/* Cercle décoratif en bas à droite */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-200 rounded-full" aria-hidden="true"></div>
                
                {/* Icon */}
                <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center`}>
                  <i className={`${category.icon} text-3xl text-white`} aria-hidden="true"></i>
                </div>
                
                {/* Category Info */}
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">Mes coups de cœur</h2>
              <p className="text-gray-600">Les produits que j'adore en ce moment</p>
            </div>
            <Link 
              to="/category/shopping"
              className="hidden md:inline-flex items-center gap-2 text-pink-500 font-medium hover:gap-3 transition-all cursor-pointer whitespace-nowrap"
              aria-label="Voir tous les produits"
            >
              Voir tout
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                image={product.image}
                category={product.category}
                title={product.name}
                price={product.price}
                originalPrice={product.price * 1.5}
                discount={33}
                link={product.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link 
              to="/category/shopping"
              className="inline-flex items-center gap-2 text-pink-500 font-medium cursor-pointer whitespace-nowrap"
              aria-label="Voir tous les produits"
            >
              Voir tous les produits
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Products Section */}
      <DynamicProducts />

      {/* CTA Section - Nouveautés */}
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
              
              {/* CTA Button */}
              <Link 
                to="/category/shopping"
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
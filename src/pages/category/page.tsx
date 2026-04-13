import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/feature/Layout';
import AffiliateDisclaimer from '../../components/feature/AffiliateDisclaimer';
import CategoryProducts from '../../components/feature/CategoryProducts';
import { trackFbq, trackGtag } from '../../utils/tracking';

const categoryConfig: Record<
  string,
  {
    name: string;
    description: string;
    icon: string;
    gradient: string;
    subtitle: string;
    bgColor: string;
    heroBg: string;
    filters: string[];
  }
> = {
  shopping: {
    name: 'Shopping',
    description: 'Mode, accessoires et plus encore',
    icon: 'ri-shopping-bag-3-line',
    gradient: 'from-pink-400 to-pink-500',
    subtitle: 'Mode & Accessoires',
    bgColor: 'bg-pink-50',
    heroBg: 'from-pink-100 via-pink-50 to-white',
    filters: ['Tout', 'Vêtements', 'Accessoires', 'Bijoux', 'Chaussures', 'Montres'],
  },
  'bien-etre': {
    name: 'Bien-être',
    description: 'Beauté & Santé',
    icon: 'ri-heart-pulse-line',
    gradient: 'from-purple-400 to-purple-500',
    subtitle: 'Beauté & Santé',
    bgColor: 'bg-purple-50',
    heroBg: 'from-purple-100 via-purple-50 to-white',
    filters: ['Tout', 'Soins visage', 'Beauté', 'Fitness', 'Aromathérapie', 'Nutrition'],
  },
  tech: {
    name: 'Tech',
    description: 'Gadgets & Électronique',
    icon: 'ri-smartphone-line',
    gradient: 'from-cyan-400 to-cyan-500',
    subtitle: 'Gadgets & Électronique',
    bgColor: 'bg-cyan-50',
    heroBg: 'from-cyan-100 via-cyan-50 to-white',
    filters: ['Tout', 'Audio', 'Smartphones', 'Maison connectée', 'Gaming', 'Gadgets'],
  },
  loisirs: {
    name: 'Loisirs',
    description: 'Jeux & Détente',
    icon: 'ri-gamepad-line',
    gradient: 'from-orange-400 to-orange-500',
    subtitle: 'Jeux & Détente',
    bgColor: 'bg-orange-50',
    heroBg: 'from-orange-100 via-orange-50 to-white',
    filters: ['Tout', 'Jeux', 'Voyage', 'Lecture', 'Sport', 'Créativité'],
  },
};

const allCategories = Object.entries(categoryConfig).map(([slug, cfg]) => ({
  slug,
  ...cfg,
}));

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [activeFilter, setActiveFilter] = useState<string | undefined>(undefined);

  const currentSlug = slug || 'shopping';
  const currentCategory = categoryConfig[currentSlug] || categoryConfig.shopping;
  const filters = currentCategory.filters;

  useEffect(() => {
    setActiveFilter(undefined);
  }, [slug]);

  useEffect(() => {
    document.title = `${currentCategory.name} - ${currentCategory.subtitle} | La sélection de Perle`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        `Découvrez notre sélection ${currentCategory.name} : ${currentCategory.subtitle}. Des produits soigneusement choisis pour vous.`
      );
    }
    trackGtag('page_view', {
      page_title: `${currentCategory.name} - La sélection de Perle`,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
    trackFbq('PageView');
    trackFbq('ViewContent', {
      content_name: currentCategory.name,
      content_category: currentCategory.subtitle,
    });
  }, [slug, currentCategory]);

  return (
    <Layout>
      <section className={`bg-gradient-to-br ${currentCategory.heroBg} py-12`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <i
                className={`${currentCategory.icon} text-4xl bg-gradient-to-br ${currentCategory.gradient} bg-clip-text text-transparent`}
                aria-hidden="true"
              ></i>
            </div>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">{currentCategory.name}</h1>
              <p className="text-gray-700 text-lg mt-2">{currentCategory.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b border-gray-200" aria-label="Navigation des catégories">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-4 gap-4">
            {allCategories.map((cat) => {
              const isActive = cat.slug === currentSlug;
              return (
                <Link
                  key={cat.slug}
                  to={cat.slug === "shopping" ? "/shopping" : `/category/${cat.slug}`}
                  className={`relative flex flex-col items-center justify-center gap-3 py-6 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? `bg-gradient-to-br ${cat.gradient} text-white shadow-lg`
                      : 'bg-white border-2 border-gray-200 hover:border-gray-300 hover:scale-105 hover:shadow-xl'
                  }`}
                  aria-label={`Catégorie ${cat.name} - ${cat.subtitle}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div
                    className={`relative z-10 w-12 h-12 flex items-center justify-center ${
                      isActive ? '' : `bg-gradient-to-br ${cat.gradient} rounded-full`
                    }`}
                  >
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
                  onClick={() => setActiveFilter(filter === 'Tout' ? undefined : filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    (activeFilter ?? 'Tout') === filter
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={(activeFilter ?? 'Tout') === filter}
                  aria-label={`Filtrer par ${filter}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-gray-600">
            Produits filtrés par catégorie{activeFilter ? ` : ${activeFilter}` : ''}
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <CategoryProducts
            category={currentSlug}
            subCategory={activeFilter}
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-12 text-center shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ne manquez aucune pépite&nbsp;!
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

      <AffiliateDisclaimer />
    </Layout>
  );
}
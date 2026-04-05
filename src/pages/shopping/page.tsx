import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '../../components/feature/Layout';
import AffiliateDisclaimer from '../../components/feature/AffiliateDisclaimer';
import CategoryProducts from '../../components/feature/CategoryProducts';
import { shoppingData } from '../../mocks/shoppingData';

const subNavLinks = [
  { gender: 'femme', label: 'Femme', icon: 'ri-women-line' },
  { gender: 'homme', label: 'Homme', icon: 'ri-men-line' },
  { gender: 'enfant', label: 'Enfant', icon: 'ri-bear-smile-line' },
  { gender: 'unisexe', label: 'Unisexe', icon: 'ri-infinity-line' },
];

const accentMap: Record<string, { pill: string; icon: string; badge: string; btn: string }> = {
  pink: {
    pill: 'bg-pink-500/15 text-pink-400',
    icon: 'from-pink-400 to-pink-500',
    badge: 'bg-pink-500',
    btn: 'bg-pink-500 hover:bg-pink-600',
  },
  gray: {
    pill: 'bg-gray-500/15 text-gray-300',
    icon: 'from-slate-500 to-slate-600',
    badge: 'bg-slate-600',
    btn: 'bg-slate-800 hover:bg-slate-700',
  },
  orange: {
    pill: 'bg-orange-500/15 text-orange-400',
    icon: 'from-orange-400 to-amber-500',
    badge: 'bg-orange-500',
    btn: 'bg-orange-500 hover:bg-orange-600',
  },
  violet: {
    pill: 'bg-violet-500/15 text-violet-400',
    icon: 'from-violet-400 to-fuchsia-500',
    badge: 'bg-violet-500',
    btn: 'bg-violet-500 hover:bg-violet-600',
  },
};

export default function ShoppingPage() {
  const { gender } = useParams<{ gender: string }>();
  const [activeFilter, setActiveFilter] = useState('Tout');

  const currentGender = gender && shoppingData[gender] ? gender : 'femme';
  const config = shoppingData[currentGender];
  const accent = accentMap[config.accentColor] || accentMap.pink;

  useEffect(() => {
    setActiveFilter('Tout');
  }, [gender]);

  useEffect(() => {
    document.title = `${config.title} — La sélection de Perle`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', config.description);
    }
  }, [config]);

  const selectedSubCategory = activeFilter === 'Tout' ? undefined : activeFilter;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <img
          src={config.heroImage}
          alt={config.title}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        <div className="relative z-10 w-full container mx-auto px-4 lg:px-8 pb-12">
          <div
            className={`inline-flex items-center gap-2 ${accent.pill} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4`}
          >
            <i className="ri-shopping-bag-3-line" />
            <span>La sélection de Perle</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            {config.title}
          </h1>
          <p className="text-base text-white/75 max-w-xl leading-relaxed">
            {config.description}
          </p>
        </div>
      </section>

      {/* Sub-nav */}
      <nav
        className="bg-white border-b border-gray-100 sticky top-[129px] z-30"
        aria-label="Sous-navigation Shopping"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-4">
            {subNavLinks.map((link) => {
              const isActive = currentGender === link.gender;
              return (
                <Link
                  key={link.gender}
                  to={`/shopping/${link.gender}`}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className={link.icon} />
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2 mr-3">
              <span className="w-5 h-5 flex items-center justify-center">
                <i className="ri-filter-3-line text-gray-500" />
              </span>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Filtrer :</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filtres de produits">
              {config.filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Produits dynamiques depuis API Replit */}
      <CategoryProducts
        category="shopping"
        audience={currentGender}
        subCategory={selectedSubCategory}
      />

      {/* Autres catégories Shopping */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Autres univers Shopping</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subNavLinks
              .filter((link) => link.gender !== currentGender)
              .map((link) => {
                const ac = accentMap[shoppingData[link.gender].accentColor];
                return (
                  <Link
                    key={link.gender}
                    to={`/shopping/${link.gender}`}
                    className="relative overflow-hidden rounded-2xl border-2 border-gray-100 hover:border-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer p-6 flex flex-col items-center gap-3 bg-white"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${ac.icon} flex items-center justify-center`}
                    >
                      <i className={`${link.icon} text-xl text-white`} />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{link.label}</span>
                    <span className="text-xs text-gray-400">{shoppingData[link.gender].subtitle}</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ne manquez aucune pépite&nbsp;!</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Revenez régulièrement pour découvrir de nouvelles trouvailles sélectionnées avec soin.
              </p>
              <Link
                to="/"
                className={`inline-flex items-center gap-2 ${accent.btn} text-white px-8 py-4 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer`}
              >
                Retour à l&apos;accueil
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AffiliateDisclaimer />
    </Layout>
  );
}
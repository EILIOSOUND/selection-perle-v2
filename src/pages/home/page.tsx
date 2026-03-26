import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/feature/Layout';
import ProductCard from '../../components/feature/ProductCard';
import DynamicProducts from '../../components/feature/DynamicProducts';
import { featuredProducts, categories, rgpdItems } from '../../mocks/homeData';

export default function Home() {
  const [newsletterSuccess, setNewsletterSuccess] = React.useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Accueil - La sélection de Perle',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-pink-50 min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://static.readdy.ai/image/f64a4f029ff087c4e70229551572bd89/ddc2303c71c1e2a9b77361ab10e7fb01.jpeg"
            alt="Perle - Influenceuse lifestyle et sélection de produits"
            title="La sélection de Perle - Influenceuse"
            loading="eager"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/95 via-pink-50/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <i className="ri-gift-line text-pink-500" aria-hidden="true" />
              <span className="text-sm text-gray-700">Sélection soignée par Perle</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Découvrez mes<br />
              <span className="text-pink-500">pépites</span> préférées
            </h1>

            <p className="text-lg text-gray-700 max-w-lg leading-relaxed mb-8">
              Une sélection personnelle des meilleurs produits du web. Des trouvailles uniques à prix imbattables, testées et approuvées.
            </p>

            <Link
              to="/category/shopping"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              aria-label="Explorer la sélection de produits"
            >
              Explorer la sélection
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Explorez nos catégories
            </h2>
            <p className="text-gray-600 text-base">Trouvez exactement ce que vous cherchez</p>
          </div>

          <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-orange-400 opacity-30 rounded-full mb-12" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className={`relative flex flex-col items-center justify-center gap-3 py-8 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${category.bgColor} border-2 border-gray-200 hover:border-gray-300 hover:scale-105 hover:shadow-xl`}
                aria-label={`Découvrir la catégorie ${category.name} - ${category.subtitle}`}
              >
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-200 rounded-full" aria-hidden="true" />

                <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center`}>
                  <i className={`${category.icon} text-3xl text-white`} aria-hidden="true" />
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.subtitle}</p>
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
              <p className="text-gray-600">Les produits que j&apos;adore en ce moment</p>
            </div>
            <Link
              to="/category/shopping"
              className="hidden md:inline-flex items-center gap-2 text-pink-500 font-medium hover:gap-3 transition-all cursor-pointer whitespace-nowrap"
              aria-label="Voir tous les produits"
            >
              Voir tout
              <i className="ri-arrow-right-line" aria-hidden="true" />
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
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Products */}
      <DynamicProducts />

      {/* Newsletter + À propos Perle */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-[1020px] mx-auto items-end">

            {/* Newsletter */}
            <div
              className="rounded-3xl text-center flex flex-col pt-11 px-10 pb-8"
              style={{
                background: 'linear-gradient(145deg, #1e1e2a 0%, #18181f 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
              }}
            >
              <div className="inline-flex items-center gap-1.5 bg-pink-500/15 text-pink-400 px-3 py-1 rounded-full text-xs font-semibold mb-5 tracking-wide uppercase mx-auto">
                <i className="ri-mail-heart-line" aria-hidden="true" />
                <span>Newsletter exclusive</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug">
                Ne manquez aucune pépite&nbsp;!
              </h2>

              <p className="text-sm text-gray-400 leading-relaxed max-w-[320px] mx-auto mb-8">
                Mes meilleures trouvailles directement dans votre boîte mail, avant tout le monde.
              </p>

              {/* Formulaire newsletter */}
              {newsletterSuccess ? (
                <div className="w-full bg-white rounded-[14px] p-6 text-center">
                  <i className="ri-check-line text-3xl text-pink-500 mb-2 block" />
                  <p className="text-gray-800 font-semibold">Merci, vous êtes inscrit(e) ! 🎉</p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const email = e.target.EMAIL.value;
                    const formData = new FormData();
                    formData.append('EMAIL', email);
                    try {
                      await fetch(
                        'https://83475230.sibforms.com/serve/MUIFAKGBnpvxOGN9Jy2_MU5iDJ4QLZlz66-NmEg3u9D8uD33eawdB6cTfMhZnTqy-L_G0Nk8MMRu8Jt4EEbvVYTibvXv3M33Upbu1yaM_S8AGnUvScTopnlBPsD6ndjyZzvw42F9TVFp8ukoQIbQ1hS-yM45MA_6QhoL09dIflob1OPkVs8yvsmSzHnvirepm5w32sCAE38QayYHIA==',
                        { method: 'POST', body: formData, mode: 'no-cors' }
                      );
                    } finally {
                      setNewsletterSuccess(true);
                    }
                  }}
                  className="w-full bg-white rounded-[14px] p-4 space-y-3"
                >
                  <input
                    type="email"
                    name="EMAIL"
                    required
                    placeholder="Votre adresse email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition"
                  >
                    S'inscrire
                  </button>
                </form>
              )}

              {/* RGPD */}
              <div
                className="mt-auto pt-5 flex items-center justify-center gap-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {rgpdItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className={`${item.icon} text-gray-500 text-xs`} aria-hidden="true" />
                    </div>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Perle */}
            <div className="w-full flex items-end justify-center">
              <img
                src="https://storage.readdy-site.link/project_files/0f6717d8-5e3c-4a1b-bf84-1c304a7423c6/72dbc214-a0bb-47e5-8bc1-823f1e8c6299_bio_perle01.png?v=72e2dd25c4b0499467b9e7f44bb451f2"
                alt="À propos de Perle - influenceuse lifestyle"
                className="w-full h-auto block"
                style={{ filter: 'drop-shadow(0 10px 36px rgba(0,0,0,0.14))' }}
              />
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
import { Link } from 'react-router-dom';
import Layout from '../../components/feature/Layout';

const shoppingCategories = [
  {
    gender: 'femme',
    label: 'Femme',
    tagline: 'Mode & élégance',
    description: 'Robes, blazers, sacs, accessoires... des pièces soigneusement sélectionnées pour sublimer votre style.',
    icon: 'ri-women-line',
    image: 'https://readdy.ai/api/search-image?query=elegant%20woman%20fashion%20editorial%20photography%2C%20stylish%20feminine%20outfit%2C%20soft%20pastel%20peach%20and%20cream%20background%2C%20professional%20fashion%20photography%2C%20high%20end%20clothing%2C%20warm%20natural%20studio%20light%2C%20minimalist%20aesthetic&width=600&height=720&seq=card-femme&orientation=portrait',
    accentColor: 'from-rose-400 to-pink-500',
    badgeBg: 'bg-pink-500/15 text-pink-400',
    hoverBorder: 'hover:border-pink-200',
    items: '120+ pièces',
  },
  {
    gender: 'homme',
    label: 'Homme',
    tagline: 'Style masculin',
    description: 'Chemises, vestes, sneakers et montres — un vestiaire masculin moderne, élégant et intemporel.',
    icon: 'ri-men-line',
    image: 'https://readdy.ai/api/search-image?query=stylish%20man%20fashion%20editorial%20photography%2C%20modern%20masculine%20outfit%2C%20clean%20minimal%20light%20gray%20background%2C%20professional%20fashion%20photography%2C%20high%20end%20menswear%2C%20sophisticated%20warm%20studio%20light&width=600&height=720&seq=card-homme&orientation=portrait',
    accentColor: 'from-slate-500 to-gray-700',
    badgeBg: 'bg-gray-500/15 text-gray-300',
    hoverBorder: 'hover:border-gray-200',
    items: '95+ pièces',
  },
  {
    gender: 'enfant',
    label: 'Enfant',
    tagline: 'Confort & jeux',
    description: 'Des vêtements colorés, résistants et adorables pour habiller les petits aventuriers de 0 à 12 ans.',
    icon: 'ri-bear-smile-line',
    image: 'https://readdy.ai/api/search-image?query=colorful%20childrens%20clothing%20editorial%20photography%2C%20playful%20kids%20fashion%2C%20bright%20cheerful%20warm%20orange%20and%20amber%20background%2C%20cute%20childrens%20outfits%2C%20joyful%20warm%20light%2C%20professional%20fashion%20photography&width=600&height=720&seq=card-enfant&orientation=portrait',
    accentColor: 'from-orange-400 to-amber-500',
    badgeBg: 'bg-orange-500/15 text-orange-400',
    hoverBorder: 'hover:border-orange-200',
    items: '80+ pièces',
  },
  {
    gender: 'unisexe',
    label: 'Unisexe',
    tagline: 'Mode sans genre',
    description: 'Hoodies, cargo, sneakers chunky — des pièces libres qui appartiennent à tout le monde.',
    icon: 'ri-infinity-line',
    image: 'https://readdy.ai/api/search-image?query=unisex%20fashion%20editorial%20photography%2C%20gender%20neutral%20clothing%2C%20modern%20minimalist%20style%2C%20soft%20lavender%20and%20neutral%20background%2C%20professional%20fashion%20photography%2C%20inclusive%20contemporary%20fashion%2C%20clean%20studio%20light&width=600&height=720&seq=card-unisexe&orientation=portrait',
    accentColor: 'from-violet-400 to-fuchsia-500',
    badgeBg: 'bg-violet-500/15 text-violet-400',
    hoverBorder: 'hover:border-violet-200',
    items: '70+ pièces',
  },
];

export default function ShoppingLanding() {
  return (
    <Layout>
      {/* Hero compact */}
      <section className="relative bg-[#0f0f11] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-pink-400 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-violet-400 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-6">
            <i className="ri-shopping-bag-3-line text-pink-400" aria-hidden="true" />
            <span>La sélection de Perle</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
            Shopping
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Choisissez votre univers et découvrez des pièces triées sur le volet, à prix imbattables.
          </p>
        </div>
      </section>

      {/* 4 Category Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shoppingCategories.map((cat) => (
              <Link
                key={cat.gender}
                to={`/shopping/${cat.gender}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 border-gray-100 ${cat.hoverBorder} transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white`}
                aria-label={`Découvrir ${cat.label} — ${cat.tagline}`}
              >
                {/* Image */}
                <div className="relative w-full h-72 overflow-hidden bg-gray-50">
                  <img
                    src={cat.image}
                    alt={`${cat.label} — ${cat.tagline}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* Badge items count */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {cat.items}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className={`inline-flex items-center gap-1.5 ${cat.badgeBg} px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 self-start`}>
                    <span className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className={cat.icon} aria-hidden="true" />
                    </span>
                    <span>{cat.tagline}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2">{cat.label}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{cat.description}</p>

                  <div className="flex items-center gap-2 mt-4 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all">
                    <span>Explorer</span>
                    <span className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Accent bottom bar */}
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${cat.accentColor} transition-all duration-300 rounded-b-2xl`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-[#0f0f11] rounded-3xl p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ne manquez aucune pépite&nbsp;!
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-7 max-w-md mx-auto">
                Mes meilleures trouvailles mode directement dans votre boîte mail, avant tout le monde.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-home-line" aria-hidden="true" />
                </span>
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

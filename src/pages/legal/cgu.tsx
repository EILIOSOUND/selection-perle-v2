import Layout from '../../components/feature/Layout';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: 'ri-focus-line',
    title: 'Objet',
    content: 'Le site Sélection-Perle propose des recommandations de produits via des liens affiliés. L\'objectif est de vous aider à découvrir des produits sélectionnés avec soin parmi les meilleures offres disponibles sur internet.',
  },
  {
    icon: 'ri-wifi-line',
    title: 'Accès au site',
    content: 'Le site est accessible gratuitement à tout utilisateur disposant d\'un accès internet. Tous les frais liés à l\'accès au service (matériel informatique, logiciels, connexion internet) sont à la charge de l\'utilisateur.',
  },
  {
    icon: 'ri-links-line',
    title: 'Affiliation',
    items: [
      'Certains liens présents sur ce site sont des liens affiliés.',
      'Une commission peut être perçue sans surcoût pour l\'utilisateur.',
      'Les produits sont sélectionnés de manière indépendante, mais peuvent faire l\'objet d\'une rémunération via l\'affiliation.',
    ],
  },
  {
    icon: 'ri-shield-line',
    title: 'Responsabilité',
    items: [
      'Les produits présentés sont vendus par des sites tiers. L\'éditeur du site ne peut être tenu responsable des commandes, livraisons ou litiges.',
      'Le site ne garantit pas l\'exactitude ou l\'exhaustivité des informations présentées.',
      'L\'utilisateur est seul responsable de l\'utilisation qu\'il fait des informations publiées.',
    ],
  },
  {
    icon: 'ri-edit-line',
    title: 'Modification',
    content: 'L\'éditeur se réserve le droit de modifier le contenu du site à tout moment, sans préavis, notamment pour mettre à jour les informations, corriger des erreurs ou améliorer les fonctionnalités.',
  },
];

export default function CGU() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Fil d'Ariane">
            <Link to="/" className="hover:text-pink-500 transition-colors cursor-pointer">Accueil</Link>
            <i className="ri-arrow-right-s-line" />
            <span className="text-gray-700 font-medium">CGU</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-2xl px-8 py-10 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                <i className="ri-article-line text-pink-500 text-lg" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Conditions générales d'utilisation</h1>
            </div>
            <p className="text-sm text-gray-400">
              En utilisant le site <strong className="text-gray-600">Sélection-Perle</strong>, vous acceptez les présentes conditions générales d'utilisation.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((section, i) => (
              <section key={section.title} className="bg-white rounded-2xl px-8 py-7 border border-gray-100">
                <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center shrink-0">
                    <i className={`${section.icon} text-pink-500 text-sm`} />
                  </div>
                  <span className="flex items-center gap-2">
                    <span className="text-pink-400 font-light text-sm">0{i + 1}</span>
                    {section.title}
                  </span>
                </h2>
                {section.content && (
                  <p className="text-sm text-gray-600 leading-relaxed">{section.content}</p>
                )}
                {section.items && (
                  <ul className="space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5">
                          <i className="ri-checkbox-circle-line text-pink-400" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Notice affiliation */}
          <div className="mt-6 bg-pink-50 border border-pink-100 rounded-2xl px-8 py-6 flex items-start gap-4">
            <div className="w-9 h-9 flex items-center justify-center shrink-0">
              <i className="ri-information-line text-pink-500 text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">À propos des liens affiliés</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ce site participe à des programmes d'affiliation. Cela signifie que si vous achetez un produit via l'un de nos liens, nous pouvons percevoir une petite commission — sans aucun coût supplémentaire pour vous. Cela nous aide à continuer à sélectionner de bons produits pour vous.
              </p>
            </div>
          </div>

          {/* Liens croisés */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link to="/mentions-legales" className="flex-1 flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-pink-200 hover:bg-pink-50 transition-all cursor-pointer group">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Lire aussi</p>
                <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors text-sm">Mentions légales</p>
              </div>
              <i className="ri-arrow-right-line text-gray-400 group-hover:text-pink-500 transition-colors" />
            </Link>
            <Link to="/politique-de-confidentialite" className="flex-1 flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-pink-200 hover:bg-pink-50 transition-all cursor-pointer group">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Lire aussi</p>
                <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors text-sm">Politique de confidentialité</p>
              </div>
              <i className="ri-arrow-right-line text-gray-400 group-hover:text-pink-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

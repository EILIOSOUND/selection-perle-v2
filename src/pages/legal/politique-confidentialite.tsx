import Layout from '../../components/feature/Layout';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: 'ri-user-shield-line',
    title: 'Responsable du traitement',
    content: 'RICHARD Fabrice, entrepreneur individuel — contact : selection.perle1@gmail.com',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Données collectées',
    content: 'Le site ne collecte pas de données personnelles directement. Aucune création de compte ni formulaire d\'inscription n\'est requis pour naviguer sur le site.',
  },
  {
    icon: 'ri-cookie-line',
    title: 'Cookies',
    items: [
      'Des cookies peuvent être utilisés afin de mesurer l\'audience et améliorer l\'expérience utilisateur.',
      'Ces cookies sont strictement liés aux outils de suivi tiers (voir ci-dessous).',
      'L\'utilisateur peut accepter ou refuser les cookies via le bandeau prévu à cet effet.',
      'En cas de refus, aucun cookie de tracking n\'est déposé sur votre appareil.',
    ],
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Outils utilisés',
    tools: [
      { name: 'Google Analytics', icon: 'ri-google-line', desc: 'Mesure d\'audience et analyse du comportement de navigation (données anonymisées).' },
      { name: 'Meta Pixel', icon: 'ri-facebook-fill', desc: 'Ciblage publicitaire et mesure des conversions via Facebook/Instagram.' },
      { name: 'Pinterest Tag', icon: 'ri-pinterest-line', desc: 'Données de navigation anonymes pour le retargeting publicitaire Pinterest.' },
    ],
  },
  {
    icon: 'ri-hand-coin-line',
    title: 'Consentement',
    content: 'Conformément au RGPD et aux recommandations de la CNIL, les outils de suivi (Google Analytics, Meta Pixel, Pinterest Tag) ne sont activés qu\'après accord explicite de l\'utilisateur via le bandeau de consentement affiché à la première visite.',
  },
  {
    icon: 'ri-lock-password-line',
    title: 'Vos droits (RGPD)',
    items: [
      'Droit d\'accès à vos données personnelles.',
      'Droit de rectification des informations inexactes.',
      'Droit à l\'effacement (droit à l\'oubli).',
      'Droit d\'opposition au traitement de vos données.',
      'Droit à la portabilité de vos données.',
    ],
    footer: 'Pour exercer ces droits, contactez : selection.perle1@gmail.com',
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Fil d'Ariane">
            <Link to="/" className="hover:text-pink-500 transition-colors cursor-pointer">Accueil</Link>
            <i className="ri-arrow-right-s-line" />
            <span className="text-gray-700 font-medium">Politique de confidentialité</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-2xl px-8 py-10 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                <i className="ri-shield-check-line text-pink-500 text-lg" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Politique de confidentialité</h1>
            </div>
            <p className="text-sm text-gray-400">
              Conformément au <strong className="text-gray-600">Règlement Général sur la Protection des Données (RGPD)</strong> — Règlement UE 2016/679.
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

                {'tools' in section && section.tools && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Ce site utilise des outils de suivi susceptibles de collecter des données de navigation anonymes, uniquement avec votre consentement :
                    </p>
                    {section.tools.map((tool) => (
                      <div key={tool.name} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                        <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center shrink-0">
                          <i className={`${tool.icon} text-gray-600 text-sm`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-0.5">{tool.name}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.items && (
                  <div className="space-y-2.5">
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
                    {'footer' in section && section.footer && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-600">
                          {(section.footer as string).replace('selection.perle1@gmail.com', '')}
                          <a href="mailto:selection.perle1@gmail.com" className="text-pink-500 hover:underline font-medium">
                            selection.perle1@gmail.com
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Gérer cookies CTA */}
          <div className="mt-6 bg-gray-900 rounded-2xl px-8 py-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-white font-semibold text-sm mb-1">Gérer vos préférences cookies</p>
              <p className="text-gray-400 text-xs">Modifiez vos choix à tout moment.</p>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('perle_cookie_consent');
                localStorage.removeItem('perle_cookie_consent_date');
                window.location.reload();
              }}
              className="bg-pink-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Modifier mes cookies
            </button>
          </div>

          {/* Liens croisés */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link to="/mentions-legales" className="flex-1 flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-pink-200 hover:bg-pink-50 transition-all cursor-pointer group">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Lire aussi</p>
                <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors text-sm">Mentions légales</p>
              </div>
              <i className="ri-arrow-right-line text-gray-400 group-hover:text-pink-500 transition-colors" />
            </Link>
            <Link to="/cgu" className="flex-1 flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-pink-200 hover:bg-pink-50 transition-all cursor-pointer group">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Lire aussi</p>
                <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors text-sm">Conditions générales d'utilisation</p>
              </div>
              <i className="ri-arrow-right-line text-gray-400 group-hover:text-pink-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

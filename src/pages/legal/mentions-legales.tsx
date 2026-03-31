import Layout from '../../components/feature/Layout';
import { Link } from 'react-router-dom';

export default function MentionsLegales() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Fil d'Ariane">
            <Link to="/" className="hover:text-pink-500 transition-colors cursor-pointer">Accueil</Link>
            <i className="ri-arrow-right-s-line" />
            <span className="text-gray-700 font-medium">Mentions légales</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-2xl px-8 py-10 mb-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                <i className="ri-file-text-line text-pink-500 text-lg" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Mentions légales</h1>
            </div>
            <p className="text-sm text-gray-400">Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
          </div>

          {/* Éditeur */}
          <section className="bg-white rounded-2xl px-8 py-8 mb-4 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <i className="ri-user-line text-pink-500" />
              Éditeur du site
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Nom</p>
                  <p className="font-semibold">RICHARD Fabrice</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Statut</p>
                  <p className="font-semibold">Entrepreneur individuel</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">SIRET</p>
                  <p className="font-semibold">440 461 994 00020</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">RCS</p>
                  <p className="font-semibold">Brest, France</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:col-span-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:selection.perle1@gmail.com" className="font-semibold text-pink-500 hover:underline">
                    selection.perle1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Site */}
          <section className="bg-white rounded-2xl px-8 py-8 mb-4 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <i className="ri-global-line text-pink-500" />
              Informations du site
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Nom du site</p>
                  <p className="font-semibold">Sélection-Perle</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">URL</p>
                  <a href="https://selection-perle-v2.pages.dev/" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-500 hover:underline break-all">
                    selection-perle-v2.pages.dev
                  </a>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 sm:col-span-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Directeur de publication</p>
                  <p className="font-semibold">RICHARD Fabrice</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="bg-white rounded-2xl px-8 py-8 mb-4 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <i className="ri-server-line text-pink-500" />
              Hébergement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Hébergeur</p>
                <p className="font-semibold text-gray-700">Cloudflare, Inc.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Adresse</p>
                <p className="font-semibold text-gray-700">101 Townsend St, San Francisco, CA 94107, USA</p>
              </div>
            </div>
          </section>

          {/* Activité */}
          <section className="bg-white rounded-2xl px-8 py-8 mb-4 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <i className="ri-store-line text-pink-500" />
              Activité
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Site de présentation et de recommandation de produits via des liens affiliés (AliExpress et autres plateformes partenaires).
            </p>
          </section>

          {/* Liens vers autres pages */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link to="/cgu" className="flex-1 flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-pink-200 hover:bg-pink-50 transition-all cursor-pointer group">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Lire aussi</p>
                <p className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors text-sm">Conditions générales d'utilisation</p>
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

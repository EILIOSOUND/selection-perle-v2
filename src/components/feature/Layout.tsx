import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { path: '/', name: 'Accueil' },
  { path: '/category/shopping', name: 'Shopping' },
  { path: '/category/bien-etre', name: 'Bien-être' },
  { path: '/category/tech', name: 'Tech' },
  { path: '/category/loisirs', name: 'Loisirs' }
];

function NavLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
        isActive ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`} role="banner">
        {/* Top Bar */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 cursor-pointer" aria-label="Retour à l'accueil">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <i className="ri-gift-line text-xl text-white" aria-hidden="true"></i>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">La sélection</div>
                  <div className="text-xs text-gray-500">de Perle</div>
                </div>
              </Link>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <label htmlFor="search-desktop" className="sr-only">Rechercher un produit</label>
                  <input
                    id="search-desktop"
                    type="search"
                    placeholder="Rechercher un produit..."
                    className="w-full px-6 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
                    aria-label="Rechercher un produit"
                  />
                  <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden mt-4">
              <div className="relative w-full">
                <label htmlFor="search-mobile" className="sr-only">Rechercher un produit</label>
                <input
                  id="search-mobile"
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full px-6 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label="Rechercher un produit"
                />
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white" role="navigation" aria-label="Navigation principale">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-center gap-8 py-4">
              <NavLink to="/" label="Accueil" />
              <NavLink to="/category/shopping" label="Shopping" />
              <NavLink to="/category/bien-etre" label="Bien-être" />
              <NavLink to="/category/tech" label="Tech" />
              <NavLink to="/category/loisirs" label="Loisirs" />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32" role="main">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-16" role="contentinfo">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* À propos */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">À propos</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Découvrez ma sélection personnelle des meilleurs produits du web. Des trouvailles uniques, testées et approuvées pour vous faciliter la vie.
              </p>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Liens rapides</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/category/shopping" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Shopping
                  </Link>
                </li>
                <li>
                  <Link to="/category/bien-etre" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Bien-être
                  </Link>
                </li>
                <li>
                  <Link to="/category/tech" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Tech
                  </Link>
                </li>
                <li>
                  <Link to="/category/loisirs" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Loisirs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Suivez-nous */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Suivez-nous</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/perle.ling/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all shadow-sm cursor-pointer"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <i className="ri-instagram-line text-xl text-white" aria-hidden="true"></i>
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61576318491090" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all shadow-sm cursor-pointer"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <i className="ri-facebook-fill text-xl text-white" aria-hidden="true"></i>
                </a>
                <a 
                  href="https://x.com/PerleLing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all shadow-sm cursor-pointer"
                  aria-label="Suivez-nous sur Twitter"
                >
                  <i className="ri-twitter-x-line text-xl text-white" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Barre de copyright */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2025 La sélection de Perle. Tous droits réservés.
              </p>
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-pink-500 transition-colors cursor-pointer"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
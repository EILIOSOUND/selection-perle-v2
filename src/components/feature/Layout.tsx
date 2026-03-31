import { ReactNode, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: ReactNode;
}

const shoppingSubLinks = [
  { path: '/shopping/femme', label: 'Femme', icon: 'ri-women-line', desc: 'Mode & élégance' },
  { path: '/shopping/homme', label: 'Homme', icon: 'ri-men-line', desc: 'Style masculin' },
  { path: '/shopping/enfant', label: 'Enfant', icon: 'ri-bear-smile-line', desc: 'Confort & jeu' },
  { path: '/shopping/unisexe', label: 'Unisexe', icon: 'ri-infinity-line', desc: 'Mode sans genre' },
];

function NavLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-sm font-medium tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
        isActive
          ? 'text-black border-b-2 border-pink-500 pb-1'
          : 'text-gray-600 hover:text-pink-500'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

function ShoppingDropdown() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = location.pathname.startsWith('/shopping') || location.pathname === '/category/shopping';

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
          isActive
            ? 'text-black border-b-2 border-pink-500 pb-1'
            : 'text-gray-600 hover:text-pink-500'
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Shopping
        <span className={`w-3.5 h-3.5 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <i className="ri-arrow-down-s-line text-base" />
        </span>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
        role="menu"
      >
        {/* Arrow */}
        <div className="flex justify-center mb-1">
          <div className="w-2.5 h-2.5 bg-[#1a1a24] rotate-45 border-t border-l border-white/10" />
        </div>

        {/* Panel */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #1a1a24 0%, #141419 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          <div className="px-3 pt-3 pb-1">
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold px-2 mb-2">Univers Shopping</p>
          </div>
          <div className="px-3 pb-3 grid grid-cols-2 gap-2">
            {shoppingSubLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                role="menuitem"
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/8 transition-colors cursor-pointer group"
                style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
              >
                <div className="w-9 h-9 rounded-lg bg-pink-500/15 flex items-center justify-center shrink-0 group-hover:bg-pink-500/25 transition-colors">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <i className={`${link.icon} text-pink-400 text-base`} />
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{link.label}</div>
                  <div className="text-xs text-white/35 group-hover:text-white/50 transition-colors">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="px-6 pb-4 pt-1 border-t border-white/6">
            <Link
              to="/category/shopping"
              className="flex items-center justify-center gap-2 text-xs text-white/40 hover:text-pink-400 transition-colors cursor-pointer py-1"
            >
              Voir tout le shopping
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </div>
    </div>
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.07)]' : ''
        }`}
        role="banner"
      >
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
                  <div className="text-lg font-semibold text-black">La sélection</div>
                  <div className="text-xs text-gray-400 tracking-wide">de Perle</div>
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
                    className="w-full px-6 py-3 pl-12 bg-[#F5F5F5] border border-gray-200 rounded-full text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all"
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
                  className="w-full px-6 py-3 pl-12 bg-[#F5F5F5] border border-gray-200 rounded-full text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  aria-label="Rechercher un produit"
                />
                <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white border-b border-gray-100" role="navigation" aria-label="Navigation principale">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-center gap-8 py-4">
              <NavLink to="/" label="Accueil" />
              <ShoppingDropdown />
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
                  <Link to="/shopping/femme" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Shopping Femme
                  </Link>
                </li>
                <li>
                  <Link to="/shopping/homme" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Shopping Homme
                  </Link>
                </li>
                <li>
                  <Link to="/shopping/enfant" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Shopping Enfant
                  </Link>
                </li>
                <li>
                  <Link to="/shopping/unisexe" className="text-sm text-gray-300 hover:text-pink-500 transition-colors cursor-pointer flex items-center gap-2">
                    <i className="ri-arrow-right-s-line text-pink-500" aria-hidden="true"></i>
                    Shopping Unisexe
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
                  href="https://www.instagram.com/selection_perle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all shadow-sm cursor-pointer"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <i className="ri-instagram-line text-xl text-white" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61576794599347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all shadow-sm cursor-pointer"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <i className="ri-facebook-fill text-xl text-white" aria-hidden="true"></i>
                </a>
                <a
                  href="https://x.com/selectionperle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all shadow-sm cursor-pointer"
                  aria-label="Suivez-nous sur X (Twitter)"
                >
                  <i className="ri-twitter-x-line text-xl text-white" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@selection_prele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all shadow-sm cursor-pointer"
                  aria-label="Suivez-nous sur TikTok"
                >
                  <i className="ri-tiktok-line text-xl text-white" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Barre de copyright */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2026 La sélection de Perle. Tous droits réservés.
              </p>
              <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
                <Link to="/mentions-legales" className="text-sm text-gray-400 hover:text-pink-400 transition-colors cursor-pointer whitespace-nowrap">
                  Mentions légales
                </Link>
                <Link to="/cgu" className="text-sm text-gray-400 hover:text-pink-400 transition-colors cursor-pointer whitespace-nowrap">
                  CGU
                </Link>
                <Link to="/politique-de-confidentialite" className="text-sm text-gray-400 hover:text-pink-400 transition-colors cursor-pointer whitespace-nowrap">
                  Confidentialité
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem('perle_cookie_consent');
                    localStorage.removeItem('perle_cookie_consent_date');
                    window.location.reload();
                  }}
                  className="text-sm text-gray-400 hover:text-pink-400 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Gérer mes cookies
                </button>
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

          {/* Barre de réassurance */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                🔒 <span>Paiement sécurisé</span>
              </span>
              <span className="hidden sm:block text-gray-600">|</span>
              <span className="flex items-center gap-2">
                🚚 <span>Livraison suivie</span>
              </span>
              <span className="hidden sm:block text-gray-600">|</span>
              <span className="flex items-center gap-2">
                ⭐ <span>Produits populaires</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bannière RGPD */}
      <CookieConsent />
    </div>
  );
}
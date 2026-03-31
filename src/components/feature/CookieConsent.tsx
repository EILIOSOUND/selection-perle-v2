import { useState, useEffect } from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

interface CookieConsentProps {
  onPreferencesReset?: () => void;
}

export default function CookieConsent({ onPreferencesReset }: CookieConsentProps) {
  const { status, accept, refuse, reset } = useCookieConsent();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (status === null) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleAccept = () => {
    setLeaving(true);
    setTimeout(() => {
      accept();
      setVisible(false);
    }, 280);
  };

  const handleRefuse = () => {
    setLeaving(true);
    setTimeout(() => {
      refuse();
      setVisible(false);
    }, 280);
  };

  const handleReset = () => {
    reset();
    setLeaving(false);
    setVisible(true);
    if (onPreferencesReset) onPreferencesReset();
  };

  if (!visible && status !== null) {
    return (
      <button
        onClick={handleReset}
        className="fixed bottom-4 left-4 z-50 w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors cursor-pointer flex items-center justify-center"
        aria-label="Gérer mes préférences cookies"
        title="Gérer mes préférences cookies"
      >
        <i className="ri-shield-check-line text-white text-base" />
      </button>
    );
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        leaving ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Gestion des cookies"
    >
      <div className="bg-white border-t border-gray-100 px-4 py-5 md:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">

            {/* Texte */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-shield-check-line text-pink-500 text-lg" />
                </div>
                <h2 className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                  Vos préférences cookies
                </h2>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Nous utilisons des cookies pour analyser notre audience et améliorer votre expérience (Google Analytics, Meta Pixel, Pinterest).
                Ces cookies ne sont activés qu&apos;avec votre accord.{' '}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-pink-500 underline underline-offset-2 hover:text-pink-600 cursor-pointer whitespace-nowrap"
                >
                  {showDetails ? 'Masquer les détails' : 'En savoir plus'}
                </button>
              </p>

              {/* Détails cookies */}
              {showDetails && (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    {
                      icon: 'ri-bar-chart-line',
                      name: 'Google Analytics',
                      desc: 'Mesure d\'audience anonyme du site',
                    },
                    {
                      icon: 'ri-facebook-circle-line',
                      name: 'Meta Pixel',
                      desc: 'Publicité ciblée sur Facebook & Instagram',
                    },
                    {
                      icon: 'ri-pinterest-line',
                      name: 'Pinterest Tag',
                      desc: 'Suivi des conversions Pinterest',
                    },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className="flex items-start gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                        <i className={`${c.icon} text-pink-400 text-sm`} />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-800">{c.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:w-48 shrink-0">
              <button
                onClick={handleAccept}
                className="flex-1 lg:flex-none px-5 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                Tout accepter
              </button>
              <button
                onClick={handleRefuse}
                className="flex-1 lg:flex-none px-5 py-2.5 rounded-full border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                Continuer sans accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

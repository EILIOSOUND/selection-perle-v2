import { useState } from 'react';

export default function AffiliateDisclaimer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-amber-50 border-y border-amber-200">
      <div className="container mx-auto px-4 lg:px-8 py-3">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
            <i className="ri-information-line text-amber-600 text-base" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong className="font-semibold">Liens affiliés —</strong>{' '}
              Certains liens présents sur cette page sont des liens affiliés (AliExpress et autres partenaires).
              {!expanded && (
                <>
                  {' '}
                  <button
                    onClick={() => setExpanded(true)}
                    className="text-amber-700 underline underline-offset-2 font-medium cursor-pointer whitespace-nowrap hover:text-amber-900 transition-colors"
                  >
                    En savoir plus
                  </button>
                </>
              )}
            </p>

            {expanded && (
              <p className="text-sm text-amber-700 mt-2 leading-relaxed">
                En cliquant sur ces liens et en effectuant un achat, une commission peut être perçue par
                l&apos;éditeur du site — <strong>sans aucun surcoût pour vous</strong>. Les produits sont
                sélectionnés de manière indépendante, sur la base de leur qualité et de leur popularité.
                Cette rémunération ne modifie en rien notre ligne éditoriale ni l&apos;impartialité de nos
                recommandations.{' '}
                <button
                  onClick={() => setExpanded(false)}
                  className="text-amber-700 underline underline-offset-2 font-medium cursor-pointer hover:text-amber-900 transition-colors whitespace-nowrap"
                >
                  Réduire
                </button>
              </p>
            )}
          </div>

          {/* CGU link */}
          <a
            href="/cgu"
            className="hidden sm:flex items-center gap-1 text-xs text-amber-600 hover:text-amber-800 transition-colors shrink-0 cursor-pointer whitespace-nowrap mt-0.5"
            rel="nofollow"
          >
            CGU
            <span className="w-3 h-3 flex items-center justify-center">
              <i className="ri-arrow-right-s-line" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

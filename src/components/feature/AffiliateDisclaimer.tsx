export default function AffiliateDisclaimer() {
  return (
    <div className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-3">
        <p className="text-xs text-gray-400 leading-relaxed text-center">
          <span className="w-3 h-3 inline-flex items-center justify-center mr-1">
            <i className="ri-links-line text-gray-400" />
          </span>
          Certains liens de cette page sont des liens affiliés — une commission peut être perçue sans surcoût pour vous.{' '}
          <a href="/cgu" className="underline underline-offset-2 hover:text-gray-600 transition-colors cursor-pointer" rel="nofollow">
            En savoir plus
          </a>
        </p>
      </div>
    </div>
  );
}

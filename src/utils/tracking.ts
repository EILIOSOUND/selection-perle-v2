/** Wrapper sécurisé pour les événements Meta Pixel */
export function trackFbq(event: string, params?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params);
  }
}

/** Wrapper sécurisé pour les événements Google Analytics */
export function trackGtag(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

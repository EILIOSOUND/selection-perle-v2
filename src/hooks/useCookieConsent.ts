import { useState, useEffect, useCallback } from 'react';

export type ConsentStatus = 'accepted' | 'refused' | null;

const STORAGE_KEY = 'perle_cookie_consent';
const STORAGE_DATE_KEY = 'perle_cookie_consent_date';

export function useCookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'refused') return stored;
    return null;
  });

  // On mount: if already accepted, fire trackers
  useEffect(() => {
    if (status === 'accepted' && typeof window.__initTrackers === 'function') {
      window.__initTrackers();
    }
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    localStorage.setItem(STORAGE_DATE_KEY, new Date().toISOString());
    setStatus('accepted');
    if (typeof window.__initTrackers === 'function') {
      window.__initTrackers();
    }
  }, []);

  const refuse = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'refused');
    localStorage.setItem(STORAGE_DATE_KEY, new Date().toISOString());
    setStatus('refused');
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_DATE_KEY);
    setStatus(null);
  }, []);

  const consentDate = localStorage.getItem(STORAGE_DATE_KEY);

  return { status, accept, refuse, reset, consentDate };
}

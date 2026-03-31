/// <reference types="vite/client" />

interface Window {
  __initTrackers?: () => void;
  __trackersLoaded?: boolean;
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  pintrk?: ((...args: unknown[]) => void) & { queue?: unknown[]; version?: string };
}

declare const __BASE_PATH__: string;

interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js',
    targetId: string | Date,
    config?: Record<string, unknown>
  ) => void;
  fbq?: (
    command: 'init' | 'track' | 'trackCustom',
    eventName: string,
    parameters?: Record<string, unknown>
  ) => void;
  REACT_APP_NAVIGATE?: (path: string) => void;
}

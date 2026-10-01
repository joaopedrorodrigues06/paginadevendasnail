// Meta Pixel — carregado somente após aceite de cookies (ver CookieConsent).
export const META_PIXEL_ID = "1117757374123405";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; callMethod?: (...a: unknown[]) => void; push?: (...a: unknown[]) => void; loaded?: boolean; version?: string };
    _fbq?: Window["fbq"];
  }
}

let loaded = false;

export function loadMetaPixel() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  if (!window.fbq) {
    const n: NonNullable<Window["fbq"]> = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod(...args);
      } else {
        n.queue?.push(args);
      }
    };
    n.queue = [];
    n.loaded = true;
    n.version = "2.0";
    window.fbq = n;
    window._fbq = n;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq!("init", META_PIXEL_ID);
  window.fbq!("track", "PageView");
}

export function trackInitiateCheckout() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      value: 78.0,
      currency: "BRL",
      content_name: "Nail Designer Pro 4.0",
    });
  }
}


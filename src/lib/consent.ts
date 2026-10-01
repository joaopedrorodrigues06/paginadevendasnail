export type ConsentChoice = "granted" | "denied";

export interface ConsentRecord {
  choice: ConsentChoice;
  at: string;
  version: number;
}

const KEY = "ndp-cookie-consent";
export const CONSENT_VERSION = 1;

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.choice !== "granted" && parsed.choice !== "denied") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = {
    choice,
    at: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  window.localStorage.setItem(KEY, JSON.stringify(record));
  return record;
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("ndp:open-cookie-consent"));
}

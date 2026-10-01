import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getConsent, setConsent, type ConsentChoice } from "@/lib/consent";
import { loadMetaPixel } from "@/lib/meta-pixel";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = getConsent();
    if (!stored) {
      setOpen(true);
    } else if (stored.choice === "granted") {
      loadMetaPixel();
    }

    const reopen = () => setOpen(true);
    window.addEventListener("ndp:open-cookie-consent", reopen);
    return () => window.removeEventListener("ndp:open-cookie-consent", reopen);
  }, []);

  const decide = (choice: ConsentChoice) => {
    setConsent(choice);
    setOpen(false);
    if (choice === "granted") loadMetaPixel();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-lg rounded-2xl bg-ink p-5 text-ink-foreground shadow-elegant sm:bottom-6"
    >
      <p className="text-sm leading-relaxed">
        Usamos cookies e o Pixel do Meta para medir o desempenho dos nossos anúncios e melhorar
        sua experiência. Você pode aceitar ou recusar — e mudar sua escolha a qualquer momento.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={() => decide("granted")}
          className="rounded-full bg-rose-gradient px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:scale-[1.02]"
        >
          Aceitar
        </button>
        <button
          onClick={() => decide("denied")}
          className="rounded-full border border-ink-foreground/40 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-ink-foreground transition hover:border-gold"
        >
          Recusar
        </button>
        <Link
          to="/privacidade"
          className="ml-auto text-xs text-ink-foreground/70 underline-offset-4 hover:text-gold hover:underline"
        >
          Política de Privacidade
        </Link>
      </div>
    </div>
  );
}

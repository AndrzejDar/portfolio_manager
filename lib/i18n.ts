"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import pl from "./translations/pl.json";

// Language detection runs post-mount inside I18nProvider (see
// components/i18n-provider.tsx) to keep SSR and first client paint identical.
// Server and first client render are always English; user preference is
// applied after hydration to avoid React text-content mismatches (#418/#425).
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        pl: { translation: pl },
      },
      lng: "en",
      fallbackLng: "en",
      supportedLngs: ["en", "pl"],
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;

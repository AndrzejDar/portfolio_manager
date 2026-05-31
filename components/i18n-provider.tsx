"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

const STORAGE_KEY = "i18nextLng";

const detectLanguage = (): "en" | "pl" => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pl") return stored;
  } catch {
    // localStorage may be unavailable (private mode, denied permissions)
  }
  const nav = window.navigator.language?.split("-")[0]?.toLowerCase();
  return nav === "pl" ? "pl" : "en";
};

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const target = detectLanguage();
    if (i18n.language !== target) {
      i18n.changeLanguage(target);
    }

    const persist = (lng: string) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, lng);
      } catch {
        // ignore
      }
    };
    i18n.on("languageChanged", persist);
    return () => {
      i18n.off("languageChanged", persist);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;

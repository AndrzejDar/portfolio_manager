"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const current = (i18n.language || "en").split("-")[0];

  const setLang = (lng: "en" | "pl") => {
    if (current !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  const baseBtn =
    "h-full px-3 text-sm font-medium rounded transition-colors";
  const activeCls = "bg-black text-white";
  const inactiveCls = "text-gray-500 hover:text-black";

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center border rounded-md h-10 p-0.5"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={current === "en"}
        aria-label={t("lang.switchToEnglish")}
        className={cn(baseBtn, current === "en" ? activeCls : inactiveCls)}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("pl")}
        aria-pressed={current === "pl"}
        aria-label={t("lang.switchToPolish")}
        className={cn(baseBtn, current === "pl" ? activeCls : inactiveCls)}
      >
        PL
      </button>
    </div>
  );
};

export default LanguageToggle;

"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale, t } = useLanguage();
  const nextLabel = locale === "en" ? "VI" : "EN";
  const aria = locale === "en" ? t.common.switchToVi : t.common.switchToEn;

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={`theme-toggle lang-toggle ${className}`}
      aria-label={aria}
      title={aria}
    >
      <span className="text-[0.68rem] font-medium tracking-[0.14em]">{nextLabel}</span>
    </button>
  );
}

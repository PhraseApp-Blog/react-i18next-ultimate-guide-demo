import React from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "../config/i18n";

function LanguageSwitcher({ onChange }) {
  const { i18n } = useTranslation();

  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) => onChange(e.target.value)}
      >
        {supportedLanguages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import {
  defaultLanguage,
  supportedLanguages,
} from "../config/i18n";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    // lng will override the browser detector if provided
    // lng: defaultLanguage,
    supportedLngs: supportedLanguages.map(
      (lang) => lang.code,
    ),
    fallbackLng: defaultLanguage,
    // eagerly loaded namespaces
    // ns: ["translation", "navbar"],
    backend: {
      loadPath: "/lang/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true, // this is the default value
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18next;

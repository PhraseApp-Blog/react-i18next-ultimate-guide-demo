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

    // Good idea to provide a fallback when loading
    // translations from a back-end, to avoid unsuccessful
    // attempts to load default fallbackLng ("dev").
    fallbackLng: defaultLanguage,

    // Eagerly loaded languages
    // preload: ["en", "ar"],

    // Back-end config
    // backend: {
    //   loadPath: "/locales/{{lng}}/{{ns}}.json",
    // },

    interpolation: {
      // React will escape output values, so we don't need
      // i18next to do it.
      escapeValue: false,
    },

    // react-i18next config
    // react: {
    //   useSuspense: true,
    // },

    debug: process.env.NODE_ENV === "development",
  });

export default i18next;

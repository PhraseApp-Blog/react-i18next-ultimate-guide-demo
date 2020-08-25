import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: "en",
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

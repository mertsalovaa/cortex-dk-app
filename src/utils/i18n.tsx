import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

function getLang() {
  let lng = window.location.pathname.slice(1, 3);
  if (lng.length === 0) {
    lng = "en";
  }
  return lng;
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `/localization/{{lng}}.json`,
    },
    debug: false,
    lng: "en",
    fallbackLng: getLang(),
    supportedLngs: ["en", "zh"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

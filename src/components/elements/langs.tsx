import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const langPathOptional = "/:lang?";

export const langs: { [key: string]: string } = {
  en: "en",
  zh: "zh",
};

function getLocation(location: string, lang: string) {
  if (location) {
    return `${location.replace(`/${lang}`, "")}`;
  }
  return ``;
}

const Langs = ({ theme }: { theme: string }) => {
  const { i18n } = useTranslation();
  return (
    <div>
      {Object.keys(langs).map((langKey) => (
        <Link
          className={`px-1 text-2xl ${theme === "light" ? "text-dark" : "text-light"} hover:opacity-80 ${i18n.language === langKey && "opacity-50"}`}
          key={langKey}
          to={`/${langKey}${getLocation(window.location.pathname, i18n.language)}`}
          onClick={(e) => changeLanguage(langKey)}
        >
          {langKey.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default Langs;

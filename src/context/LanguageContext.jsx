import { createContext, useState, useContext } from "react";
import en from "../i18n/en.json";
import pt from "../i18n/pt.json";

const langs = { en, pt };
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("pt");

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");
  const t = (key, options = {}) => {
    const keys = key.split(".");
    let result = langs[lang];

    for (let k of keys) {
      if (result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
    }
    if (Array.isArray(result) && options.returnObjects) {
      return result;
    }

    if (typeof result === "object") return result;

    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

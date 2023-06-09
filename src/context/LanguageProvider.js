import React, { createContext, useState } from "react";
import { translations } from "../text/translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en");
  };

  const getTranslation = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, getTranslation }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

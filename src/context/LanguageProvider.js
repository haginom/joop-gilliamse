import React, { createContext, useState } from "react";
// import en from './en.json';
// import nl from './nl.json';

// create the context object
export const LanguageContext = createContext();

// create a provider component to provide the language state to children components
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

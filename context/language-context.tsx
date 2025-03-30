"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialiser avec la langue stockée dans localStorage ou le français par défaut
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    // Récupérer la langue depuis localStorage au chargement
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Mettre à jour localStorage lorsque la langue change
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleLanguageChange }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

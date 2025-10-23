import React, { createContext, useContext } from 'react';
import { useLanguageStorage } from '../hooks/useLocalStorage';
import { getToastText } from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';
import contentData from '../data/content.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLanguageStorage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
    setTimeout(() => {
      toast.success(getToastText('save', newLanguage));
    }, 100); // state güncellendikten sonra sadece yeni dilde toast
  };

  const content = contentData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

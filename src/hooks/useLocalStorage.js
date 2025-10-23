import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import contentData from '../data/content.json';

export function getToastText(type, lang) {
  if (!lang || !contentData[lang] || !contentData[lang].toast) lang = 'en';
  return contentData[lang]?.toast?.[type] || contentData['en']?.toast?.[type] || '';
}

/**
 * Custom hook for managing localStorage with error handling
 * @param {string} key - The localStorage key
 * @param {*} initialValue - The initial value if no value exists in localStorage
 * @returns {[value, setValue]} - Current value and setter function
 */
export const useLocalStorage = (key, initialValue, language) => {
  // Get language from localStorage or default to 'en'

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    toast.error(getToastText('readError', language));
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      // Sadece language ve theme dışındaki anahtarlar için toast göster
      if (key !== 'language' && key !== 'theme') {
        toast.success(getToastText('save', language), { autoClose: 2000 });
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
      toast.error(getToastText('error', language));
    }
  };

  return [storedValue, setValue];
};

/**
 * Hook specifically for theme preferences
 */
export const useThemeStorage = (language) => {
  return useLocalStorage('theme', 'light', language);
};

/**
 * Hook specifically for language preferences
 */
export const useLanguageStorage = (language) => {
  return useLocalStorage('language', 'en', language);
};

/**
 * Hook for storing user preferences
 */
export const useUserPreferences = (language) => {
  return useLocalStorage('userPreferences', {
    theme: 'light',
    language: 'en',
    notifications: true
  }, language);
};
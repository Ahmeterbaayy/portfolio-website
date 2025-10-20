import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

/**
 * Custom hook for managing localStorage with error handling
 * @param {string} key - The localStorage key
 * @param {*} initialValue - The initial value if no value exists in localStorage
 * @returns {[value, setValue]} - Current value and setter function
 */
export const useLocalStorage = (key, initialValue) => {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
      toast.error('Veri okuma hatası oluştu!');
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      
      toast.success('Tercihleriniz kaydedildi!', { autoClose: 2000 });
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(`Error setting localStorage key "${key}":`, error);
      toast.error('Veri kaydetme hatası oluştu!');
    }
  };

  return [storedValue, setValue];
};

/**
 * Hook specifically for theme preferences
 */
export const useThemeStorage = () => {
  return useLocalStorage('theme', 'light');
};

/**
 * Hook specifically for language preferences
 */
export const useLanguageStorage = () => {
  return useLocalStorage('language', 'en');
};

/**
 * Hook for storing user preferences
 */
export const useUserPreferences = () => {
  return useLocalStorage('userPreferences', {
    theme: 'light',
    language: 'en',
    notifications: true
  });
};
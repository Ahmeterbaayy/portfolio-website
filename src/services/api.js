import axios from 'axios';
import { toast } from 'react-toastify';
import contentData from '../data/content.json';

// Base API configuration
const api = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get language from localStorage or default to 'en'

export function getToastText(type, lang) {
  if (!lang || !contentData[lang] || !contentData[lang].toast) lang = 'en';
  return contentData[lang]?.toast?.[type] || contentData['en']?.toast?.[type] || '';
}

// Request interceptor
// Not: API toast'ları için context'ten language parametresi iletilmeli. Aksi halde localStorage'dan okunur.
api.interceptors.request.use(
  (config) => {
    // config.language context'ten gelmeli, yoksa localStorage'dan alınır
  toast.info(getToastText('request', config.language), { autoClose: 1000 });
    return config;
  },
  (error) => {
  toast.error(getToastText('requestError', error?.config?.language));
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
  toast.success(getToastText('response', response.config?.language));
    return response;
  },
  (error) => {
    const errorMessage = error.response?.data?.error || getToastText('genericError', error?.config?.language);
    toast.error(errorMessage);


    return Promise.reject(error);
  }
);

// API Services
export const apiServices = {
  // Send user data to workintech endpoint
  sendToWorkintech: async (userData, language) => {
    try {
      const response = await api.post('/workintech', userData, { language });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get user data for demo purposes
  getUsers: async (language) => {
    try {
      const response = await api.get('/users', { language });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create user for demo purposes
  createUser: async (userData, language) => {
    try {
      const response = await api.post('/users', userData, { language });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default api;
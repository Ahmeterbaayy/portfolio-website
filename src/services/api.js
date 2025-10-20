import axios from 'axios';
import { toast } from 'react-toastify';

// Base API configuration
const api = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    toast.info('İstek gönderiliyor...', { autoClose: 1000 });
    return config;
  },
  (error) => {
    toast.error('İstek gönderilemedi!');
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    toast.success('Başarıyla gönderildi');
    return response;
  },
  (error) => {
    const errorMessage = error.response?.data?.error || 'Bir hata oluştu!';
    toast.error(errorMessage);
    return Promise.reject(error);
  }
);

// API Services
export const apiServices = {
  // Send user data to workintech endpoint
  sendToWorkintech: async (userData) => {
    try {
      const response = await api.post('/workintech', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get user data for demo purposes
  getUsers: async () => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create user for demo purposes
  createUser: async (userData) => {
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default api;
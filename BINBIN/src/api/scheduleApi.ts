import axios from 'axios';
import { sanitizeInput } from '../security/sanitize';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
});

// Request interceptor for sanitization and auth
apiClient.interceptors.request.use(config => {
  if (config.data) {
    config.data = sanitizeInput(config.data);
  }
  
  if (config.params) {
    config.params = sanitizeInput(config.params);
  }

  const token = localStorage.getItem('csrfToken');
  if (token) {
    config.headers['X-CSRF-Token'] = token;
  }

  return config;
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    if (error.response?.status === 403) {
      // Handle forbidden
    }
    return Promise.reject(error);
  }
);

export const fetchSchedule = async (weekNumber: number, year: number) => {
  try {
    const response = await apiClient.get(`/schedule`, {
      params: {
        week: weekNumber,
        year: year
      },
      validateStatus: status => status < 500
    });
    
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
import axios from 'axios';

// Axios yapılandırmasını oluşturun
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // API adresinizi buraya ekleyin
});

// Axios interceptor ekleyin
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

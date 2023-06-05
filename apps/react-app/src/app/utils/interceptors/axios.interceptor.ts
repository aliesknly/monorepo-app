import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_URL_BASE

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => error
);

export default axiosInstance;

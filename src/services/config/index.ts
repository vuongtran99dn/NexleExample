import { store } from '@/redux/store';
import { create } from 'apisauce';

export const BASE_URL = 'http://streaming.nexlesoft.com:3001/';
const api = create({
  baseURL: BASE_URL,
});

api.axiosInstance.interceptors.request.use(config => {
  const token = store.getState().authReducer.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

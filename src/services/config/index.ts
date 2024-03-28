import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'apisauce';

export const BASE_URL = 'http://streaming.nexlesoft.com:3001/';
const api = create({
  baseURL: BASE_URL,
});

api.addAsyncRequestTransform(request => async () => {
  const authToken = await AsyncStorage.getItem('TOKEN');
  if (!authToken) {
    return;
  }
  // request.headers?.Authorization = 'Bearer ' + authToken;
});

export default api;

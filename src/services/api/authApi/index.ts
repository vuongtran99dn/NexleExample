import api from '@/services/config';
import { ApiResponse } from 'apisauce';
import { getCategoriesResponse, signInPayload, signInResponse, signUpPayload, signUpResponse } from './types';

export const signUpApi = async (payload: signUpPayload): Promise<ApiResponse<signUpResponse>> => {
  return await api.post('auth/signup', payload);
};

export const signInApi = async (payload: signInPayload): Promise<ApiResponse<signInResponse>> => {
  return await api.post('auth/signin', payload);
};

export const getCategoriesApi = async (): Promise<ApiResponse<getCategoriesResponse>> => {
  return await api.get('categories');
};

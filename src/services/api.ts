import axios from 'axios';
import { Dog, Match, PaginatedResponse, AuthResponse } from '../types';

const API_BASE_URL = 'https://frontend-take-home-service.fetch.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const login = async (name: string, email: string): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', { name, email });
  return response.data;
};

export const fetchBreeds = async (): Promise<string[]> => {
  const response = await api.get('/dogs/breeds');
  return response.data;
};

export const searchDogs = async (query: any): Promise<PaginatedResponse> => {
  const response = await api.get('/dogs/search', { params: query });
  return response.data;
};

export const fetchDogsByIds = async (ids: string[]): Promise<Dog[]> => {
  const response = await api.post('/dogs', ids);
  return response.data;
};

export const matchDogs = async (ids: string[]): Promise<Match> => {
  const response = await api.post('/dogs/match', ids);
  return response.data;
};
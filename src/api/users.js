import { apiClient } from './client';

export const usersApi = {
  getAll: async () => {
    const response = await apiClient.get('/user');
    return response.data;
  },
  getById: async (id) => {
    const response = await apiClient.get(`/user/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await apiClient.post('/user', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await apiClient.put(`/user/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await apiClient.delete(`/user/${id}`);
    return response.data;
  }
};

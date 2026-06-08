import { apiClient } from './client';

export const coursesApi = {
  getAll: async () => {
    const response = await apiClient.get('/course');
    return response.data;
  },
  getById: async (id) => {
    const response = await apiClient.get(`/course/${id}`);
    return response.data;
  },
  create: async (data) => {
    const response = await apiClient.post('/course', data);
    return response.data;
  },
  update: async (id, data) => {
    const response = await apiClient.put(`/course/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await apiClient.delete(`/course/${id}`);
    return response.data;
  }
};

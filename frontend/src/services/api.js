import axios from 'axios';

// Use relative URLs so Vite's proxy handles routing in development
// and the same paths work in production behind a reverse proxy.
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
};

export const contactAPI = {
  submit: (data) => api.post('/contact', data),
};

export const statsAPI = {
  get: () => api.get('/stats'),
};

export default api;

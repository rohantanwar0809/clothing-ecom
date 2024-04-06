import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://91ebf079b52f4f91954ffce3934991e0.api.mockbin.io/',
  timeout: 6000,
  headers: { 'Content-Type': 'application/json' },
});

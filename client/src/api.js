import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:10000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Optional: use if you're handling auth cookies
});

export default api;

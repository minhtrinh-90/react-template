import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
  ? import.meta.env.VITE_BASE_URL
  : import.meta.env.BASE_URL;

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

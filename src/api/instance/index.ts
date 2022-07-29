import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const client = axios.create({
  baseURL,
});

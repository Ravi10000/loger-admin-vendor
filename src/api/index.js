import axios from 'axios';

// console.log(process.env.REACT_APP_API_URL);
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getAuthToken = () => localStorage.getItem('AvJO)%zOxm}S/iy');
export const setAuthToken = token =>
  localStorage.setItem('AvJO)%zOxm}S/iy', token);
export const removeAuthToken = () => localStorage.removeItem('AvJO)%zOxm}S/iy');

export default api;

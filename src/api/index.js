import axios from 'axios';

console.log(
  `%cAPI URL : ${process.env.REACT_APP_API_URL}`,
  'color: orange;font-weight: bold;background-color: #00ff0023;padding:10px 20px;border-radius: 20px;'
);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const accessTokenKey = process.env.REACT_APP_ACCESS_TOKEN_KEY;

export const getAuthToken = () => localStorage.getItem(accessTokenKey);

export const setAuthToken = token =>
  localStorage.setItem(accessTokenKey, token);

export const removeAuthToken = () => localStorage.removeItem(accessTokenKey);

export default api;

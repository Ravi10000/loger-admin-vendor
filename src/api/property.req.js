import api from './index';

export const updateProperty = data => api.putForm('/properties', data);
export const updateApartment = data => api.put('/apartments', data);
export const findProperty = (propertyId, select) =>
  api.get(`/properties/find/${propertyId}${select ? '?select=' + select : ''}`);
export const findApartment = (propertyId, select) =>
  api.get(`/apartments/${propertyId}${select ? '?select=' + select : ''}`);

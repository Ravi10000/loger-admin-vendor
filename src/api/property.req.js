import api from './index';

export const updateProperty = data => api.putForm('/properties', data);
export const updateApartment = data => api.put('/apartments', data);


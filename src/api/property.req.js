import api from './index';

export const updateProperty = data => api.putForm('/properties', data);
export const updateApartment = data => api.put('/apartments', data);
export const updateHotel = data => api.put('/hotels', data);
export const updateHotelRooms = data => api.putForm('/hotel-rooms', data);
export const findProperty = (propertyId, select) =>
  api.get(`/properties/find/${propertyId}${select ? '?select=' + select : ''}`);
export const findApartment = (propertyId, select) =>
  api.get(`/apartments/${propertyId}${select ? '?select=' + select : ''}`);

export const findHotel = (propertyId, select) =>
  api.get(`/hotels/${propertyId}${select ? '?select=' + select : ''}`);

export const findHotelRoom = (propertyId, roomName, select) =>
  api.get(
    `/hotel-rooms/${propertyId}/${roomName}${select ? '?select=' + select : ''}`
  );

export const findDistinctRooms = (propertyId, select, roomName) =>
  api.get(
    `/hotel-rooms/${propertyId}/distinct${select ? '?select=' + select : ''}`
  );
export const deleteHotelRooms = (propertyId, roomName) =>
  api.delete(`/hotel-rooms/${propertyId}/${roomName}`);

export const fetchMyProperties = ({ select, type, status }) =>
  api.get(
    `/properties/my-properties${'?select=' + select}${'&type=' + type}${
      '&status=' + status
    }`
  );

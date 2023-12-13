import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from 'src/api';
import {
  findApartment,
  findHotel,
  findHotelRoom,
  findProperty
} from 'src/api/properties.req';

export function usePropertyId() {
  const { propertyId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (propertyId !== 'new') {
      if (propertyId?.length !== 24) navigate('/property/new');
    } else if (
      pathname !== '/hotel/new/property' &&
      pathname !== '/apartment/new/place'
    ) {
      navigate('/property/new');
    }
  }, [propertyId, navigate, pathname]);
  return propertyId;
}

export function useIsHotel() {
  const { pathname } = useLocation();
  return pathname.includes('hotel');
}

export function useProperty(select = [], onSuccess) {
  const { propertyId } = useParams();
  const {
    data: property,
    isFetching,
    error
  } = useQuery({
    queryKey: ['property', propertyId, select],
    enabled: propertyId?.length === 24,
    queryFn: async ({ queryKey }) => {
      const res = await findProperty(propertyId, queryKey?.[2]?.join?.(' '));
      onSuccess?.(res?.data?.property);
      return res?.data?.property || null;
    }
  });

  return { property, isFetching, error };
}

export function useHotel(select = [], onSuccess) {
  const { propertyId } = useParams();
  const {
    data: hotel,
    isFetching,
    error
  } = useQuery({
    queryKey: ['hotel', propertyId, select],
    enabled: propertyId?.length === 24,
    queryFn: async ({ queryKey }) => {
      const res = await findHotel(propertyId, queryKey?.[2]?.join?.(' '));
      onSuccess?.(res?.data?.hotel);
      return res?.data?.hotel || null;
    }
  });

  return { hotel, isFetching, error };
}
export function useHotelRoom(select = [], onSuccess) {
  const { propertyId, roomName } = useParams();
  const {
    data: room,
    isFetching,
    error
  } = useQuery({
    queryKey: ['hotel-room', propertyId, roomName, select],
    enabled:
      propertyId?.length === 24 && roomName?.length > 0 && roomName !== 'new',
    queryFn: async ({ queryKey }) => {
      const res = await findHotelRoom(
        propertyId,
        roomName,
        queryKey?.[3]?.join?.(' ')
      );
      onSuccess?.(res?.data?.room);
      return res?.data?.room || null;
    }
  });

  return { room, isFetching, error };
}
export function useApartment(select = [], onSuccess) {
  const { propertyId } = useParams();
  const {
    data: apartment,
    isFetching,
    error
  } = useQuery({
    queryKey: ['apartment', propertyId, select],
    enabled: propertyId?.length === 24,
    queryFn: async ({ queryKey }) => {
      const res = await findApartment(propertyId, queryKey?.[2]?.join?.(' '));
      onSuccess?.(res?.data?.apartment);
      return res?.data?.apartment || null;
    }
  });

  return { apartment, isFetching, error };
}

export function usePropertyContent(select) {
  const isHotel = useIsHotel();
  const { propertyId } = useParams();
  const {
    data: content,
    isFetching,
    error
  } = useQuery({
    queryKey: [isHotel ? 'hotel' : 'apartment', propertyId, select],
    enabled: propertyId?.length === 24,
    initialData: {},
    queryFn: async ({ queryKey }) => {
      const res = isHotel
        ? await findHotel(propertyId, queryKey?.[2]?.join?.(' ') ?? '')
        : await findApartment(propertyId, queryKey?.[2]?.join?.(' ') ?? '');
      const content = isHotel ? res?.data?.hotel : res?.data?.apartment;
      return content;
    }
  });
  return { content, isFetching, error };
}

import { useQuery } from '@tanstack/react-query';
import api from 'src/api';

export function useBooking({ bookingId, select, onSuccess }) {
  const {
    data: booking,
    isFetching,
    error
  } = useQuery({
    queryKey: ['booking', select],
    queryFn: async () => {
      const res = await api.get(
        `/booking/one/${bookingId}?select=${select ? select?.join(' ') : ''}`
      );
      onSuccess?.(res?.data?.booking);
      return res?.data?.booking || {};
    }
  });
  return { booking, isFetching, error };
}

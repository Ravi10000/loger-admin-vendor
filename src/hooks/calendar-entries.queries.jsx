import { useQuery } from '@tanstack/react-query';
import api from 'src/api';

/**
 * Fetch calendar entries
 * @param config object : { from : dayjs date, to : dayjs date, default next day of provided from date, propertyId : mongo id, onSuccess : function that will be executed with fetched entries as arguments }
 * @returns calendarEntries Object and other react-query props e.g. isFetching, error & isLoading etc.
 */
export function useCalendarEntries({ from, to, propertyId, onSuccess }) {
  const { data: calendarEntries, ...rest } = useQuery({
    queryKey: ['calendar-entries', propertyId, from?.format?.('YYYY-MM-DD')],
    enabled: !!propertyId && !!from,
    staleTime: 0,
    from,
    queryFn: async () => {
      if (!to) to = from.add(1, 'd');
      const { data } = await api.get(
        `/calendar?propertyId=${propertyId}&from=${from.format(
          'YYYY-MM-DD'
        )}&to=${to.format('YYYY-MM-DD')}`
      );
      const entries = data?.calendarEntries || [];
      onSuccess?.(entries);
      return entries;
    }
  });

  return { calendarEntries, ...rest };
}

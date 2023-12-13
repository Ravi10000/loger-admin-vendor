import { useQuery } from '@tanstack/react-query';
import { fetchMyProperties } from 'src/api/properties.req';

export function useProperties({ select = [], type, onSuccess, status }) {
  const {
    data: properties,
    isFetching,
    error
  } = useQuery({
    queryKey: ['properties', select],
    retry: 0,
    queryFn: async ({ queryKey }) => {
      const res = await fetchMyProperties({
        select: queryKey?.[2]?.join?.(' '),
        type,
        status
      });
      console.log({ data: res?.data });
      onSuccess?.(res?.data?.properties);
      return res?.data?.properties || null;
    }
  });

  return { properties, isFetching, error };
}

import { useQuery } from '@tanstack/react-query';
import api from 'src/api';

export function useContentItems({ type, status = 'active', onSuccess }) {
  const {
    data: contentItems,
    isFetching,
    error
  } = useQuery({
    queryKey: ['contentItems', { type }],
    initialData: [],
    queryFn: async () => {
      const res = await api.get(
        `/content-items?type=${type}&?status=${status}`
      );
      onSuccess?.(res?.data?.contentItems);
      return res?.data?.contentItems;
    }
  });
  return { contentItems, isFetching, error };
}

// import { clearIsFetching, setCurrentUser } from '#redux/user/user.actions';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import api, { getAuthToken, setAuthToken } from 'src/api';
import { useUserStore } from 'src/store/user';

const fetchUserDetails = async () => {
  const response = await api.get('/user', {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`
    }
  });
  if (response?.data?.accessToken) {
    setAuthToken(response.data.accessToken);
    api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.accessToken}`;
  }
  return response;
};
function useFetchUser() {
  const { setUser, setIsFetching } = useUserStore(state => state);
  // console.log({ user });
  const { isError, data } = useQuery({
    queryKey: ['user'],
    // enabled: !!getAuthToken() && !user,
    retry: 0,
    queryFn: async () => {
      const { data } = await fetchUserDetails();
      console.log({ user: data?.user });
      setUser(data?.user);
      return data?.user;
    }
  });
  // console.log(data.isError, );
  useEffect(() => {
    if (isError) setIsFetching(false);
  }, [isError, setIsFetching]);
  return data;
}

export default useFetchUser;

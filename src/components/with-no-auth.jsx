import { useNavigate } from 'react-router-dom';
import { useUserStore } from 'src/store/user';
import { useEffect } from 'react';
import LoadingPage from 'src/pages/loading.page';

function WithNoAuth({ children, redirectTo }) {
  const isFetching = useUserStore(state => state.isFetching);
  const user = useUserStore(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFetching && user) {
      navigate(redirectTo);
    }
  }, [isFetching, user, redirectTo, navigate]);

  return isFetching ? <LoadingPage /> : children;
}

export default WithNoAuth;

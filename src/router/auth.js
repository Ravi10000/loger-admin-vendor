import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoader from 'src/components/SuspenseLoader';
import WithNoAuth from 'src/components/with-no-auth';

const Loader = Component => props =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Login = Loader(lazy(() => import('src/content/pages/auth/Login')));
const ForgotPassword = Loader(
  lazy(() => import('src/content/pages/auth/ForgotPassword'))
);
const Registration = Loader(
  lazy(() => import('src/content/pages/auth/Registration'))
);

const Verify = Loader(lazy(() => import('src/content/pages/auth/Verify')));

const authRoutes = [
  {
    path: '',
    element: <Navigate to="login" replace />
  },
  {
    path: 'login',
    element: (
      <WithNoAuth redirectTo={'/dashboard/groups/groups-home'}>
        <Login />
      </WithNoAuth>
    )
  },
  {
    path: 'forgot-password',
    element: (
      <WithNoAuth redirectTo={'/dashboard/groups/groups-home'}>
        <ForgotPassword />
      </WithNoAuth>
    )
  },
  {
    path: 'registration',
    element: (
      <WithNoAuth redirectTo={'/dashboard/groups/groups-home'}>
        <Registration />
      </WithNoAuth>
    )
  },
  {
    path: 'verify',
    element: (
      <WithNoAuth redirectTo={'/dashboard/groups/groups-home'}>
        <Verify />
      </WithNoAuth>
    )
  }
];

export default authRoutes;

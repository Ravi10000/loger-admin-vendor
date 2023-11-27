import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoader from 'src/components/SuspenseLoader';

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
    element: <Login />
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />
  },
  {
    path: 'registration',
    element: <Registration />
  },
  {
    path: 'verify',
    element: <Verify />
  }
];

export default authRoutes;

import { Navigate, Outlet } from 'react-router-dom';
import authRoutes from './auth';
import apartmentRoutes from './apartment';
import hotelRoutes from './hotel';
import BaseLayout from 'src/layout/BaseLayout';
import SideBarLayout from 'src/layout/SidebarLayout';
import dashboardRoutes from './dashboard';
import { useUserStore } from 'src/store/user';
import WithAuth from 'src/components/with-auth';
import { Suspense, lazy } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
import WithNoAuth from 'src/components/with-no-auth';
import Payment from 'src/content/Apartment/Payment';
const Loader = Component => props =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
const MainPage = Loader(lazy(() => import('src/content/MainPage')));

const router = [
  {
    path: '*',
    element: <Navigate to="auth" replace />
  },
  {
    path: '/payment-details',
    element: <Payment />
  },
  {
    path: 'auth',
    element: (
      <WithNoAuth redirectTo={'/property/new'}>
        <Outlet />
      </WithNoAuth>
    ),
    children: authRoutes
  },
  {
    path: '/property/new',
    element: (
      <WithAuth redirectTo={'/auth/login'}>
        <MainPage />
      </WithAuth>
    )
  },
  {
    // path: 'apartment/:propertyId',
    path: 'apartment/:propertyId',
    element: <BaseLayout />,
    children: apartmentRoutes
  },
  {
    path: 'hotel/:propertyId',
    element: <BaseLayout />,
    children: hotelRoutes
  },
  {
    path: 'dashboard',
    element: <SideBarLayout />,
    children: dashboardRoutes
  }
];

export default router;

import { Suspense, lazy } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = Component => props =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const MainPage = Loader(lazy(() => import('src/content/MainPage')));
const Boarding = Loader(lazy(() => import('src/content/Apartment/Boarding')));

const apartmentRoutes = [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: 'boarding',
    element: <Boarding />
  }
];

export default apartmentRoutes;

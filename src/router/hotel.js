import { Suspense, lazy } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = Component => props =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const MainPage = Loader(lazy(() => import('src/content/MainPage')));
const Boarding = Loader(lazy(() => import('src/content/Hotel/Boarding')));
const Listing = Loader(lazy(() => import('src/content/Hotel/Listing')));
const Oneboarding = Loader(lazy(() => import('src/content/Hotel/Oneboarding')));
const Property = Loader(lazy(() => import('src/content/Hotel/Property')));
const Location = Loader(lazy(() => import('src/content/Hotel/Location')));
const Rating = Loader(lazy(() => import('src/content/Hotel/Rating')));

const hotelRoutes = [
  {
    path: '',
    element: <MainPage />
  },
  {
    path: 'boarding',
    element: <Boarding />
  },
  {
    path: 'listing',
    element: <Listing />
  },
  {
    path: 'oneboarding',
    element: <Oneboarding />
  },
  {
    path: 'property',
    element: <Property />
  },
  {
    path: 'location',
    element: <Location />
  },
  {
    path: 'rating',
    element: <Rating />
  }
];
export default hotelRoutes;

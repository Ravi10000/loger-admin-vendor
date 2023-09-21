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
const Listing = Loader(lazy(() => import('src/content/Apartment/Listing')));
const Place = Loader(lazy(() => import('src/content/Apartment/Place')));
const Property = Loader(lazy(() => import('src/content/Apartment/Property')));
const Location = Loader(lazy(() => import('src/content/Apartment/Location')));
const PropertyDetail = Loader(
  lazy(() => import('src/content/Apartment/PropertyDetail'))
);
const BreakfastDetail = Loader(
  lazy(() => import('src/content/Apartment/BreakfastDetail'))
);
const Parking = Loader(lazy(() => import('src/content/Apartment/Parking')));
const Language = Loader(lazy(() => import('src/content/Apartment/Language')));
const Rules = Loader(lazy(() => import('src/content/Apartment/Rules')));
const HostProfile = Loader(
  lazy(() => import('src/content/Apartment/HostProfile'))
);
const Gallery = Loader(lazy(() => import('src/content/Apartment/Gallery')));
const Guest = Loader(lazy(() => import('src/content/Apartment/Guest')));
const ReceiveBooking = Loader(
  lazy(() => import('src/content/Apartment/ReceiveBooking'))
);
const GuestPayment = Loader(
  lazy(() => import('src/content/Apartment/GuestPayment'))
);
const Charge = Loader(lazy(() => import('src/content/Apartment/Charge')));
const Plans = Loader(lazy(() => import('src/content/Apartment/Plans')));
const Policy = Loader(lazy(() => import('src/content/Apartment/Policy')));
const Availability = Loader(
  lazy(() => import('src/content/Apartment/Availability'))
);
const Complete = Loader(lazy(() => import('src/content/Apartment/Complete')));
const Payment = Loader(lazy(() => import('src/content/Apartment/Payment')));

const apartmentRoutes = [
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
    path: 'place',
    element: <Place />
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
    path: 'property-detail',
    element: <PropertyDetail />
  },
  {
    path: 'breakfast-detail',
    element: <BreakfastDetail />
  },
  {
    path: 'parking',
    element: <Parking />
  },
  {
    path: 'language',
    element: <Language />
  },
  {
    path: 'rules',
    element: <Rules />
  },
  {
    path: 'host-profile',
    element: <HostProfile />
  },
  {
    path: 'gallery',
    element: <Gallery />
  },
  {
    path: 'guest',
    element: <Guest />
  },
  {
    path: 'receive-booking',
    element: <ReceiveBooking />
  },
  {
    path: 'guest-payment',
    element: <GuestPayment />
  },
  {
    path: 'charge',
    element: <Charge />
  },
  {
    path: 'plans',
    element: <Plans />
  },
  {
    path: 'cancellation-policy',
    element: <Policy />
  },
  {
    path: 'availability',
    element: <Availability />
  },
  {
    path: 'review-and-complete',
    element: <Complete />
  },
  {
    path: 'payment',
    element: <Payment />
  }
];

export default apartmentRoutes;

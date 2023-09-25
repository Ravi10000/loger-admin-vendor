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
const Guest = Loader(lazy(() => import('src/content/Hotel/Guest')));
const BreakfastDetail = Loader(
  lazy(() => import('src/content/Hotel/BreakfastDetail'))
);
const Parking = Loader(lazy(() => import('src/content/Hotel/Parking')));
const Language = Loader(lazy(() => import('src/content/Hotel/Language')));
const Rules = Loader(lazy(() => import('src/content/Hotel/Rules')));
const Roomdetail = Loader(lazy(() => import('src/content/Hotel/Roomdetail')));
const Bathroomdetail = Loader(
  lazy(() => import('src/content/Hotel/Bathroomdetail'))
);
const Room = Loader(lazy(() => import('src/content/Hotel/Room')));
const Charge = Loader(lazy(() => import('src/content/Hotel/Charge')));
const Plans = Loader(lazy(() => import('src/content/Hotel/Plans')));
const Policy = Loader(lazy(() => import('src/content/Hotel/Policy')));
const Gallery = Loader(lazy(() => import('src/content/Hotel/Gallery')));
const Availability = Loader(
  lazy(() => import('src/content/Hotel/Availability'))
);
const Guestpayment = Loader(
  lazy(() => import('src/content/Hotel/Guestpayment'))
);
const Invoicing = Loader(lazy(() => import('src/content/Hotel/Invoicing')));
const Complete = Loader(lazy(() => import('src/content/Hotel/Complete')));
const Hotelinfo = Loader(lazy(() => import('src/content/Hotel/Hotelinfo')));
const Payment = Loader(lazy(() => import('src/content/Hotel/Payment')));
const Onehotel = Loader(lazy(() => import('src/content/Hotel/Onehotel')));

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
    path: 'one-boarding',
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
  },
  {
    path: 'guest',
    element: <Guest />
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
    path: 'room-detail',
    element: <Roomdetail />
  },
  {
    path: 'bathroom-detail',
    element: <Bathroomdetail />
  },
  {
    path: 'room',
    element: <Room />
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
    path: 'gallery',
    element: <Gallery />
  },
  {
    path: 'availability',
    element: <Availability />
  },
  {
    path: 'guest-payment',
    element: <Guestpayment />
  },
  {
    path: 'invoicing',
    element: <Invoicing />
  },
  {
    path: 'hotel-info',
    element: <Hotelinfo />
  },
  {
    path: 'complete',
    element: <Complete />
  },
  {
    path: 'payment',
    element: <Payment />
  },
  {
    path: 'one-hotel',
    element: <Onehotel />
  }
];
export default hotelRoutes;

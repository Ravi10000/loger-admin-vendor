import { Suspense, lazy } from 'react';
import SuspenseLoader from 'src/components/SuspenseLoader';
// import { Navigate } from 'react-router-dom';
import PreviewGallery from 'src/content/Apartment/preview-gallery';
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
// const Property = Loader(lazy(() => import('src/content/Hotel/Property')));
const Property = Loader(lazy(() => import('src/content/Apartment/Property')));
const Location = Loader(lazy(() => import('src/content/Apartment/Location')));
const Rating = Loader(lazy(() => import('src/content/Hotel/Rating')));
const Guest = Loader(lazy(() => import('src/content/Apartment/Guest')));
const BreakfastDetail = Loader(
  lazy(() => import('src/content/Apartment/BreakfastDetail'))
);
const Parking = Loader(lazy(() => import('src/content/Apartment/Parking')));
const Language = Loader(lazy(() => import('src/content/Apartment/Language')));
const Rules = Loader(lazy(() => import('src/content/Apartment/Rules')));
const Roomdetail = Loader(lazy(() => import('src/content/Hotel/Roomdetail')));
const Bathroomdetail = Loader(
  lazy(() => import('src/content/Hotel/Bathroomdetail'))
);
const Room = Loader(lazy(() => import('src/content/Hotel/Room')));
const Charge = Loader(lazy(() => import('src/content/Apartment/Charge')));
const Plans = Loader(lazy(() => import('src/content/Apartment/Plans')));
const Policy = Loader(lazy(() => import('src/content/Apartment/Policy')));
// const Gallery = Loader(lazy(() => import('src/content/Hotel/Gallery')));
const Availability = Loader(
  lazy(() => import('src/content/Hotel/Availability'))
);
const Invoicing = Loader(lazy(() => import('src/content/Hotel/Invoicing')));
const Complete = Loader(lazy(() => import('src/content/Hotel/Complete')));
const Hotelinfo = Loader(lazy(() => import('src/content/Hotel/Hotelinfo')));
const Payment = Loader(lazy(() => import('src/content/Apartment/Payment')));
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
    path: ':roomName/room-detail',
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
    path: ':roomName/charge',
    element: <Charge />
  },
  {
    path: ':roomName/plans',
    element: <Plans />
  },
  {
    path: ':roomName/cancellation-policy',
    element: <Policy />
  },
  {
    path: ':roomName/preview-gallery',
    element: <PreviewGallery />
  },
  {
    path: 'preview-gallery',
    element: <PreviewGallery />
  },
  {
    path: 'availability',
    element: <Availability />
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
    path: 'view',
    element: <Onehotel />
  }
];
export default hotelRoutes;

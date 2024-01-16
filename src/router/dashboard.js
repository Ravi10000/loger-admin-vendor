import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoader from 'src/components/SuspenseLoader';
import Gallery from 'src/components/gallery';
import ManageCalendar from 'src/pages/manage-calendar/manage-calendar.page';

const Loader = Component => props =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const GroupHome = Loader(
  lazy(() => import('src/content/Dashboard/Group/GroupHome'))
);
const Reviews = Loader(
  lazy(() => import('src/content/Dashboard/Group/Reviews'))
);
const Analytics = Loader(
  lazy(() => import('src/content/Dashboard/Group/Analytics'))
);
const ManageHome = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Home'))
);

const ManageReservations = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Reservation'))
);

const GroupsReservation = Loader(
  lazy(() => import('src/content/Dashboard/Group/ReservationList'))
);
const Finance = Loader(
  lazy(() => import('src/content/Dashboard/Group/Finance'))
);
const SalesStatistics = Loader(
  lazy(() => import('src/content/Dashboard/Group/SalesStatistics'))
);
const GroupReservationDetails = Loader(
  lazy(() => import('src/content/Dashboard/Group/ReservationDetails'))
);

const ManageReservationDetails = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ReservationDetails'))
);
const ManageCharge = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Property/Charge'))
);

const GroupPromotions = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Promotions'))
);

const GroupNewPromotion = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Promotions/NewPromotion'))
);
const ManagePayment = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManagePayment'))
);
const ManageInvoice = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManageInvoice'))
);
const ManageAllReservation = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManageAllReservation'))
);
const ManageGeneralInfo = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Property/GeneralInfo'))
);

const ManagePolicy = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Property/Policy'))
);

const ManageFacilityAndService = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Property/Services'))
);
const ManageBank = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManageBank'))
);
const ManagePerformance = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManagePerformance'))
);
const ManageRatePlan = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Rate'))
);
const ManageNewRatePlan = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManageNewRatePlan'))
);
const ManageSyncCalender = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManageSyncCalender'))
);
const ManageConnectionCalender = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManageConnectionCalender'))
);
const ManagePrice = Loader(
  lazy(() => import('src/content/Dashboard/Manage/ManagePrice'))
);

const ManageReservationMessage = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Indox/ReservationMessage'))
);

const ManageGuestsQA = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Indox/GuestQA'))
);

const dashboardRoutes = [
  // {
  //   path: '*',
  //   element: <Navigate to="/dashboard/groups/groups-home" replace />
  // },
  {
    path: 'groups',
    // element: <Navigate to="groups/groups-home" replace />,
    children: [
      {
        path: 'groups-home',
        element: <GroupHome />
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'reservations',
        children: [
          {
            path: '',
            element: <GroupsReservation />
          },
          {
            path: ':bookingId',
            element: <GroupReservationDetails />
          }
        ]
      },
      {
        path: 'finance',
        element: <Finance />
      },
      {
        path: 'sales-statistics',
        element: <SalesStatistics />
      }
    ]
  },
  {
    path: 'manage',
    children: [
      {
        path: 'home',
        element: <ManageHome />
      },
      {
        path: 'reservations',
        children: [
          {
            path: '',
            // element: <ManageReservations />
            element: <GroupsReservation />
          },
          {
            path: ':bookingId',
            element: <GroupReservationDetails />
          }
        ]
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path: 'property',
        children: [
          {
            path: '',
            element: <ManageGeneralInfo />
          },
          {
            path: 'charges',
            element: <ManageCharge />
          },
          {
            path: 'general-info',
            element: <ManageGeneralInfo />
          },
          {
            path: 'photos',
            element: <Gallery />
          },
          {
            path: 'policies',
            element: <ManagePolicy />
          },
          {
            path: 'facilities-and-services',
            element: <ManageFacilityAndService />
          }
        ]
      },
      {
        path: 'promotions',
        children: [
          {
            path: '',
            element: <GroupPromotions />
          },
          {
            path: 'new-promotion',
            element: <GroupNewPromotion />
          }
        ]
      },
      {
        path: 'finance',
        children: [
          {
            path: 'manage-payment',
            element: <ManagePayment />
          },
          {
            path: 'manage-invoice',
            element: <ManageInvoice />
          },
          {
            path: 'manage-all-reservation',
            element: <ManageAllReservation />
          },
          {
            path: 'manage-bank',
            element: <ManageBank />
          }
        ]
      },
      {
        path: 'analytics',
        children: [
          {
            path: 'manage-performance',
            element: <ManagePerformance />
          }
        ]
      },
      {
        path: 'rate-and-availability',
        children: [
          {
            path: 'calendar',
            element: <ManageCalendar />
          },
          {
            path: 'rate-plan',
            element: <ManageRatePlan />
          },
          {
            path: 'new-rate-plan',
            element: <ManageNewRatePlan />
          },
          {
            path: 'sync-calender',
            element: <ManageSyncCalender />
          },
          {
            path: 'connection-calender',
            element: <ManageConnectionCalender />
          },
          {
            path: 'price',
            element: <ManagePrice />
          }
        ]
      },
      {
        path: 'inbox',
        children: [
          {
            path: '',
            element: <ManageReservationMessage />
          },
          {
            path: 'reservation-message',
            element: <ManageReservationMessage />
          },
          {
            path: 'guests-question-answer',
            element: <ManageGuestsQA />
          }
        ]
      }
    ]
  }
];

export default dashboardRoutes;

import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SuspenseLoader from 'src/components/SuspenseLoader';

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
const Rate = Loader(
  lazy(() => import('src/content/Dashboard/Manage/Rate'))
);

const dashboardRoutes = [
  {
    path: '',
    element: <Navigate to="groups" replace />
  },
  {
    path: 'groups',
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
            path: ':reservationNo',
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
            element: <ManageReservations />
          },
          {
            path: ':reservationNo',
            element: <ManageReservationDetails />
          }
        ]
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
            path: 'managepayment',
            element: <ManagePayment />
          },
          {
            path: 'manageinvoice',
            element: <ManageInvoice />
          },
          {
            path: 'manageallreservation',
            element: <ManageAllReservation />
          },
          {
            path: 'managebank',
            element: <ManageBank/>
          }
        ]
      },
      {
        path:'analytics',
        children:[
          {
            path:'manageperformance',
            element:<ManagePerformance/>
          }
        ]
      },
      {
        path:'rate-and-availability',
        children:[
          {
            path:'rate',
            element:<Rate/>
          }
        ]

      }
    ]
  }
];

export default dashboardRoutes;

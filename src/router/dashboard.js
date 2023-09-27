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
const ReservationDetails = Loader(
  lazy(() => import('src/content/Dashboard/Group/ReservationDetails'))
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
        element: <GroupsReservation />
      },
      {
        path: 'finance',
        element: <Finance />
      },
      {
        path: 'sales-statistics',
        element: <SalesStatistics />
      },
      {
        path: 'reservation-details',
        element: <ReservationDetails/>
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
        element: <ManageReservations />
      }
    ]
  }
];

export default dashboardRoutes;

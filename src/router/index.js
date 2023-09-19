import { Navigate } from 'react-router-dom';
import authRoutes from './auth';
import apartmentRoutes from './apartment';
import hotelRoutes from './hotel';
import BaseLayout from 'src/layout/BaseLayout';

const router = [
  {
    path: '*',
    element: <Navigate to="auth" replace />
  },
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'apartment',
    element: <BaseLayout />,
    children: apartmentRoutes
  },
  {
    path: 'hotel',
    element: <BaseLayout />,
    children: hotelRoutes
  }
];

export default router;

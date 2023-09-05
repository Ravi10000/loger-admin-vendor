import { Navigate } from 'react-router-dom';
import authRoutes from './auth';

const router = [
  {
    path: '*',
    element: <Navigate to="auth" replace />
  },
  {
    path: 'auth',
    children: authRoutes
  }
];

export default router;

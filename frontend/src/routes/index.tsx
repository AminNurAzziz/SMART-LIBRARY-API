import { Navigate, useRoutes } from 'react-router-dom';
// auth
import { StudentGuard, GuestGuard, AuthGuard } from '@/auth';
// layouts
import CompactLayout from '../layouts/compact';
import ServiceLayout from '../layouts/service';
import GuestLayout from '../layouts/guest';
import StudentLayout from '../layouts/student';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  Page404,
  PageOne,
  PageTwo,
  PageSix,
  PageFour,
  PageScan,
  PageFive,
  PageStudentDashboard,
  PageBookDetails,
  // LoginPage,
  PageThree,
  PageBookHistory,
  PaymentHistory,
} from './elements';
import { PATH_MAIN, PATH_STUDENT } from './paths';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <GuestGuard>
          <GuestLayout />
        </GuestGuard>
      ),
      children: [
        { element: <Navigate to={PATH_MAIN.scan} replace />, index: true },
        {
          path: '/scan',
          element: <PageScan />,
        },
        // {
        //   path: 'login',
        //   element: (
        //     <GuestGuard>
        //       <LoginPage />
        //     </GuestGuard>
        //   ),
        // },
      ],
    },
    {
      path: '/student',
      element: (
        <StudentGuard>
          <StudentLayout />
        </StudentGuard>
      ),
      children: [
        { element: <Navigate to={PATH_STUDENT.dashboard} replace />, index: true },
        {
          path: 'dashboard',
          element: <PageStudentDashboard />,
        },
        {
          path: 'book/:name',
          element: <PageBookDetails />,
        },
        {
          path: 'history',
          element: <PageBookHistory />,
        }
      ],
    },
    {
      path: '/dashboard',
      element: (
        <AuthGuard>
          <ServiceLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'one', element: <PageOne /> },
        { path: 'two', element: <PageTwo /> },
        { path: 'three', element: <PageThree /> },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/four" replace />, index: true },
            { path: 'four', element: <PageFour /> },
            { path: 'five', element: <PageFive /> },
            { path: 'six', element: <PageSix /> },
          ],
        },
      ],
    },
    {
      path: '/payment',
      element: (
        <AuthGuard>
          <ServiceLayout />
        </AuthGuard>
      ),
      children: [{ path: 'history', element: <PaymentHistory /> }],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

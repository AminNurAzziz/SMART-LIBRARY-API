import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));

export const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
export const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
export const PageThree = Loadable(lazy(() => import('../pages/PageThree')));
export const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
export const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
export const PageSix = Loadable(lazy(() => import('../pages/PageSix')));

export const PageScan = Loadable(lazy(() => import('../pages/scan')));

// Students Page
export const PageStudentDashboard = Loadable(lazy(() => import('../pages/dashboard/student')));
export const PageBookDetails = Loadable(lazy(() => import('../pages/dashboard/student/book/detail/BookDetailPage')));
export const PageBookHistory = Loadable(lazy(() => import('../pages/dashboard/student/history/BorrowedHistoryPage')));

export const PaymentHistory = Loadable(lazy(() => import('../pages/payment/payment-history/PaymentHistoryPage')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

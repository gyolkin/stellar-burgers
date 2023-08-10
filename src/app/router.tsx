import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { navigationMap } from '@/shared/model';
import { baseLayout, sidebarLayout } from './layout';

export const router = createBrowserRouter([
  {
    element: baseLayout,
    children: [
      {
        path: navigationMap.home,
        element: <HomePage />,
      },
      {
        path: navigationMap.feed,
        element: <HomePage />,
      },
    ],
  },
  {
    element: sidebarLayout,
    children: [
      {
        path: navigationMap.profile,
        element: <HomePage />,
      },
    ],
  },
]);

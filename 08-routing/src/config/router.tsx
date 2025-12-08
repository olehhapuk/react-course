import { createBrowserRouter, Outlet } from 'react-router';

import HomeView from '../views/home.view';
import AboutView from '../views/about.view';
import PostDetailsView from '@/views/post-details.view';
import RootLayout from '@/layouts/root.layout';
import NotFoundView from '@/views/not-found.view';
import { RoutePaths } from '@/constants/routes';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: RoutePaths.HOME,
        element: <HomeView />,
      },
      {
        path: RoutePaths.ABOUT,
        element: <AboutView />,
      },
      {
        path: RoutePaths.POST_DETAILS,
        element: <PostDetailsView />,
      },
      {
        path: RoutePaths.TEST,
        element: (
          <div>
            <p>Test</p>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: RoutePaths.TEST_NEW,
            element: <p>New</p>,
          },
        ],
      },
      {
        path: RoutePaths.TEST1_NEW,
        element: <p>New</p>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundView />,
  },
]);

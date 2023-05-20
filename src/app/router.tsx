import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/common/layouts/main-layout';

import SignIn from '../auth/pages/sign-in';
import SignOut from '../auth/pages/sign-out';
import SignUp from '../auth/pages/sign-up';
import NotFound from '../common/pages/not-found';
import Unauthorized from '../common/pages/unauthorized';
import PostsHome from '../posts/pages/posts-home';
import PostsList from '../posts/pages/posts-list';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <PostsList />,
      },

      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-out',
        element: <SignOut />,
      },
      {
        path: 'posts',
        element: <PostsHome />,
      },
      {
        path: 'posts/all',
        element: <PostsList />,
      },
    ],
  },
  {
    path: 'unauthorized',
    element: <Unauthorized />,
  },
  {
    path: 'not-found',
    element: <NotFound />,
  },
]);

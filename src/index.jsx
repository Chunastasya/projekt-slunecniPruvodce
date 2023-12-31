import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { TestPage } from './pages/TestPage';
import { TestResultPage } from './pages/TestResultPage';
import MapPage from './pages/MapPage';
import RecommendationPage from './pages/RecommendationPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/test',
        element: <TestPage />,
      },
      {
        path: '/test-result/:score',
        element: <TestResultPage />,
      },
      {
        path: '/map',
        element: <MapPage />,
      },
      {
        path: '/recommendation',
        element: <RecommendationPage />,
      },
      {
        path: '*',
        element: <ErrorPage />
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);

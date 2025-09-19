import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontLayout from './layout/Front-Layout.tsx';
import DashboardLayout from './layout/Dashboard-layout.tsx';
import Dashboard from '@/dashboard/Dashboard.tsx';
import RouteError from './components/RouteError.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <FrontLayout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      }
    ],
  },
])

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={Routes} />
    </ErrorBoundary>
  </StrictMode>,
)
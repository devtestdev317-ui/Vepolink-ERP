import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontLayout from './layout/Front-Layout.tsx';
import DashboardLayout from './layout/Dashboard-layout.tsx';
import Dashboard from './dashboard/page.tsx';
import RouteError from './components/RouteError.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { store } from './App/store.ts';
import { Provider } from "react-redux"
import LeadsList from './dashboard/leads/leads-list.tsx';
import AddNewLeadPage from './dashboard/leads/add-new/page.tsx';
import ViewLeadDetailPage from './dashboard/leads/view/page.tsx';
import { Toaster } from "@/components/ui/sonner";
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
      },
      {
        path: "leads",
        element: <LeadsList />,
      },
      {
        path: "leads/view/:id",
        element: <ViewLeadDetailPage />,
      },
      {
        path: "leads/add",
        element: <AddNewLeadPage />,
      },
    ],
  },
])

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={Routes} />
        <Toaster position='top-right' richColors closeButton />
      </ErrorBoundary>

    </Provider>
  </StrictMode>,
)
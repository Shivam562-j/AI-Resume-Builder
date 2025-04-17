import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in'
import Home from './Home'
import Dashboard from './dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    element:<App/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  },
  { path: '/auth/sign-in', element: <SignInPage /> }
],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider future={{ v7_startTransition: true }} router={router} />
    </ClerkProvider>
  </StrictMode>,
)

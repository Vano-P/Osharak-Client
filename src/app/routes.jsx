import { createBrowserRouter } from 'react-router-dom'

import Layout from '../layout/Layout.jsx'
import { lazy } from 'react'
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx";

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const ErrorPage = lazy(() => import('../pages/Error'))

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '*', element: <NotFound /> }
    ]
  }
])

export default routes

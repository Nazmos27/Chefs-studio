import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './components/Home';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import Blog from './components/Blog';
import FrontPage from './components/FrontPage';
import ChefSection from './components/ChefSection';
import AuthProviders from './Authproviders/AuthProviders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <FrontPage></FrontPage>,
        loader: () => fetch("http://localhost:5000/chefs_data")
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path: '/chefsection/:id',
        element: <PrivateRoute><ChefSection></ChefSection></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/recipe_details/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)

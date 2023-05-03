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
import Banner from './components/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path:"/registration",
        element: <Registration></Registration>
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

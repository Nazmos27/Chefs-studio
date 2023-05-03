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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<FrontPage></FrontPage>,
        loader: () => fetch("http://localhost:5000/chefs_data")
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
      },
      {
        path:'/chefsection/:id',
        element:<ChefSection></ChefSection>,
        loader : ({params}) => fetch(`http://localhost:5000/recipe_details/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

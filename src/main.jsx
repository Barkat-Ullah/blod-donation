import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import SingleDonates from './components/singleDonates/SingleDonates';
import DonateCard from './components/DonateCard/DonateCard';
import Statics from './components/Statics/Statics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch('/donate.json')
      },
      {
        path:"/donation",
        element:<DonateCard></DonateCard>,
        loader:() => fetch('/donate.json')
      },
      {
        path: "/singleDonates/:id" ,
        element:<SingleDonates></SingleDonates>,
        loader:() => fetch('/donate.json')
      },
      {
        path:"/statistics",
        element:<Statics></Statics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

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
        path: "/singleDonates/:id" ,
        element:<SingleDonates></SingleDonates>,
        loader:() => fetch('/donate.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

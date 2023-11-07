import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root.jsx';
import Home from './pages/home/Home/Home.jsx';
import AvailableFoods from './pages/AvailbleFoods/AvailableFoods.jsx';
import Details from './pages/Details/Details.jsx';
import AddFood from './pages/AddFood/AddFood.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/foods",
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: "addFood",
        element: <AddFood></AddFood>
      },
      {
        path: "/food/:id",
        element: <Details></Details>
      }
    ]
  }
]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

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
import ManageFoods from './pages/ManageFoods/ManageFoods.jsx';
import ManageFoodRequest from './pages/ManageFoodRequest/ManageFoodRequest.jsx';
import MyFoodRequest from './pages/MyFoodRequest/MyFoodRequest.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import Error from './pages/Error/Error.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        path: "/addFood",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: "/manageFood",
        element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>
      },
      {
        path: "/myFoodRequest",
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "/food/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: "/manageRequest/:id",
        element: <PrivateRoute><ManageFoodRequest></ManageFoodRequest></PrivateRoute>
      }
    ]
  }
]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)

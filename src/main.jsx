// import React from 'react'
// import ReactDOM from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Home.jsx'
import Register from './RegisterPage.jsx';
import Wall from './Wall.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/RegisterPage",
    element: <Register />,
  },
  {
    path: "/Wall",
    element: <Wall />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


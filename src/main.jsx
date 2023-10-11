// import React from 'react'
// import ReactDOM from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// import Home from './Home.jsx'
import RegisterPage from "./RegisterPage.jsx";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import PdfView from "./PdfView.jsx";
import Wall from "./Wall.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wall />,
  },
  {
    path: "/RegisterPage",
    element: <RegisterPage />,
  },
  {
    path: "/PdfView",
    element: <PdfView />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


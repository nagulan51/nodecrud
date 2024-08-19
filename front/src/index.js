import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Notfound from "./Pages/Notfound";
import Product from "./Pages/Product";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/produit/:id",
    element: (
      <>
        <Header />
        <Product />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <Notfound />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

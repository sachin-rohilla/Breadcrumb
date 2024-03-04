import { useState } from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return (
    <>
      <div className="p-4">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

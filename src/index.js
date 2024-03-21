import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantHome from "./components/RestaurantHome";
import AppLayout from "./App";
import CartPage from "./components/CartPage";
const Grocery = lazy(() => import("./components/Grocery"));
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantHome />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading groceriessss</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <CartPage /> },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);

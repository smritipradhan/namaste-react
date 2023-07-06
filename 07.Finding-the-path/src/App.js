import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Error from "./components/Error/Error";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import RestraurentMenu from "./components/RestraurentMenu/RestraurentMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restraurent/:resId",
        element: <RestraurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

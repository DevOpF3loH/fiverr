import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Footer from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Gigs } from "./pages/gigs/Gigs";
import { Gig } from "./pages/gig/Gig";
import { Orders } from "./pages/orders/Orders";
import { Mygigs } from "./pages/myGigs/Mygigs";
import { Add } from "./pages/add/Add";
import Messages from "./pages/messages/Messages";
import { Message } from "./pages/message/Message";
import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
        </QueryClientProvider>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <Mygigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

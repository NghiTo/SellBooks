import React from "react";
import Header from "./Header/Header";
import Menu from "./Body/Menu";
import Footer from "./Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Cart from "./Cart/Cart";
import Product from "./Products/Product";
import User from "./User/User";
import Error from "./Error/Error";
import Pay from "./Cart/Pay";
import Detail from "./Products/Detail";
import HeaderAdmin from "./Admin/HeaderAdmin";
import FooterAdmin from "./Admin/FooterAdmin";
import Sidebar from "./Admin/Sidebar";
import Dashboard from "./Admin/Dashboard";
import Book from "./Admin/Book,jsx/Book";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <div className="app d-flex flex-row">
        <Sidebar />
        <div className="main-content w-100">
          <HeaderAdmin />
          <div className="admin-content">
            <Outlet />
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Menu />,
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/cart/pay",
          element: <Pay />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/product/",
          element: <Detail />,
        },
        {
          path: "/user/*",
          element: <User />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/books",
          element: <Book />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

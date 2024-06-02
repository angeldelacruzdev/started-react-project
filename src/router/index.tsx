import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Login/HomePage";
import RegisterPage from "../pages/Register/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import MainPage from "../pages/dashboard/main/MainPage";
export const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
        children: [
          {
            path: "/dashboard/main",
            element: <MainPage />,
          },
        ],
      },
    ],
  },
]);

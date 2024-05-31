import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Login/HomePage";
import RegisterPage from "../pages/Register/RegisterPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
]);

import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import BookConsultation from "../pages/BookConsultation/BookConsultation";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyBookings from "../pages/Dashboard/User/MyBookings";
import BookingHistory from "../pages/Dashboard/User/BookingHistory";
import Profile from "../pages/Dashboard/User/Profile";
import Prescriptions from "../pages/Dashboard/User/Prescriptions";
import AllPatients from "../pages/Dashboard/Doctor/AllPatients";
import AllClients from "../pages/Dashboard/Admin/AllClients";
import AllDoctors from "../pages/Dashboard/Admin/AllDoctors";
import PendingDoctors from "../pages/Dashboard/Admin/PendingDoctors";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/coverage",
          Component: Coverage,
          loader: ()=> fetch("/serviceCenters.json")
        },
        {
          path:"/book",
          element: <PrivateRoute>
            <BookConsultation></BookConsultation>
          </PrivateRoute>
        }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
    ]
  },
  {
    path:"/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children:[
      {
        path:"book-consultation",
        Component: BookConsultation
      },
      {
        path:"my-bookings",
        Component: MyBookings
      },
      {
        path:"booking-history",
        Component: BookingHistory
      },
      {
        path:"profile",
        Component: Profile
      },
      {
        path:"prescriptions",
        Component: Prescriptions
      },
      {
        path:"patients",
        Component: AllPatients
      },
      {
        path:"all-doctors",
        Component: AllDoctors
      },
      {
        path:"pending-doctors",
        Component: PendingDoctors
      },
    ]
  }
]);
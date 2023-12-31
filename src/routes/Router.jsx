import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructor from "../pages/AllInstructor/AllInstructor";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import StudentHome from "../pages/Dashboard/Student/StudentHome/StudentHome";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Main from "./../layouts/Main";
import AdminHome from "./../pages/Dashboard/Admin/AdminHome/AdminHome";
import MyEnrolledClasses from "./../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "./../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/all-instructors",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      // <PrivateRoute>
      <Dashboard></Dashboard>
      // </PrivateRoute>
    ),
    children: [
      {
        path: "my-selected-classes",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "my-enrolled-classes",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "student-home",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://music-fairy-server-naimuralltime.vercel.app/carts/${params.id}`
          ),
      },
      {
        path: "admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "instructor-home",
        element: <InstructorHome></InstructorHome>,
      },
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>,
      },
    ],
  },
]);

import Login from "../pages/login/Login";
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Appoinment from "../pages/Appoinment/Appoinment/Appoinment";
import SignUp from "../pages/Signup/SignUp";
import DashBoard from "../pages/Dashboard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: "/login",
                element: <PublicRoute>
                    <Login />

                </PublicRoute>

            },
            {
                path: '/appoinment',
                element: <Appoinment />
            },
            {
                path: '/signup',
                element: <PublicRoute>
                    <SignUp />
                </PublicRoute>
            },



        ],


    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashBoard />

        </PrivateRoute>
    }

])


export default router
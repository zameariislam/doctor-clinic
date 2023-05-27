import Login from "../pages/login/Login";
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Appoinment from "../pages/Appoinment/Appoinment/Appoinment";
import SignUp from "../pages/Signup/SignUp";





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
                element: <Login />

            },
            {
                path: '/appoinment',
                element: <Appoinment />
            },
            {
                path: '/signup',
                element: <SignUp />
            }

        ]
    }
])


export default router
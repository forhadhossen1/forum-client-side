import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyProfile from "../Pages/DashboardPages/UserPages/MyProfile";
import AddPost from "../Pages/DashboardPages/UserPages/AddPost";
import MyPost from "../Pages/DashboardPages/UserPages/MyPost";
import AdminProfile from "../Pages/DashboardPages/AdminPages/AdminProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path : '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            // admin route.......... 
            {
                path: 'adminProfile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'manageUser',
                element: <
            }
            ,

            // user route................ 
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'addPost',
                element: <AddPost></AddPost>
            },
            {
                path: 'myPost',
                element: <MyPost></MyPost>
            }
        ]
    }
]);

export default router;
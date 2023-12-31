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
import ManageUsers from "../Pages/DashboardPages/AdminPages/manageUsers";
import Announcements from "../Pages/DashboardPages/AdminPages/Announcements";
import Comments from "../Pages/DashboardPages/AdminPages/Comments";
import Membership from "../Pages/Membership/Membership";
import PrivetRouts from "./PrivetRout";
import AdminRouts from "./AdminRouts";
import ManageAnnounce from "../Pages/DashboardPages/AdminPages/ManageAnnounce";
import Details from "../Pages/Home/Details";

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
            },
            {
                path: '/membership',
                element: <PrivetRouts><Membership></Membership></PrivetRouts>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`https://assignment12-server-side-six.vercel.app/forum/${params.id}`)

            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRouts><Dashboard></Dashboard></PrivetRouts>,
        children: [

            // admin route.......... 
            {
                path: 'adminProfile',
                element: <AdminRouts><AdminProfile></AdminProfile></AdminRouts>
            },
            {
                path: 'manageUser',
                element: <AdminRouts> <ManageUsers></ManageUsers></AdminRouts>
            },
            {
                path: 'announcement',
                element: <AdminRouts><Announcements></Announcements></AdminRouts>
            },
            {
                path: 'comments',
                element: <AdminRouts><Comments></Comments></AdminRouts>
            },
            {
                path: 'announceManage',
                element: <AdminRouts><ManageAnnounce></ManageAnnounce></AdminRouts>
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
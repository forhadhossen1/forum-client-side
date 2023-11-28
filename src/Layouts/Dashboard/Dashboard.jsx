import { NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/Forum.png';
import { FaAddressBook, FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-500">
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="h-[100px]" />
                </div>

                <ul className="menu p-6 space-y-5 uppercase font-bold text-black hover:text-white">

                    <li>
                        <NavLink to='/dashboard/myProfile'>
                            <FaHome />  My Profile </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addPost'>
                            <FaAddressBook /> Add Post </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/myPost'>
                            <FaAddressBook /> My Post </NavLink>
                    </li>



                    <div className="divider"></div>

                    <li><NavLink to='/'>
                        <FaHome />  Home
                    </NavLink></li>
                </ul>
            </div>




            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
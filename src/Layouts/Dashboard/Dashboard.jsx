import { Outlet } from "react-router-dom";
import logo from '../../assets/Forum.png';

const Dashboard = () => {
    return (
        <div>
            <div className="w-64 min-h-screen bg-blue-500">
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="h-[100px]"/>
                </div>
            </div>



            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
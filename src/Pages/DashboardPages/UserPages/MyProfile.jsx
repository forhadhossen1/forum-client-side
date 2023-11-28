import useAuth from "../../../Hooks/useAuth";
import { FcBusinessman } from "react-icons/fc"

const MyProfile = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 flex justify-center items-center"></div>
        </div>

    }
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-200">
            <h2 className="text-5xl font-bold text-center block tracking-normal antialiased relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>

            <div className="flex justify-center py-5">
                {user && user.photoURL ? (
                    <img src={user.photoURL} alt="User" className="w-[200px] rounded-full" />
                ) : (
                    <FcBusinessman className="w-[200px] rounded-full text-8xl" />
                )}
            </div>
            <p className="text-center text-3xl font-bold py-5">Name : {user?.displayName}</p>
            <p className="text-center text-3xl font-bold">Email : {user?.email}</p>

        </div>
    );
};

export default MyProfile;
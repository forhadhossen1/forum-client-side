import { FcBusinessman } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaAddressBook, FaComment, FaUsers } from "react-icons/fa";
import useForum from "../../../Hooks/useForum";

const AdminProfile = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [forums] = useForum();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

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

            <section className="p-6 my-6 ">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                            <FaUsers className="h-9 w-9"></FaUsers>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">{users.length}</p>
                            <p className="capitalize">Users</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                            <FaAddressBook className="h-9 w-9"></FaAddressBook>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">{forums.length}</p>
                            <p className="capitalize">Post</p>
                        </div>
                    </div>

                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                            <FaComment className="h-9 w-9"></FaComment>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">172</p>
                            <p className="capitalize">Comment</p>
                        </div>
                    </div>
                </div>
            </section>




            <div className="flex justify-center py-5">
                {user && user?.photoURL ? (
                    <img src={user?.photoURL} alt="User" className="w-[200px] rounded-full" />
                ) : (
                    <FcBusinessman className="w-[190px] h-[190px] rounded-full text-8xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                )}
            </div>
            <p className="text-center text-3xl font-bold py-5">Admin Name : {user?.displayName}</p>
            <p className="text-center text-3xl font-bold">Email : {user?.email}</p>

        </div>
    );
};

export default AdminProfile;
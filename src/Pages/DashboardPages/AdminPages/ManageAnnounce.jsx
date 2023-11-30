import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageAnnounce = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: announcement = [] } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const res = await axiosSecure.get('/announcements')
            return res.data
        }
    })

    const handleDeleteAnnounce = (announce) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/announcements/${announce._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            refetch();
                        }
                    })
            }
        });

    }



    return (
        <div className="bg-slate-100 flex flex-col min-h-screen p-4">
            <h2 className="text-5xl font-bold text-center text-blue-500 py-7">Manage Announce</h2>
            {
                announcement.map(announce => (
                    <div key={announce._id} className="flex flex-col md:flex-row justify-between p-6 space-y-6 overflow-hidden ">
                        <div className="flex space-x-4  border-r-2 m-2">
                            <img src={announce.image} alt="" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <p className="text-lg font-bold">{announce.title}</p>
                                <p className="">Name: {announce.name}</p>
                                <p className=" py-5">{announce.description}</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-end pb-5 font-bold">
                                <span className="text-xs dark:text-gray-400">{announce.post_time}</span>
                            </div>
                            <div>
                                <button onClick={() => handleDeleteAnnounce(announce)} className="btn bg-red-700 text-white"><FaTrash></FaTrash> </button>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default ManageAnnounce;
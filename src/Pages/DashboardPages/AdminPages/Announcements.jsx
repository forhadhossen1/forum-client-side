import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Announcements = () => {
    const imgae_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const imgae_hosting_api = `https://api.imgbb.com/1/upload?key=${imgae_hosting_key}`

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();


    const onSubmit = async (data) => {
        const currentDate = new Date();
        const formattedTime = currentDate.toLocaleTimeString();

        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imgae_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url 
            const forumItem = {
                name: data.name,
                title: data.title,
                description: data.description,
                image: res.data.data.display_url,
                post_time: formattedTime
            }

            const forumRes = await axiosSecure.post('/forum', forumItem);
            console.log(forumRes.data);
            if (forumRes.data.insertedId) {
                reset();
                Swal.fire({
                    title: "Success",
                    text: `${data.name} is added to the Announcements.`,
                    icon: "success"
                });
            }

        }
        console.log('with img url', res.data)
    };
    return (
        <div className="flex flex-col min-h-screen justify-center bg-slate-200  p-10 ">

            <div>
                <h2 className="text-4xl font-bold text-center py-4 block tracking-normal antialiased relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> Announcements</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Author Name*</span>
                        </label>
                        <input {...register("name", { required: true })}
                            type="text" placeholder="Recipe name" className="input input-bordered w-full " />

                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold"> Title*</span>
                        </label>
                        <input {...register("title", { required: true })}
                            type="text" placeholder="Recipe name" className="input input-bordered w-full " />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Description*</span>
                        </label>
                        <textarea {...register("description")}
                            className="textarea textarea-bordered h-24" placeholder="Recie Details"></textarea>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold">Image*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                    </div>

                    {/* <input  className="btn btn-block" type="submit" /> */}
                    <button className="btn btn-block bg-gradient-to-r from-orange-400 to-red-600" > Post Announcement </button>
                </form>
            </div>
        </div>
    );
};

export default Announcements;
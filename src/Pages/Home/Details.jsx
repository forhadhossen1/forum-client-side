import { useLoaderData } from "react-router-dom";
import { BiDislike, BiLike, BiShare } from "react-icons/bi";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Details = () => {
    const forumDetails = useLoaderData();
    const { user, loading } = useAuth();
    const axiosPublic = useAxiosPublic();

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


    const handleComment = async (e) => {

        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        console.log(form, comment)

        const commentItem = {
            comment,
            user: user?.photoURL
        };

        const res = await axiosPublic.post('/comment', commentItem)

        if (res.data.insertedId) {

            Swal.fire("comment send");

            form.reset();
        } else {
            Swal.fire("Failed to send comment");
        }
    }

    const { name, image, post_time, tag, description, title, _id } = forumDetails || {};


    return (
        <div className="py-12 border my-3">
            <div className="flex flex-col md:flex-row justify-between  space-y-6 overflow-hidden ">
                <div className="flex space-x-4">
                    <img src={image} alt="" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <p className="text-lg font-bold">{name}</p>
                        <p className="">{post_time}
                            <span className="font-bold text-blue-500"> #{tag}</span> </p>

                        <p className="text-xl font-bold pt-5">{title}</p>
                        <p className=" py-3 pr-2">{description}</p>

                        <div className="flex gap-5 pr-4 py-12">
                            <button className="btn rounded-none"> <BiLike /> Up Vote</button>
                            <button className="btn rounded-none"> <BiDislike /> Down Vote</button>
                            <button className="btn rounded-none" onClick={() => document.getElementById('my_modal_5').showModal()}> <BiShare></BiShare> Share</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">

                                    <div className="flex gap-6">
                                        <FacebookShareButton url={`https://assignment12-server-side-six.vercel.app/details/${_id.toString()}`}>
                                            <FacebookIcon size={32} round />
                                        </FacebookShareButton>

                                        <TwitterShareButton url={`https://assignment12-server-side-six.vercel.app/details/${_id.toString()}`}>
                                            <TwitterIcon size={32} round />
                                        </TwitterShareButton>
                                    </div>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>

                    </div>
                </div>
            </div>
            <form onSubmit={handleComment} className=" p-3 flex gap-4">
                <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full " />
                <textarea
                    name="comment"
                    placeholder="Write your comment..."
                    className="w-full bg-red-100 rounded-md p-4 mr-2"
                    rows="4"
                ></textarea>
                <input type="submit" value="Send" className="btn" />
            </form>
        </div>
    );
};

export default Details;
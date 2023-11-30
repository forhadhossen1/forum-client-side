import { useLoaderData } from "react-router-dom";
import { BiComment, BiDislike, BiLike, BiShare } from "react-icons/bi";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";

const Details = () => {
    const forumDetails = useLoaderData();
    const { name, image, post_time, tag, description, title, _id } = forumDetails || {};
    return (
        <div className="py-12 border">
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
                            <button className="btn rounded-none"><BiComment></BiComment> Comment</button>

                            <button className="btn rounded-none" onClick={() => document.getElementById('my_modal_5').showModal()}> <BiShare></BiShare> Share</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">

                                    <div className="flex gap-6">
                                        <FacebookShareButton url={`http://localhost:5000/details/${_id.toString()}`}>
                                            <FacebookIcon size={32} round />
                                        </FacebookShareButton>

                                        <TwitterShareButton url={`http://localhost:5000/details/${_id.toString()}`}>
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
        </div>
    );
};

export default Details;
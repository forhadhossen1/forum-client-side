import { useLoaderData } from "react-router-dom";

const Details = () => {
    const forumDetails = useLoaderData();
    const { name, image, post_time, tag, description, title } = forumDetails || {};
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
                        <p className=" pyy-3">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
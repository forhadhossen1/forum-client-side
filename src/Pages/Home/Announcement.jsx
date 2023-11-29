import useAnnouncements from "../../Hooks/useAnnouncements";

const Announcement = () => {
    const [announcement] = useAnnouncements();

    return (
        <div className="py-12">
            <h1 className="text-5xl font-bold text-center py-6 text-red-800">-- Announce--</h1>
            <div className="flex justify-center py-7">
                <img src="https://i.ibb.co/vspmtP2/announcement.png" alt="announcement" />
            </div>

            {
                announcement.map(announc => (
                    <div key={announc._id} className="flex flex-col md:flex-row justify-between p-6 space-y-6 overflow-hidden ">
                        <div className="flex space-x-4">
                            <img src={announc.image} alt="" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"/>
                            <div className="flex flex-col space-y-1">
                                <p className="text-lg font-bold">{announc.title}</p>
                                <p className="">Name: {announc.name}</p>
                                <p className=" py-5">{announc.description}</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-end pb-5 font-bold">
                                <span className="text-xs dark:text-gray-400">{announc.post_time}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Announcement;
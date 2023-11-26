import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section>
            <div className="dark:bg-violet-400 bg-slate-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">Welcome to Disputo Forum</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">The most popular forum on the internet!</p>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="py-2 px-4 w-full focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 border-l border-blue-500"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500 bg-slate-200" >
                <div className="py-8 flex-1">
                    <h2 className="text-4xl font-bold p-5">JOIN OUR FORUM !</h2>
                    <p className="text-2xl p-5 font-semibold">Talk about anything thats on your mind and see what others think. As a guest to our forum you are only able to view posts. When you register with the Forumix forum you can join in with topics, start new topics and generally be a part of the first level of our community.</p>
                    <Link to='/signUp'><button className="btn m-5 rounded-none bg-blue-500 text-white text-xl hover:text-black">Resigter Now</button></Link>
                </div>
                <div className="flex-1 flex justify-center bg-blue-200 rounded-r-lg">
                    <img src="https://i.ibb.co/F8ZjG2p/question.png" alt="" className="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
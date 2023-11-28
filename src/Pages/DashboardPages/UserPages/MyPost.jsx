import usePost from "../../../Hooks/usePost";

const MyPost = () => {
    const [myPost] = usePost();
    return (
        <div className="flex flex-col min-h-screen justify-center bg-slate-200  p-10 ">
            <div>
            <h2 className="text-3xl font-bold">MyPost : {myPost.length}</h2>
            </div>
        </div>
    );
};

export default MyPost;
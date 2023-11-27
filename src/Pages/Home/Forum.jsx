
import useForum from "../../Hooks/useForum";
import ForumTopic from "./ForumTopic";



const Forum = () => {
    const [forums]= useForum();
    return (
        <div className="flex flex-col gap-5 my-10">
            {
                forums.map(forum => <ForumTopic key={forum._id} forum={forum}></ForumTopic>)
            }
        </div>
    );
};

export default Forum;
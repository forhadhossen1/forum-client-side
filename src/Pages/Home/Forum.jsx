
import { useEffect, useState } from "react";
import ForumTopic from "./ForumTopic";



const Forum = () => {
    const [forums, setForums] = useState([]);
    useEffect(() => {
        fetch('post.json')
            .then(res => res.json())
            .then(data => setForums(data))
    }, [])
    return (
        <div className="flex flex-col gap-5 my-10">
            {
                forums.map(forum => <ForumTopic key={forum.id} forum={forum}></ForumTopic>)
            }
        </div>
    );
};

export default Forum;
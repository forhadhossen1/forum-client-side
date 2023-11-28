import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePost = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: myPost = [], refetch } = useQuery({
        queryKey: ['forum', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/forum?email=${user?.email}`)
            return res.data;
        }
    })

    return [refetch, myPost]
};

export default usePost;

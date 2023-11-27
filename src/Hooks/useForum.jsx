import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useForum = () => {
    const axiosPublic = useAxiosPublic();
    const { data: forums = [], isPending: loading, refetch } = useQuery({
        queryKey: ['forums'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forum');
            return res.data;
        }
    })
    return [forums, refetch, loading,]
};

export default useForum;
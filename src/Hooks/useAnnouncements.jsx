import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAnnouncements = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: announcement = [] } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            const res = await axiosSecure.get('/announcements')
            return res.data;
        }
    })
    return [announcement, refetch]
};

export default useAnnouncements;
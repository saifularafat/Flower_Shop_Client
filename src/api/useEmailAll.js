import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useEmailAll = () => {
    const { data: emails = [], refetch, isLoading } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/allEmail`)
            return res.data;
        },
    });
    return [emails, refetch, isLoading];
};


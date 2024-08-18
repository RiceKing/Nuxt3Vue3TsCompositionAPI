import type { User } from "@/types/user"; 

export const fetchUsersList = async (query: any): Promise<Array<User>> => {
    try {
        const config = useRuntimeConfig(); 

        const response: Array<User> = await $fetch('/users', {
            baseURL: config.public.API_BASE, 
            query,
        });
        
        return response
    } catch (error) {
        console.error('Error fetching data:', error);
        return []
    }
}
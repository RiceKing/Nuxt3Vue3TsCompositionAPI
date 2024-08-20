// todo убрать из composables
import type { User } from "@/types/user"; 

export const fetchUsersList = async (query: Record<string, any>): Promise<Array<User>> => {
    const config = useRuntimeConfig(); 

    try {
        const data = await $fetch<Array<User>>('/users', {
            baseURL: config.public.API_BASE,
            query,
        });

        return data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; 
    }
}
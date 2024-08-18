const config = useRuntimeConfig(); 

export const fetchUsersList = async (query) => {
    try {
        const response = await $fetch('/users', {
            baseURL: config.public.API_BASE, 
            query,
        });
        
        return response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
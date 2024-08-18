import { fetchUsersList } from "../useFetch/fetchUsersList";
import type { User } from "@/types/user";

const isLoading = ref<boolean>(true);
const usersList = ref<Array<User>>([]);

export const refsList = () => {
    return {
        usersList,
        isLoading
    }
}

export const getUsersList = () => {
    const route = useRoute();
    const query = {
        id: route?.query?.id || route?.query?.show || undefined,
        name: route?.query?.name || undefined,
    };

    isLoading.value = true

    fetchUsersList(query)
        .then((res: Array<User>) =>
            usersList.value = res || []
        ).finally(() => {
            isLoading.value = false
        });
} 

export const showUserCard = computed(() => {
    const route = useRoute();

    if(!route?.query?.show && !usersList.value?.length) return undefined
    return usersList.value.find((user: User) => user.id === Number(route?.query?.show))
})

export const clearUsersList = () => {
    usersList.value = []
}
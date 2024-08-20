import { fetchUsersList } from "../useFetch/fetchUsersList";
import type { User } from "@/types/user";

const usersList = ref<Array<User>>([]);

export const refsList = () => {
    return {
        usersList
    }
}

export const getUsersList = () => {
    const loadingStore = useLoadingStore()

    const route = useRoute();
    const query = {
        id: route?.query?.id || route?.query?.show || undefined,
        name: route?.query?.name || undefined,
    };
    
    loadingStore.startLoading()

    fetchUsersList(query)
        .then((res: Array<User>) =>
            usersList.value = res || []
        ).finally(() => {
            loadingStore.stopLoading()
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
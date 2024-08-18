<template>
    <ContainerAsidePage>
        <template #aside>
            <Aside :isLoading="isLoading" :list="usersList" />
        </template>

        <MainBlock :isLoading="isLoading" :item="showUserCard" />
    </ContainerAsidePage>
</template>

<script lang="ts" setup>
import Aside from "@/components/sections/jilfond/aside/index.vue";
import MainBlock from "@/components/sections/jilfond/main/index.vue";

import { fetchUsersList } from "@/composables/api/useUsers.js";
import type { User } from "@/types/user";

definePageMeta({ layout: 'jilfond', ssr: false });

const route = useRoute()
const config = useRuntimeConfig();

const usersList = ref<Array<User>>([]);
const isLoading = ref<boolean>(false)

const showUserCard = computed(() => {
    if(usersList.value.length === 1) return usersList.value[0]
    if(!route?.query?.show && !usersList.value?.length) return undefined
    return usersList.value.find(user => user.id === Number(route?.query?.show))
})



const getUsersList = () => {
    const query = {
        id: route?.query?.id || route?.query?.show || undefined,
        name: route?.query?.name || undefined,
    };

    (async function () {
        usersList.value = await fetchUsersList(query)
    })();
} 



watch(() => route.query, (newValue, oldValue) => {
    if((newValue?.id?.length || newValue?.name?.length) && !newValue?.show) getUsersList()
    else if(!newValue?.show) usersList.value = []

    if(!newValue?.id?.length && !newValue?.name?.length) usersList.value = []
})

// const usersList: Array<User> = [{id: 1, username: 'username1', name: 'username2', email: 'email1', avatar: 'https://avatars.githubusercontent.com/u/12288165?v=4'}, {id: 2, username: 'username2', name: 'name2', email: 'email2'}]
</script>
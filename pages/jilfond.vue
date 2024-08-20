<template>
    <ContainerAsidePage>
        <template #aside>
            <Aside :isLoading="loadingStore.isLoading" :list="usersList" />
        </template>

        <MainBlock :isLoading="loadingStore.isLoading" :item="showUserCard" />
    </ContainerAsidePage>
</template>

<script lang="ts" setup>
import Aside from "@/components/sections/jilfond/aside/index.vue";
import MainBlock from "@/components/sections/jilfond/main/index.vue";

import { getUsersList, showUserCard, refsList, clearUsersList } from "@/composables/api/useUsers";

definePageMeta({ layout: 'jilfond' });

const loadingStore = useLoadingStore()

const { usersList } = refsList()
const { query } = useRoute()
const route = useRoute() 

provide("usersList", usersList);

onMounted(() => {
    if(query?.id?.length || query?.name?.length || query?.show?.length) getUsersList();
});

onUnmounted(() => {
    clearUsersList()
})

watch(() => route.query, (newValue: any) => {
    if((newValue?.id?.length || newValue?.name?.length) && !newValue?.show) getUsersList()
    else if(!newValue?.show) clearUsersList()

    if(!newValue?.id?.length && !newValue?.name?.length) clearUsersList()
})
</script>
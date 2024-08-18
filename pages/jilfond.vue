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

import { getUsersList, showUserCard, refsList } from "@/composables/api/useUsers";

definePageMeta({ layout: 'jilfond', ssr: false });

const { usersList, isLoading } = refsList()
const route = useRoute()

watch(() => route.query, (newValue) => {
    if((newValue?.id?.length || newValue?.name?.length) && !newValue?.show) getUsersList()
    else if(!newValue?.show) usersList.value = []

    if(!newValue?.id?.length && !newValue?.name?.length) usersList.value = []
})
</script>
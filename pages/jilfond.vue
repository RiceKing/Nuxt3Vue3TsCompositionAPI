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
import { useStore } from "vuex";

// import { useUserList } from "@/composables/api/useUsers.js";
import type { User } from "@/types/user";

definePageMeta({ layout: 'jilfond', ssr: false });

const route = useRoute()
const config = useRuntimeConfig();
const store = useStore();

const usersList = computed((): Array<User> => store.state.usersList);
const isLoading = computed((): boolean => store.state.isLoading);

const showUserCard = computed((): User | undefined => {
    if (usersList.value.length === 1) return usersList.value[0];
    if (!route?.query?.show && !usersList.value?.length) return undefined;
    return usersList.value.find(user => user.id === Number(route?.query?.show));
});

const getUsersList = () => {
  const query = {
    id: route?.query?.id || route?.query?.show || undefined,
    name: route?.query?.name || undefined,
  };
  store.dispatch('fetchUsersList', query);
};

onMounted(() => {
    if(route.query?.id?.length || route.query?.name?.length || route.query?.show?.length) getUsersList();
});

onUnmounted(() => {
    store.commit('clearUsersList');
})

watch(() => route.query, (newValue) => {
  if ((newValue?.id?.length || newValue?.name?.length) && !newValue?.show) {
    getUsersList();
  } else if (!newValue?.show) {
    store.commit('clearUsersList');
  }
  if (!newValue?.id?.length && !newValue?.name?.length) {
    store.commit('clearUsersList');
  }
});

// const usersList: Array<User> = [{id: 1, username: 'username1', name: 'username2', email: 'email1', avatar: 'https://avatars.githubusercontent.com/u/12288165?v=4'}, {id: 2, username: 'username2', name: 'name2', email: 'email2'}]
</script>
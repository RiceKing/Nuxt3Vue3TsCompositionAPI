<template>
    <ContainerAsidePage>
        <template #aside>
            <Aside :list="usersList" />
        </template>

    </ContainerAsidePage>
   
</template>

<script lang="ts" setup>
import Aside from "@/components/sections/jilfond/aside/index.vue";
// import { useUserList } from "@/composables/api/useUsers.js";
import type { User } from "@/types/user";

definePageMeta({ layout: 'jilfond' });

const route = useRoute()
const config = useRuntimeConfig();

const usersList = ref<Array<User>>([]);

const getUsersList = async () => {
  try {
    usersList.value = await $fetch('/users', {
      baseURL: config.public.API_BASE,
      query: {
        id: route?.query?.id || undefined,
        username: route?.query?.username || undefined
      }
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    usersList.value = []; 
  }
}

watch(() => route.query.id, (newValue) => {
    if(newValue) getUsersList()
    else usersList.value = []
})

// const usersList: Array<User> = [{id: 1, username: 'username1', name: 'username2', email: 'email1', avatar: 'https://avatars.githubusercontent.com/u/12288165?v=4'}, {id: 2, username: 'username2', name: 'name2', email: 'email2'}]
</script>
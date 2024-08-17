<template>
    <div>
        <Header class="--mb" />
        <ListUserCards :isLoading="isLoading" :list="list"/>
    </div>
</template>

<script lang="ts" setup>
import Header from "@/components/sections/jilfond/aside/components/Header/index.vue"
import ListUserCards from "@/components/sections/jilfond/aside/components/ListUserCards/index.vue"
import type { User } from "~/types/user";

const props = withDefaults(defineProps<{list?: Array<User>, isLoading: boolean}>(), { 
    list: () => [],
    isLoading: false
})
</script>
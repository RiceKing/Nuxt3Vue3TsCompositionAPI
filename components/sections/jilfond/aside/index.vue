<template>
    <div>
        <Header class="--mb" />
        <ListUserCards :list="testArray"/>
    </div>
</template>

<script lang="ts" setup>
import Header from "@/components/sections/jilfond/aside/components/Header/index.vue"
import ListUserCards from "@/components/sections/jilfond/aside/components/ListUserCards/index.vue"
import type { User } from "~/types/user";

const testArray: Array<User> = [{id: 1, username: 'username1', name: 'username2', email: 'email1', avatar: 'https://avatars.githubusercontent.com/u/12288165?v=4'}, {id: 1, username: 'username2', name: 'name2', email: 'email2'}]
</script>
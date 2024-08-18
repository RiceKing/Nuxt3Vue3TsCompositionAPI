<template>
    <div class="page">
        <UserSelectedItems :limit="6" :items="userItems" />
        <UserSelectedItems :limit="1" :items="offeredItems" />
    </div>
</template>

<script lang="ts" setup>
import UserSelectedItems from "@/components/sections/dvaPacana/container/UserSelectedItems.vue";

import userItems from '~/public/data/user-items.json';
import offeredItems from '~/public/data/offered-items.json';
</script>
  
<style lang="scss" scoped>
.page {
    padding-top: 40px;
    display: flex;
    gap: 16px;
}    
</style>
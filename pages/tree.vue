<template>
    <div class="page">
        <Tree :items="items" />
    </div>
</template>

<script lang="ts" setup>
import treeStoreData from '~/public/data/tree-store-data.json';
import Tree from "@/components/sections/tree/index.vue"
import type { TreeItem } from '~/types/treeItem';

const items = treeStoreData as TreeItem[]

</script>

<style scoped>
.page {
    padding-top: 40px;
}    
</style>
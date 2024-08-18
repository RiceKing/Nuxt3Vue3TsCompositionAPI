<template>
    <div class="selected-items box">
        <div class="list">
            <div class="item" v-for="(item) in selectedItems" :key="item.id" v-text="item.name" />
        </div>
      
        <p v-if="counterTextPrint" v-text="counterTextPrint" />
    </div>
</template>
  
<script lang="ts" setup>
import type { SimpleItem } from "@/types/simpleItem";

interface Props {
    selectedItems?: Set<SimpleItem>,
    limit?: number
}

const props = withDefaults(defineProps<Props>(), {
    selectedItems: () => new Set<SimpleItem>(), 
    limit: 1 
});

const counterTextPrint = computed(() => {
    return props.limit > 1 ? `selected: ${props.selectedItems.size} / ${props.limit}` : ''
})
</script>
  
<style lang="scss"scoped>
.selected-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.box, .item {
    border: 2px solid black;
    padding: 10px;
    white-space: nowrap;
}
</style>
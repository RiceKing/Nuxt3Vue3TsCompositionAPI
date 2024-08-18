<template>
    <div class="container">
        <PrintSelectedItems :limit="limit" :selectedItems="selectedItems" />
        <div class="box">
            <SelectButton
                v-for="(item) in items" :key="item.id"
                :item="item"
                :isDisabled="selectedItems.has(item)"
                @select="updateSelectedItems"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import SelectButton from '../ui/SelectButton.vue'; 
import PrintSelectedItems from '../ui/PrintSelectedItems.vue'; 
import type { SimpleItem } from "@/types/simpleItem";

interface Props {
    items?: Array<SimpleItem>,
    limit?: number
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    limit: 1 
})
const emit = defineEmits()

const selectedItems = ref<Set<SimpleItem>>(new Set())

const updateSelectedItems = (item: SimpleItem) => {
    selectedItems.value.add(item);

    if (selectedItems.value.size > props.limit) {
        const firstItem = Array.from(selectedItems.value)[0];
        selectedItems.value.delete(firstItem);
    }

    emit('updateSelectedItems', selectedItems.value)
}

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}


.box {
    border: 2px solid black;
    padding: 10px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
</style>
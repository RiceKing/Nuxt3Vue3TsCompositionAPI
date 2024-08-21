<template>
    <div>
        <BaseText class="--mb" tag="h1" type="title-16">
            TreeStore
        </BaseText>

        <div class="print-result">
            {{ result }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { TreeItem } from "~/types/treeItem";
import { TreeStore } from "~/utils/testTask/TreeStore";

const props = defineProps({
    items: {
        type: Array<TreeItem>,
        require: true
    }
})

const ts = new TreeStore(props.items || [])
console.log(ts)

const result = ''
</script>
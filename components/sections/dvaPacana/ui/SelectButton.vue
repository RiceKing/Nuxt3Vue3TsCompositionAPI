<template>
    <button v-if="item.name" class="select-button" @click="onSelect" :disabled="isDisabled" v-text="item.name" />
</template>

<script lang="ts" setup>
import type { SimpleItem } from '~/types/simpleItem';
interface Props {
    item: SimpleItem,
    isDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    isDisabled: false
})

const emit = defineEmits()

const onSelect = () => {
    emit('select', props.item)
}
</script>

<style lang="scss" scoped>
.select-button {
    border: 2px solid black;
    padding: 10px;
    background: pink;
}
</style>
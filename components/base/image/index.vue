<template>
    <div :class="['image-wrap', {'--empty': !src}]">
        <img v-if="src" class="image" :src="src" v-bind="$attrs">
        <img v-else class="image__empty" alt="Изображение отсутствует" src="/public/images/EmptyImage.png">
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'Image',
    inheritAttrs: false
})

const props = defineProps<{
    src?: string; 
}>();

const src = props.src || undefined
</script>
<template>
    <div :class="['image-wrap', {'--empty': !src}]">
        <img v-if="src" class="image" :src="src" v-bind="$attrs">
        <img v-else class="image__empty" alt="Изображение отсутствует" src="/public/images/EmptyImage.png">
    </div>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'Image',
    inheritAttrs: false,
})

const props = defineProps<{
    src?: string; 
}>();

const src = props.src || undefined
</script>

<style lang="scss" scoped>
.image-wrap {
    width: 100%;
    height: 100%;

    &.--empty {    
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.image__empty {
    max-width: 50%;
}

.image {
    max-width: 100%;
}
</style>
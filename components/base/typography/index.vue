<template>
    <component
        v-bind="$attrs"
        :is="props.tag"
        :class="['typography', props.type, props.mode]"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'Typography',
    inheritAttrs: false,
})

const props = defineProps({
    tag: { default: 'p', type: String },
    type: { default: 'p', type: String },
    mode: { default: '', type: String },
})
</script>

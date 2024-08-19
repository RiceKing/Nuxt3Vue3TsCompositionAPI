<template>
    <component
        v-bind="$attrs"
        :is="tag"
        :class="['typography', type, mode]"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
interface Props {
    tag?: string,
    type?: string,
    mode?: string,
}

defineOptions({
    name: 'BaseText',
    inheritAttrs: false
})

const props = withDefaults(defineProps<Props>(), {
    tag: 'p',
    type: 'p',
    mode: ''
})
</script>

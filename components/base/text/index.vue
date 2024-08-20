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

type Tag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
type Type = 'title-16' | 'text-14-400' | 'text-14-600'
type Mode = 'typography' | 'jilfond-typography'  

interface Props {
    tag?: Tag,
    type?: Type,
    mode?: Mode,
}

defineOptions({
    name: 'BaseText',
    inheritAttrs: false
})

const props = withDefaults(defineProps<Props>(), {
    tag: 'p',
})
</script>

<template>
    <input
        :class="[
            'form-input',
            { '--error': error },
        ]"
        v-bind="$attrs"
        :value="modelValue"
        @input="handleInput"
        :placeholder="placeholder"
    />
</template>
<script lang="ts" setup>
interface Props {
    modelValue?: string,
    placeholder?: string,
    error?: boolean
}

interface Emit {
    (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
    placeholder: "Введите",
    error: false
})

const emit = defineEmits<Emit>()

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement; 
    if (target) emit('update:modelValue', target.value)
};
</script>

<style lang="scss" scoped>
@import "./formInput.scss"
</style>
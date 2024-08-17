<template>
    <input
        :class="[
            'form-input',
            { '--error': props.error },
        ]"
        v-bind="$attrs"
        :value="props.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
    />
</template>
<script setup>
const props = defineProps({
    modelValue: { default: "", type: String },
    placeholder: { default: "Введите", type: String},
    error: { default: false, type: Boolean },
});
</script>

<style lang="scss" scoped>
@import "./formInput.scss"
</style>
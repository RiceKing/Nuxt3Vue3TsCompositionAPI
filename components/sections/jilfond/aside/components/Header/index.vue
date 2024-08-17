<template>
    <div class="aside__header">
        <BaseTypography class="--mb" tag="h5" type="title-16" mode="jilfond-typogaphy">
            {{props.title}}
        </BaseTypography>
        <BaseFormInput type="text" v-model="searchValue" placeholder="Введите Id или имя"/>
    </div>
</template>

<script lang="ts" setup>
const searchValue = ref<string>('')
const props = defineProps({
    title: {default: 'Поиск сотрудников', type: String}
})
</script>
<template>
    <div>
        
        <BaseTypography 
            tag="h1" 
            type="title-16" 
            mode="jilfond-typogaphy"
        >
            Тестовое задание для jilfond
        </BaseTypography>
        <BaseTypography 
            tag="p" 
            type="text-14-400" 
            mode="jilfond-typogaphy"
        >
            Обычный текст
        </BaseTypography>
        <BaseTypography 
            tag="p" 
            type="text-14-600" 
            mode="jilfond-typogaphy"
        >
            Жирный текст
        </BaseTypography>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'jilfond' });
</script>
<template>
    <div class="list-user-cards">
        <BaseTypography class="--mb" tag="h5" type="title-16" mode="jilfond-typogaphy">
            {{title}}
        </BaseTypography>
        
        <div class="list-wrap" v-if="list">
            <CardUser :item="item" v-for="item in list" :key="item.id" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { User } from "@/types/user";

const props = defineProps<{
    title?: string; 
    list: User[]; 
}>();

const title = props.title || 'Список пользователей';
const list = props.list || [];
</script>

<style lang="scss" setup>
.list-wrap {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
</style>
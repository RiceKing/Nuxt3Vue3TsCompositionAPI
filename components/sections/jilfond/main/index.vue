<template>
    <div class="jilfond-main" :class="{'--empty': !item}">
        <CardUserBig v-if="item" :item="item" />
        <BaseText v-else tag="p" type="text-14-400" mode="jilfond-typography">
            {{ emptyMessage }}
        </BaseText>
    </div>
</template>

<script lang="ts" setup>
import type { User } from "@/types/user";

interface Props {
    item?: User;
    isLoading: boolean;
}

const emptyMessage = computed(() => {
    return props.isLoading ? 'Загрузка...' : 'Выберите сотрудника, чтобы посмотреть его профиль'
})

const props = withDefaults(defineProps<Props>(), {
    item: undefined,
    isLoading: false
})
</script>

<style lang="scss" scoped>
.jilfond-main {
    width: 100%;

    &.--empty {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>  
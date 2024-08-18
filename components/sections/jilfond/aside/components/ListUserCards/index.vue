<template>
    <div class="list-user-cards">
        <BaseTypography class="--mb" tag="h5" type="title-16" mode="jilfond-typography">
            {{title}}
        </BaseTypography>

        <div class="list-wrap" v-if="list.length">
            <CardUser :class="{'--active': item.id === isActiveId}" @onClick="selectCard" :item="item" v-for="item in list" :key="item.id" />
        </div>
        <BaseTypography v-else tag="p" type="text-14-400" mode="jilfond-typography">
            {{listEmptyMessage}}
        </BaseTypography>
    </div>
</template>

<script lang="ts" setup>
import type { User } from "~/types/user";

const route = useRoute()
const router = useRouter()
const props = withDefaults(defineProps<{list?: Array<User>, title?: string; isLoading: boolean}>(), { 
    list: () => [],
    title: 'Результаты',
    isLoading: false
})

const isActiveId = ref<number | undefined>(undefined)

const listEmptyMessage = computed(() => {
    if(props.isLoading) return 'Загрузка...'
    return route?.query?.id || route?.query?.username ? 'Ничего не найдено' : 'Начните поиск'
})

const updateQuerySelectId = () => {
  router.push({ query: { ...route.query, show: isActiveId.value } });
};

const selectCard = (item: User) => {
    isActiveId.value = item.id,
    updateQuerySelectId()
}

watch(() => props.list, () => {
    isActiveId.value = undefined;
})
</script>

<style lang="scss" setup>
.list-wrap {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-height: 500px;
    overflow-y: auto;
    margin: 0 -20px;
    width: calc(100% + 40px);
    padding: 10px 20px 20px;
}
</style>
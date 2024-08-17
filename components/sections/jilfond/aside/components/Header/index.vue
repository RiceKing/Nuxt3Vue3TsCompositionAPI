<template>
    <div class="aside__header">
        <BaseTypography class="--mb" tag="h5" type="title-16" mode="jilfond-typography">
            {{props.title}}
        </BaseTypography>
        <BaseFormInput type="text" v-model="searchValue" placeholder="Введите Id или имя"/>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import type { User } from "@/types/user";
const searchValue = ref<string>('')
const props = defineProps({
    title: {default: 'Поиск сотрудников', type: String}
})

const router = useRouter();
const store = useStore();

const usersList = computed((): string => store.state.usersList.map((item: User) => item.id).join(", ") || '');

const updateQuery = (ids: Array<number>, usersName: Array<string>) => {
  router.push({ query: { id: ids, name: usersName} });
};
const isNumber = (value: any): boolean => {
    return typeof value === 'number' && !isNaN(value);
};


watch(searchValue, (newValue) => {
    const splitValues = newValue.split(',')
    const ids = splitValues.map((val) => Number(val.trim()) ).filter((val) => isNumber(val) && val !== 0)
    const usersName = splitValues.filter((val) => !isNumber(Number(val.trim())))

    updateQuery(ids, usersName)
})

watch(usersList, (newValue) => {
    console.log(usersList, newValue)
    if(newValue?.length && !searchValue.value) searchValue.value = newValue 
})
</script>
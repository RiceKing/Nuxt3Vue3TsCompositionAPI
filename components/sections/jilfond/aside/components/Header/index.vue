<template>
    <div class="aside__header">
        <BaseTypography class="--mb" tag="h5" type="title-16" mode="jilfond-typography">
            {{props.title}}
            {{printIsLoadingMessage}}
        </BaseTypography>
        <BaseFormInput type="text" @input="handleInput" placeholder="Введите Id или имя"/>
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

const updateValue = (value: string) => {
    searchValue.value = value;
};

const debouncedUpdateValue = debounce((value: string) => {
    updateValue(value);
}, 300);

const printIsLoadingMessage = computed(() => {
    return store.state.isLoading ? ' (Загрузка)' : ''
})

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if(target.value?.length) {
        store.commit('setLoading', true)
        debouncedUpdateValue(target.value)
    }
}

const usersList = computed((): string => store.state.usersList.map((item: User) => item.id).join(", ") || '');

const updateQuery = (ids: Array<number>, usersName: Array<string>) => {
  router.push({ query: { id: ids, name: usersName} });
};
const isNumber = (value: any): boolean => {
    return typeof value === 'number' && !isNaN(value);
};

onMounted(() => {
    store.commit('setLoading', false)
})

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
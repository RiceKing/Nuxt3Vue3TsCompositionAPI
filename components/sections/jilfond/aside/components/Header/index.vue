<template>
    <div class="aside__header">
        <BaseTypography class="--mb" tag="h5" type="title-16" mode="jilfond-typography">
            {{props.title}}
        </BaseTypography>
        <BaseFormInput type="text" @input="handleInput" placeholder="Введите Id или имя"/>
    </div>
</template>

<script lang="ts" setup>
import type { User } from "@/types/user"
import { debounce } from "@/utils/debounce"


const searchValue = ref<string>('')

const updateValue = (value: string) => {
    searchValue.value = value;
};

const handleInput = debounce((event: Event) => {
  const target = event.target as HTMLInputElement;
  updateValue(target.value);
}, 300); 

const props = defineProps({
    title: {default: 'Поиск сотрудников', type: String}
})

const router = useRouter();
const usersList = inject("usersList") as Ref<Array<User>>;
const printUserList = computed((): string => usersList.value.map((item: User) => item.id).join(", ") || '');

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

watch(printUserList, (newValue) => {
    if(newValue?.length && !searchValue.value) searchValue.value = newValue 
})
</script>
<template>
    <div class="aside__header">
        <BaseText class="--mb" tag="h5" type="title-16" mode="jilfond-typography">
            {{props.title}}
        </BaseText>
        <BaseFormInput type="text" @input="handleInput" placeholder="Введите Id или имя"/>
    </div>
</template>

<script lang="ts" setup>
import type { User } from "@/types/user"
import { refsList, handleInput, extractIdsAndNames} from "@/composables/api/useJilfond"

const props = defineProps({
    title: {default: 'Поиск сотрудников', type: String}
})

const { searchValue } = refsList();
const usersList = inject("usersList") as Ref<Array<User>>;


const printUserList = computed((): string => usersList.value.map((item: User) => item.id).join(", ") || '');

watch(searchValue, (newValue) => extractIdsAndNames(newValue))

watch(printUserList, (newValue) => {
    if(newValue?.length && !searchValue.value) searchValue.value = newValue 
})
</script>
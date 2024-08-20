// todo: Прочитай хоть что-то про composables:)

import { debouncedStateValue } from "@/composables/utils/useDebounce"
import { updateQueryParams } from "@/composables/utils/useUpdateRouter"

const searchValue = ref<string>('')
const isLoading = ref<boolean>(false)

export const refsList = () => {
    return {
        searchValue,
        isLoading
    }
}

export const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if(target.value) {
        isLoading.value = true
        debouncedStateValue(searchValue, target.value)
    }
}

export const extractIdsAndNames = (newValue: string) => {
    // todo каша
    const splitValues = newValue.split(',')
    const ids = splitValues.map((val) => Number(val.trim())).filter((val) => isNumber(val) && val !== 0)
    const usersName = splitValues.filter((val) => !isNumber(Number(val.trim())))

    updateQueryParams({id: ids, name: usersName})
}
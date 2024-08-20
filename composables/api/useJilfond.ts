import { debouncedStateValue } from "@/composables/utils/useDebounce"
import { updateQueryParams } from "@/composables/utils/useUpdateRouter"

const searchValue = ref<string>('')

export const refsList = () => {
    return {
        searchValue
    }
}

export const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const loadingStore = useLoadingStore()

    if(target.value) {
        loadingStore.startLoading()
        debouncedStateValue(searchValue, target.value)
    }
}

export const extractIdsAndNames = (newValue: string) => {
    const splitValues = newValue.split(',')
    const ids = splitValues.map((val) => Number(val.trim())).filter((val) => isNumber(val) && val !== 0)
    const usersName = splitValues.filter((val) => !isNumber(Number(val.trim())))

    updateQueryParams({id: ids, name: usersName})
}
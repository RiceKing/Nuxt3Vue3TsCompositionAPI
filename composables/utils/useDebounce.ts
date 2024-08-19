import { debounce } from "@/utils/debounce"

const debounceDelay = ref<number>(300)

// todo подумать как ещё можно сделать
const debounced = debounce((stateValue: Ref<any>, newValue: string) => {
    stateValue.value = newValue;
}, debounceDelay.value);

export const debouncedStateValue = (stateValue: Ref<any>, targetValue: string, delay = 300) => {
    debounceDelay.value = delay
    debounced(stateValue, targetValue)    
}

export const debounceInput = (stateValue: Ref<any>, event: Event): void => {
    const target = event.target as HTMLInputElement;

    debouncedStateValue(stateValue, target.value)
}



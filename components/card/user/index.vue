<template>
    <button @click="onClick" class="card-user" v-if="item">
        <div class="avatar">
            <BaseImage :src="item.avatar" :alt="item.name"/>
        </div>
        <div class="info">
            <BaseText class="--m0 info__text --ellipsis" tag="p" type="text-14-500" >
                {{item.username}}
            </BaseText>
            <BaseText class="--m0 info__text --ellipsis" tag="p" type="text-14-400" >
                {{item.email}}
            </BaseText>
        </div>
    </button>
</template>

<script lang="ts" setup>
import type { User } from "@/types/user";

interface Props {
    item?: User
}

const props = withDefaults(defineProps<Props>(), {
    item: undefined,
})

const emit = defineEmits()

const onClick = () => {
    emit('onClick', props.item)
}
</script>

<style lang="scss" scoped>
.card-user {
    display: flex;
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;
    border: 1px solid transparent;
    background-color: #FFF;
    cursor: pointer;
    padding: 0;
        
    &.--active, &:hover {
        border: 1px solid #E0E0E0;
    }

    &.--active {
        background-color: #E0E0E0;
    }
}

.avatar {
    width: 70px;
    height: 70px;
    border-right: 1px solid #E0E0E0;
    background-color: #FFF;
    border-radius: 8px 0 0 8px;
    overflow: hidden;

    :deep(.image) {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    width: 100%;
    align-items: flex-start;

    &__text {
        width: 135px;
        text-align: left;
    }
}
</style>
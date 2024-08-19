<template>
    <div class="card-user" v-if="item">
        <div class="avatar">
            <BaseImage :src="item.avatar" :alt="item.name"/>
        </div>
        <div class="info">
            <BaseText class="--m0" tag="h5" type="title-16">
                {{item.name}}
            </BaseText>

            <div class="info__subject" v-if="item.email">
                <BaseText class="--m0" tag="p" type="text-14-600">
                    email:
                </BaseText>
                <BaseText class="--m0" tag="p" type="text-14-400"> 
                    {{item.email}}
                </BaseText>
            </div>

            <div class="info__subject --mb" v-if="item.email">
                <BaseText class="--m0 " tag="p" type="text-14-600">
                    phone:
                </BaseText>
                <BaseText class="--m0" tag="p" type="text-14-400">
                    {{item.phone}}
                </BaseText>
            </div>
            
            <BaseText v-if="item.about" class="--mb" tag="h5" type="title-16">
                О себе
            </BaseText>
            <BaseText v-if="item.about" class="--m0" tag="p" type="text-14-400">
                {{item.about}}
            </BaseText>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { User } from "@/types/user";

interface Props {
    item?: User
}

const props = withDefaults(defineProps<Props>(), {
    item: undefined,
})
</script>

<style lang="scss" scoped>
.card-user {
    display: flex;
    border: 1px solid transparent;
    background-color: #FFF;
    padding: 0;
    gap: 60px;
}

.avatar {
    max-width: 424px;
    max-height: 286px;
    width: 100%;
    height: 100%;
    aspect-ratio: 424 / 286;
    background-color: #FFF;
    overflow: hidden;
    border: 1px solid #E0E0E0;

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
    gap: 10px;
    width: 100%;
    align-items: flex-start;

    &__text {
        width: 135px;
        text-align: left;
    }

    &__subject {
        display: flex;
        gap: 6px;
    }
}
</style>
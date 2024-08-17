<template>
    <div>
        <br />
        <a href="/">Главная</a>

        <div class="block">
            <h2>- Типографика -</h2>
            <p>mode: jilfond-typogaphy</p>
            <BaseTypography class="--mb" tag="h5" type="title-16" mode="jilfond-typogaphy">
                Заголовок
            </BaseTypography>
            <BaseTypography tag="p" type="text-14-400" mode="jilfond-typogaphy">
                Обычный текст
            </BaseTypography>
            <BaseTypography tag="p" type="text-14-600" mode="jilfond-typogaphy">
                Жирный текст
            </BaseTypography>
        </div>

        <div class="block">
            <h2>- Forms -</h2>
            <p>form-input</p>
            <BaseFormInput class="--mb" type="string" v-model="testValueInput" />
            <BaseTypography tag="h5" type="title-16" mode="jilfond-typogaphy">
                {{testValueInput}}
            </BaseTypography>
        </div>

        <div class="block">
            <h2>- Image -</h2>
            <p>Image</p>
            <div class="block__image">
                <div class="avatar">
                    <BaseImage src="https://avatars.githubusercontent.com/u/12288165?v=4" />
                </div>
                <div class="avatar">
                    <BaseImage src="" />
                </div>
            </div>
           
        </div>
    </div>
</template>

<script lang="ts" setup>
const testValueInput = ref<string>('')
</script>

<style lang="scss" scoped>
.block {
    margin-bottom: 40px;

    &__image {
        display: flex;
        gap: 20px;
    }
}

.avatar {
    width: 100px;
    height: 100px;
    border: 1px solid black;
}
</style>
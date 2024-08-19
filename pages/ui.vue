<template>
    <div>
        <br />
        <a href="/">Главная</a>

        <div class="block">
            <h2>- Типографика -</h2>
            <p>mode: jilfond-typography</p>
            <BaseText class="--mb" tag="h5" type="title-16" mode="jilfond-typography">
                Заголовок
            </BaseText>
            <BaseText tag="p" type="text-14-400" >
                Обычный текст
            </BaseText>
            <BaseText tag="p" type="text-14-600" >
                Жирный текст
            </BaseText>
        </div>

        <div class="block">
            <h2>- Forms -</h2>
            <p>form-input: {{ testValueInput }}</p>
            <BaseFormInput class="--mb" type="string" v-model="testValueInput" />
            <p>form-input: error</p>
            <BaseFormInput class="--mb" type="string" v-model="testValueInput" :error="true" />
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
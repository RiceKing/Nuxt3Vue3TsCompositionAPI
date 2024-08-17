<template>
    <div class="container">
        <div class="aside">
            <slot name="aside" />
        </div>
        <div class="main">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
}

.aside {
    flex-basis: 293px;
}

.main {
    flex: 1 1;
}
</style>
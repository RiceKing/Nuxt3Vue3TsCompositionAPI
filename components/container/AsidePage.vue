<template>
    <div class="aside-page">
        <div class="aside">
            <slot name="aside" />
        </div>
        <div class="main">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.aside-page {
    display: flex;
    background-color: #FDFDFD;
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;
    min-height: 589px;
}

.aside {
    flex-basis: 293px;
    border-right: 1px solid #DEDEDD;
    padding: 27px 20px;
}

.main {
    flex: 1 1;
    padding: 27px 20px;
}
</style>
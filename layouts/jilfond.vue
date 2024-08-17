<template>
    <div class="wrapper">        
        <ComponentHeaderJilfond class="container" />
        <main class="container --main">
            <slot />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

.container {
    max-width: 1266px; 
    width: 100%;

    &.--main {
        flex: 1;
        margin-bottom: 44px;
    }
}
</style>
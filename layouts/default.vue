<template>
    <div class="wrapper">
        <main class="container">
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
    max-width: calc(1200px + 106px); // todo calc(+106) временное решение удалить 
    width: 100%;
    padding: 0 20px;
}
</style>
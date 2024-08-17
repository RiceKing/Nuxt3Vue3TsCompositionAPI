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
    max-width: 1266px; 
    width: 100%;
}
</style>
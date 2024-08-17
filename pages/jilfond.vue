<template>
    <ContainerAsidePage>
        

        <template #aside>
            <Aside />
        </template>
    </ContainerAsidePage>
   
</template>

<script setup>
import Aside from "@/components/sections/jilfond/aside/index.vue"
definePageMeta({ layout: 'jilfond' });

</script>
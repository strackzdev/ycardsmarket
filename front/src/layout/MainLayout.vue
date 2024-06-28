<template>
    <Header/>
    <RouterView/>
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import Header from '@/layout/LoginHeader.vue';
    import NavigationCards from '@/layout/NavigationCards.vue';
</script>
<template>
    <Header/>
    <RouterView/>
    <NavigationCards/>
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import Header from '@/layout/Header.vue';
    import NavigationCards from '@/layout/NavigationCards.vue';
</script>
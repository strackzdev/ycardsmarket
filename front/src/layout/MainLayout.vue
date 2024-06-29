<template>
  <Header/>
  <RouterView/>
  <ConfirmModal />
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import Header from '@/layout/LoginHeader.vue';
    import ConfirmModal from '@/components/modal/ConfirmModal.vue'
    import NavigationCards from '@/layout/NavigationCards.vue';
</script>
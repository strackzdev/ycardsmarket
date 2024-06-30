<template>
  <Header/>
  <RouterView/>
  <ConfirmModal />
  <ToastNotification />
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import Header from '@/layout/LoginHeader.vue';
    import ConfirmModal from '@/components/modal/ConfirmModal.vue'
    import ToastNotification from '@/components/toast/ToastNotification.vue'
</script>
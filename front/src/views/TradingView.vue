<script setup lang="ts">
import { useMainStore } from '@/stores/store'

const mainStore = useMainStore()

</script>

<template>
  <div>
    {{ mainStore.name }}
    <p>{{ mainStore.count }}</p>
    <p>{{ mainStore.doubleCount }}</p>
    <input v-model="mainStore.name" />
    <button @click="mainStore.increment">Increment</button>
  </div>
</template>

<style scoped>

</style>
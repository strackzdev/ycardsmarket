<template>
  <div class="pt-8 mt-20">
    <div class="flex justify-between">
      <h1 class="md:px-8 lg:px-24 mb-10 navy-blue font-bold text-center md:text-left text-xl md:text-5xl uppercase">Trade #{{id}}</h1>
    </div>

    <div class="flex gap-10 min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative">

    </div>
  </div>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const id = computed(() => route.params.id)

</script>

<style scoped>

</style>
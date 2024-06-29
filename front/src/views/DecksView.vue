<template>
  <div class="pt-8 mt-20">
    <h1 class="md:px-8 lg:px-24 mb-10 navy-blue font-bold text-center md:text-left text-xl md:text-5xl uppercase">Decks</h1>
    <h2 class="uppercase text-center">Feature under development</h2>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios'
import { ref } from 'vue';

  const cardgames = ref<string>();

  axios.get(`${import.meta.env.VITE_BACKEND_PROXY}/cardgames`).then(res => {
    cardgames.value = res.data
  })

</script>
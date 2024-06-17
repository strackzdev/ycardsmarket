<template>
  <div class="text-green-700 text-xl">DECKS</div>
  {{ cardgames }}
</template>

<script setup lang="ts">
  import axios from 'axios'
import { ref } from 'vue';

  const cardgames = ref<string>();

  axios.get('backend/cardgames').then(res => {
    cardgames.value = res.data
  })

</script>
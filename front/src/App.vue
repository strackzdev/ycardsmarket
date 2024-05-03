<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavCards from '../src/components/NavCards.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">

      </div>
    </header>

    <RouterView />
  </div>
  <NavCards />
</template>
<home-view/>

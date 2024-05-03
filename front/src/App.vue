<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavCards from '../src/components/NavCards.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/home">HOME</RouterLink>
          <RouterLink to="/decks">DECKS</RouterLink>
          <RouterLink to="/deck-builder">DECK BUILDER</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
  <NavCards />
</template>
<home-view/>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/decks">DECKS</RouterLink>
        <RouterLink to="/deck-builder">DECK BUILDER</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/decks">My Decks</RouterLink>
      <RouterLink to="/deck-builder">Deck Builder</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
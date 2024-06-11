<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background with blur -->
    <div class="absolute inset-0 background-image"></div>
    <!-- Content -->
    <div class="pl-custom relative z-10 grid grid-cols-3 gap-4">
      <div class="text-center textMargin" style="width: 1100px;"> <!-- Adjust the width as needed -->
        <h1 class="mt-40 font-bold tracking-tight text-white sm:text-7xl text-left"
            style="font-size: 5rem; word-wrap: break-word;">Empower Your Deck, Trade with YCardsMarket!</h1>
        <div class="mt-20 flex items-center">
          <Button @click="exchangeClicked" fontSize="1.5rem" minWidth="200px">TRADE NOW !</Button>
        </div>
      </div>
    </div>
  </div>
  <div style="margin-left: 450px; margin-bottom: 100px; margin-top: 100px">
    <div style="margin-left: 280px; font-size: 4rem" class="mt-10 text-black font-semibold">OVERALL CARDS</div>
    <p style="margin-left: 150px; font-size: 1rem" class="mt-8 text-black">
      Do you want to browse through available cards in the following TGC? Just click on the appropriate game!
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="card-container mt-4 mb-4">
      <overall-cards
          title="LORCANA"
          redirectUrl="https://example.com/1"
      />
    </div>
    <div class="card-container mt-4 mb-4">
      <overall-cards
          title="MAGIC THE GATHERING"
          redirectUrl="https://example.com/2"
      />
    </div>
    <div class="card-container mt-4 mb-4">
      <overall-cards
          title="POKEMON"
          redirectUrl="https://example.com/3"
      />
    </div>
    <div class="card-container mt-4 mb-4">
      <overall-cards
          title="YU-GI-OH"
          redirectUrl="https://example.com/4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/homeButton.vue';
import overallCards from '@/components/overallCards.vue';

</script>

<style scoped>
.textMargin {
  margin-top: 200px;
}

.background-image {
  background-image: url('../../src/assets/images/homeBackground.jpeg');
  padding: inherit;
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  margin: -20px;
}

.card-container {
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.card-container > overall-cards {
  text-align: center;
  display: inline-block;
  font-size: 1em;
}

.card-container > overall-cards > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .card-container {
    max-width: 100%; /* Adjust for smaller screens */
  }
}
</style>
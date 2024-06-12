<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background with blur -->
    <div class="absolute inset-0 background-image"></div>
    <!-- Content -->
    <div class="pl-custom relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-60">
      <div class="text-center textMargin responsive-width">
        <h1 class="font-bold tracking-tight text-white text-left responsive-text">
          Empower Your Deck,<span class="block">Trade with YCardsMarket!</span>
        </h1>
        <div class="mt-20 flex items-center justify-center md:justify-start">
          <Button @click="exchangeClicked" fontSize="1.5rem" minWidth="50px">TRADE NOW !</Button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center my-10 px-4 md:px-20">
    <div class="text-4xl font-semibold text-black">OVERALL CARDS</div>
    <p class="mt-8 text-black text-lg">
      Do you want to browse through available cards in the following TGC? Just click on the appropriate game!
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20">
    <div class="card-container mt-4 mb-4" v-for="card in cards" :key="card.title">
      <overall-cards
          :title="card.title"
          :redirectUrl="card.redirectUrl"
          class="card-content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import Button from '@/components/homeButton.vue';
import overallCards from '@/components/overallCards.vue';

const cards = reactive([
  {title: 'LORCANA', redirectUrl: 'https://example.com/1'},
  {title: 'MAGIC THE GATHERING', redirectUrl: 'https://example.com/2'},
  {title: 'POKEMON', redirectUrl: 'https://example.com/3'},
  {title: 'YU-GI-OH', redirectUrl: 'https://example.com/4'},
]);

const exchangeClicked = () => {
  // Your logic here
};
</script>

<style scoped>
.textMargin {
  margin-top: 200px;
}

.background-image {
  background-image: url('../../src/assets/images/homeBackground.jpeg');
  background-size: cover;
  background-position: center;
  filter: blur(4px);
}

.responsive-width {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.responsive-text {
  font-size: 5rem;
}

.block {
  display: block;
}

@media (max-width: 1068px) {
  .textMargin {
    margin-top: 100px;
  }

  .responsive-width {
    padding: 0 10px;
  }

  .responsive-text {
    font-size: 2rem;
  }
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  height: 100%; /* Ensure the container takes the full height */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px; /* Adjust as necessary */
}

.card-content h3, .card-content p {
  margin-bottom: 1rem; /* Ensure there is always some margin at the bottom */
}

@media (max-width: 768px) {
  .textMargin {
    margin-top: 100px;
  }
}
</style>

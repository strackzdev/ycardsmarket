<script setup lang="ts">
import Button from '@/components/homeButton.vue';
import overallCards from '@/components/overallCards.vue';

/*
export default {
    components: {
      Button,
    },
    methods: {
      loginClicked() {
        // Handle login button click
      },
      registerClicked() {
        // Handle register button click
      },
      exchangeClicked() {
        // Handle exchange button click
      },
    },
};
 */

</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background with blur -->
    <div class="absolute inset-0 background-image pl-custom-left"></div>
    <!-- Content -->
    <div class="ml-40 relative z-10 grid grid-cols-3 gap-4">

      <div class="text-center textMargin" style="width: 1100px;"> <!-- Adjust the width as needed -->
        <h1 class="mt-40 font-bold tracking-tight text-white sm:text-7xl text-left" style="font-size: 5rem; word-wrap: break-word;">Empower Your Deck, Trade with YCardsMarket!</h1>
        <div class="mt-20 flex items-center gap-x-6" style="">
          <Button @click="exchangeClicked" fontSize="3rem">TRADE NOW !</Button>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="mt-4 mb-4 ml-4">
      <overall-cards
          title="Card Title 1"
          description="Description for card 1"
          redirectUrl="https://example.com/1"
      />
    </div>
    <div class="mt-4 mb-4">
      <overall-cards
          title="Card Title 2"
          description="Description for card 2"
          redirectUrl="https://example.com/2"
      />
    </div>
    <div class="mt-4 mb-4">
      <overall-cards
          title="Card Title 3"
          description="Description for card 3"
          redirectUrl="https://example.com/3"
      />
    </div>
    <div class="mt-4 mb-4">
      <overall-cards
          title="Card Title 4"
          description="Description for card 4"
          redirectUrl="https://example.com/4"
      />
    </div>
  </div>
</template>

<style scoped>
.textMargin {
  margin-left: 30px;
  margin-top: 200px;
}
.background-image {
  background-image: url('../../src/assets/images/homeBackground.jpeg');
  padding: inherit;
  background-size: cover; background-position: center; filter: blur(8px); margin: -20px;
}
</style>



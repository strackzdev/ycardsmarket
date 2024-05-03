<script setup lang="ts">
import Button from '@/components/homeButton.vue';

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
    <div class="absolute inset-0" style="background-image: url('../../src/assets/images/homeBackground.jpeg'); background-size: cover; background-position: center; filter: blur(8px); margin: -20px;"></div>
    <!-- Content -->
    <div class="ml-40 relative z-10 grid grid-cols-3 gap-4">
      <div class="col-span-2 mt-10 ml-20">
        <img src="../../src/assets/images/logoWhite.png" alt="Image Description" class="w-23 h-28">
      </div>
      <div class="mt-10 mr-20 flex justify-end space-x-4 mr-16 py-6 px-10">
          <Button @click="loginClicked">LOGIN</Button>
          <Button @click="registerClicked">REGISTER</Button>
      </div>
      <div class="text-center ml-20" style="width: 1100px;"> <!-- Adjust the width as needed -->
        <h1 class="mt-60 ml-30 font-bold tracking-tight text-white sm:text-9xl text-left" style="font-size: 6rem; word-wrap: break-word;">Empower Your Deck, Trade with YCardsMarket!</h1>
        <div class="mt-40 flex items-center gap-x-6" style="">
          <Button @click="exchangeClicked" fontSize="3rem">TRADE NOW !</Button>
        </div>
      </div>
    </div>
  </div>
</template>



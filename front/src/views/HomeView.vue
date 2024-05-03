<script setup lang="ts">
import RegisterButton from '@/components/RegisterButton.vue'
import LoginButton from '@/components/LoginButton.vue'
</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background with blur -->
    <div class="absolute inset-0"
         style="background-image: url('../../src/assets/images/homeBackground.jpeg'); background-size: cover; background-position: center; filter: blur(8px); margin: -20px;"></div>
    <!-- Content -->
    <div class="ml-40 relative z-10 grid grid-cols-3 gap-4">
      <div class="col-span-2 mt-10 ml-20">
        <img src="../../src/assets/images/logoWhite.png" alt="Image Description" class="w-23 h-28">
      </div>
      <div class="mt-10 mr-20 flex justify-end space-x-4 mr-16">
        <div class=" justify-end space-x-4 mr-16">
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
      <div class="text-center ml-20" style="width: 1100px;"> <!-- Adjust the width as needed -->
        <h1 class="mt-60 ml-30 font-bold tracking-tight text-white sm:text-9xl text-left"
            style="font-size: 6rem; word-wrap: break-word;">Empower Your Deck,
          Trade with YCardsMarket!</h1>
        <div class="mt-40 flex items-center gap-x-6">
          <button href="#" style="font-size: 3rem;"
             class="ml-30 py-5 px-24 relative text-white font-bold  overflow-hidden transition-colors duration-300 hover:bg-purple-800 border border-white">
            <span class="absolute inset-0 bg-white mix-blend-overlay" style="background-color: rgba(128, 0, 128, 0.2);"></span>
            Echanger
            maintenant
          </button>
        </div>
      </div>
      <div class="col-span-2">07</div>
    </div>
  </div>


</template>



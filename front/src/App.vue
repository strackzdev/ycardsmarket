<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import NavCards from '../src/components/NavCards.vue'
import HomeView from '@/views/HomeView.vue'
import Button from "@/components/homeButton.vue";
import MenuItems from "@/components/menuItems.vue";
</script>

<template>
  <menuItems class="pl-custom-left pr-custom-right"/>

  <RouterView/>
  <NavCards/>
</template>
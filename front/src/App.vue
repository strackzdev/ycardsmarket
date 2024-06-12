<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import NavCards from '../src/components/NavCards.vue'
import HomeView from '@/views/HomeView.vue'
import Button from "@/components/homePage/HomeButton.vue";
import MenuItems from "@/components/homePage/MenuItems.vue";
</script>

<template>
  <menuItems/>

  <RouterView/>
  <NavCards/>
</template>
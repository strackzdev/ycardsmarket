<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import NavCards from './components/NavigationCards.vue'
import HomeView from '@/views/HomeView.vue'
import Button from "@/components/homePage/Buttons.vue";
import MenuItems from "@/components/homePage/Header.vue";
</script>

<template>
  <menuItems/>

  <RouterView/>
  <NavCards/>
</template>
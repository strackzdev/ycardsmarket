<template>
    <img class="rounded-xl" :src="props.card.image_url" alt="">
</template>

<script setup lang="ts">
import { type CardLorcana } from './CardInterface';

// Props
const props = defineProps<{card : CardLorcana}>();
</script>

<style>
img {
    width: 100%;
    height: auto;
}
</style>

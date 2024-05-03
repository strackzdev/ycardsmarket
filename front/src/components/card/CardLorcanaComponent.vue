<template>
    <h1>{{props.card.id}}</h1>
    <h1>{{props.card.name}}</h1>
    <img :src="props.card.image_url" alt="">
</template>

<script setup lang="ts">
import { type CardLorcana } from './CardInterface';

// Props
const props = defineProps<{card : CardLorcana}>();
</script>

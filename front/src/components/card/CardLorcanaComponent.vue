<template>
    <img class="rounded-xl" :class="[isRotated ? 'rotate-90 scale-[0.715]' : '']" :src="props.card.image_url" alt="">
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { type CardLorcana } from './CardInterface';
import { CardLorcanaType } from './CardLorcanaEnum';

// Props
const props = defineProps<{card : CardLorcana}>();

// Refs
const isRotated = ref(false);

// Hook
onMounted(() => {
    doRotation();
})

// Functions
function doRotation() {
    if (props.card.type === CardLorcanaType.LOCATION) {
        console.log(props.card.type)
        isRotated.value = !isRotated.value
    }
}

</script>
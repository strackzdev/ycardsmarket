<template>
  <button :style="buttonStyle" class="relative overflow-hidden transition-colors duration-300 border border-white" @click="$emit('click')">
    <span class="absolute inset-0 bg-white mix-blend-overlay" :style="overlayStyle"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  fontSize: { type: String, default: '1rem' },
  backgroundColor: { type: String, default: 'rgba(128, 0, 128, 0.2)' },
});

const buttonStyle = computed(() => ({
  fontSize: props.fontSize,
}));

const overlayStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>

<style scoped>
button {
  font-weight: bold;
  color: white;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #8a2be2;
}
</style>

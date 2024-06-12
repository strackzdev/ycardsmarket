<template>
  <button
      :style="[buttonBaseStyle, buttonHoverStyle, buttonStyle]"
      class="relative overflow-hidden transition-colors duration-300 border border-white"
      @click="$emit('click')"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <span class="absolute inset-0" :style="[overlayBaseStyle, overlayStyle]"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
  fontSize: { type: String, default: '1rem' },
  backgroundColor: { type: String, default: 'rgba(128, 0, 128, 0.2)' },
});

const isHovered = ref(false);

const buttonBaseStyle = {
  fontWeight: 'bold',
  color: 'white',
  padding: '1rem 8rem',
  cursor: 'pointer',
};

const buttonHoverStyle = computed(() => ({
  backgroundColor: isHovered.value ? '#8a2be2' : 'transparent',
}));

const buttonStyle = computed(() => ({
  fontSize: props.fontSize,
}));

const overlayBaseStyle = {
  mixBlendMode: 'overlay',
};

const overlayStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>

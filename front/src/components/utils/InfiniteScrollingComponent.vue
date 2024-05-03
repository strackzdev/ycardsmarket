<template>
  <div ref="el" class="observer" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
interface IntersectionOptions {
  root: Element | null
  rootMargin: string
  threshold: number
}

// Props
const props = withDefaults(defineProps<IntersectionOptions>(), {
  root: null, rootMargin: '1px', threshold: 1.0
});

// Refs
const options = ref();
const observer = ref<IntersectionObserver | null>(null);
const el = ref();

// Emits
const emit = defineEmits(['intersect']);

// Hooks
onMounted(() => {
  options.value = props || {};
  observer.value = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      emit("intersect");
    }
  }, options.value);

  observer.value.observe(el.value);
})
</script>

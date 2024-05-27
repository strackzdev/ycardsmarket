<template>
  <div class="form-control">
  <select name="club" id="club" @change="updateSelect">
    <option value="">--</option>
    <option v-for="[key, value] in cardLorcanaTypes" :key="key" :value="value">{{ value }}</option>
  </select>
  </div>
</template>

<script setup lang="ts">
import {CardLorcanaSet, CardLorcanaType, CardLorcanaRarity} from '@/components/card/CardLorcanaEnum'
import type { Filter } from '@/views/CollectionView.vue';
import { computed } from 'vue';

// Props
const props = defineProps<{
  filterName: string,
  filterBy: typeof CardLorcanaType | typeof CardLorcanaSet | typeof CardLorcanaRarity
}>()

// Computeds
const cardLorcanaTypes = computed(() => {
  return Object.entries(props.filterBy);
})

// Emits
const emit = defineEmits<{ filter : Filter[] }>();

// Functions
function updateSelect(e: Event) {
    e.preventDefault()
    const target = e.currentTarget as HTMLInputElement;

    emit('filter', { filterName: props.filterName, value: target.value })
}
</script>
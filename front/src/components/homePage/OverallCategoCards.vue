<template>
    <div  class="transform -rotate-6 navy-blue-bg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-10 cursor-pointer min-w-lg max-h-lg max-w-lg min-h-lg text-white "
          :class="[!disabled ? '' : 'button-disabled']"
    >
      <h2 class="text-2xl text-center font-bold mb-2 transform rotate-6 overflow-hidden break-words">{{ title }}</h2>
    </div>
</template>

<script>
export default {
  name: 'TiltedCard',
  props: {
    title: {
      type: String,
      default: 'Card Title',
    },
    description: {
      type: String,
      default: 'This is a sample description for the tilted card component.'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>

.max-w-lg {
  max-width: 200px; /* Adjust this value as needed */
}

.max-h-lg {
  max-height: 120px; /* Adjust this value as needed */
}

.min-w-lg {
  min-width: 300px; /* Adjust this value as needed */
}

.min-h-lg {
  min-height: 120px; /* Adjust this value as needed */
}

.button-disabled:hover {
  cursor: not-allowed;
}

</style>

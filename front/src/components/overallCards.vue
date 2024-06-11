<template>
  <div class="transform -rotate-3 bg-primary shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 rounded-lg cursor-pointer max-w-sm text-white">
    <h2 class="text-2xl font-bold mb-2">Card Title</h2>
  </div>
</template>

<script>
export default {
  name: 'TiltedCard',
  props: {
    title: {
      type: String,
      default: 'Card Title'
    },
    description: {
      type: String,
      default: 'This is a sample description for the tilted card component.'
    },
    redirectUrl: {
      type: String,
      default: 'https://example.com'
    }
  },
  methods: {
    redirectToPage() {
      window.location.href = this.redirectUrl;
    }
  }
}
</script>

<style scoped>
.bg-primary {
  background-color: #1A1E3E;
}
</style>

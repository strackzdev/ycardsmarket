<template>
  <div class="page-background">
    <div class="trade-container">
      <!-- Box 1 -->
      <div class="box1">
        <!-- Title Text -->
        <div class="title-text">{{ title }}</div>

        <!-- Box 2 -->
        <div class="box2">
          <!-- Left Split Area -->
          <div class="split-area">
            <!-- Title for Left Split Area -->
            <div class="split-title">Left Side Title</div>
            <div class="rectangles-container">
              <!-- Three Rectangle Areas -->
              <div class="rectangle-area" v-for="n in 3" :key="n"></div>
            </div>
          </div>

          <!-- Arrow -->
          <div class="arrow"></div>

          <!-- Right Split Area -->
          <div class="split-area">
            <!-- Title for Right Split Area -->
            <div class="split-title">Right Side Title</div>
            <div class="rectangles-container">
              <!-- Three Rectangle Areas -->
              <div class="rectangle-area" v-for="n in 3" :key="'right' + n"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Props
const props = defineProps({
  title: String, // Title text
});
</script>

<style scoped>
.page-background {
  background-color: darkblue;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trade-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: white; /* Added background color to container */
  padding: 20px; /* Added padding to container */
  border-radius: 8px; /* Added border radius to container */
}

.box1 {
  margin: 20px;
}

.title-text {
  font-size: 18px;
  font-weight: bold;
}

.box2 {
  display: flex;
  align-items: center;
}

.split-area {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.split-title {
  font-size: 14px;
  margin-bottom: 10px;
}

.rectangles-container {
  display: flex;
}

.rectangle-area {
  width: 100px;
  height: 70px;
  background-color: #ccc;
  margin-right: 10px;
}

.arrow {
  width: 20px;
  height: 20px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin: 0 20px;
}
</style>

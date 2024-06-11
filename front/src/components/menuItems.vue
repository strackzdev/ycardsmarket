<template>
  <div>
    <div :style="logoButtonsStyle">
      <div class="col-span-2 mt-10 ml-20 mr-4">
        <img :src="logoSrc" alt="Image Description" class="w-23 h-28 mr-5">
      </div>
      <div :style="buttonsStyle" class="mt-10 flex justify-end space-x-4 py-2 px-5">
        <Button
            @click="exchangeClicked"
            :style="buttonStyle"
            fontSize="1.3rem"
        >
          LOGIN
        </Button>
        <Button
            @click="exchangeClicked"
            :style="buttonStyle"
            fontSize="1.3rem"
        >
          REGISTER
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from "@/components/homeButton.vue";
import logoWhite from '@/assets/images/logoWhite.png';
import logoBlack from '@/assets/images/logoBlack.png';

// Style objects
const logoButtonsStyle = {
  position: 'absolute',
  width: '100%',
  zIndex: '1000',
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  marginLeft: '70px',
};

const buttonsStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  marginRight: '200px',
  marginTop: '70px',
};

// Use the route object to determine the current route
const route = useRoute();

// Computed property to determine which logo to display
const logoSrc = computed(() => {
  return route.name === 'home' ? logoWhite : logoBlack;
});

// Computed property to determine button styles
const buttonStyle = computed(() => {
  return route.name === 'home'
      ? {}
      : {
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
      };
});

const exchangeClicked = () => {
  // Your logic here
};
</script>

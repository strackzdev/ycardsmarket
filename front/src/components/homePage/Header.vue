<template>
    <div :style="logoButtonsStyle">
      <div class="col-span-2 mt-10 ml-20 mr-4">
        <img :src="logoSrc" alt="Image Description" class="w-23 h-28 mr-5">
      </div>
      <div :style="buttonsStyle" class="pr-custom mt-10 flex justify-end space-x-4 py-2 px-5">
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from "@/components/homePage/Buttons.vue";
import logoWhite from '@/assets/images/logoWhite.png';
import logoBlack from '@/assets/images/logoBlack.png';

// Use the route object to determine the current route
const route = useRoute();

// Computed property to determine which logo to display
const logoSrc = computed(() => {
  return route.name === 'home' ? logoWhite : logoBlack;
});

// Computed property to determine button styles
const buttonStyle = computed(() => {
  return route.name === 'home'
      ? {
        padding: '1rem 2rem',
        width: '200px',
      }
      : {
        padding: '1rem 2rem',
        width: '200px',
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
      };
});

// Computed property to determine logo buttons style
const logoButtonsStyle = computed(() => {
  return route.name === 'home'
      ? {
        position: 'absolute',
        width: '100%',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
      }
      : {};
});

const buttonsStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  //marginRight: '200px',
};

const exchangeClicked = () => {
  // Your logic here
};
</script>

<template>
  <div>
    <div :style="logoButtonsStyle">
      <div class="col-span-2 mt-10 ml-20 mr-4">
        <img src="@/assets/images/logoWhite.png" alt="Image Description" class="w-23 h-28 mr-5">
      </div>
      <div :style="buttonsStyle" class="mt-10 flex justify-end space-x-4 py-2 px-5">
        <Button @click="exchangeClicked" fontSize="1.3rem">LOGIN</Button>
        <Button @click="exchangeClicked" fontSize="1.3rem">REGISTER</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/homeButton.vue";

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
</script>

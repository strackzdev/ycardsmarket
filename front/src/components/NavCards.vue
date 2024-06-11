<template>
  <div class="container">
    <div class="fan-container">
      <div class="fan" v-for="(item, index) in menuItems" :key="index">
        <div class="card" :data-word="item.label" @click="navigate(item.component)">
          <img :src="item.imageUrl" :alt="item.label" class="menu-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: 'Deck', component: 'component1', imageUrl: 'src/assets/images/yugiohNavCard.png' },
        { label: 'Trading', component: 'component2', imageUrl: 'src/assets/images/pokemonNavCard.png' },
        { label: 'Cards', component: 'component3', imageUrl: 'src/assets/images/lorcanaNavCard.png' },
        { label: 'Home', component: 'component4', imageUrl: 'src/assets/images/magicNavCard.png' }
      ]
    };
  },
  methods: {
    navigate(component) {
      switch(component) {
        case 'component1':
          this.$router.push({ path: '/decks' });
          break;
        case 'component2':
          this.$router.push({ path: '/' });
          break;
        case 'component3':
          this.$router.push({name: 'collection'});
          break;
        case 'component4':
          this.$router.push({ path: '/home' });
          break;
      }
    }
  }
};
</script>

<style scoped>
.menu-img {
  max-width: 300px; /* Set maximum width to fit its container */
  max-height: 300px; /* Set maximum height to fit its container */
}

.container {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align to the right */
}

.fan-container {
  right: 0;
  top: 25vh;
  position: fixed;
  transform: rotate(-90deg); /* Rotate the fan container */
  transform-origin: 100% center; /* This means 100% from the left and 0% from the top */
  display: flex;
  flex-direction: row;
  align-items: center; /* Center the fan container vertically */
  z-index: 999; /* Set a high z-index to ensure it appears on top */
}

.fan {
  transition: transform 0.3s ease;
  position: relative;
}

.card {
  max-width: 100px; /* Set maximum width */
  max-height: 280px; /* Set maximum height */
  cursor: pointer;
  opacity: 0.7; /* Initial opacity */
  margin-right: 20px; /* Add spacing between cards */
  filter: sepia(200%) saturate(600%) brightness(100%) hue-rotate(180deg);
}

.card:last-child {
  margin-right: 0; /* Remove right margin for the last card */
}

.card::before {
  content: "";
  position: absolute;
  top: 55px;
  left: 10px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-shadow: 0 0 15px rebeccapurple; /* Neon effect */
  transform: rotate(90deg);
  pointer-events: none; /* Ensure the text does not interfere with clicks */
  background-color: black;
  border-radius: 10px;
}

.card:last-child {
  margin-right: 0; /* Remove right margin for the last card */
}


[data-word]:before {
  content: attr(data-word); /* Set the content to the value of the data-word attribute */
}

.fan:nth-child(1) .card {
  transform-origin: 300% center;
  transform: rotate(-15deg);
}

.fan:nth-child(2) .card {
  transform-origin: right center;
  transform: rotate(0deg);
}

.fan:nth-child(3) .card {
  transform-origin: right center;
  transform: rotate(10deg);
}

.fan:nth-child(4) .card {
  transform-origin: -100% center;
  transform: rotate(20deg);
}

.card:hover {
  opacity: 1;
  filter: none;
}

.fan:nth-child(1):hover .card {
  transform: translateY(-150px) rotate(-10deg);
  transition: transform 0.3s ease;
  z-index: 999;
}

.fan:nth-child(2):hover .card {
  transform: translateY(-130px) rotate(0deg);
  transition: transform 0.3s ease;
}

.fan:nth-child(3):hover .card {
  transform: translateY(-100px) rotate(10deg);
  transition: transform 0.3s ease;
}

.fan:nth-child(4):hover .card {
  transform: translateY(-100px) rotate(20deg);
  transition: transform 0.3s ease;
}
</style>

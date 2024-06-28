<!-- components/TradesList.vue -->
<template>
  <div class="trades-list">
    <h1>10 LAST TRADES</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div class="trades-container  px-custom" v-if="trades.length">
      <div class="trade" v-for="trade in trades" :key="trade.id">
        <div class="trade-header">
          <span class="username">{{ trade.username }}</span>
          <span class="updated-at">{{ new Date(trade.updatedAt).toLocaleString() }}</span>
        </div>
        <div class="trade-details">
          <div class="trade-cards">
            <h3>Giving:</h3>
            <div class="cards">
              <div class="card" v-for="card in trade.proposerCards.slice(0, 3)" :key="card.id">
                <img :src="card.card.imageUrl" :alt="card.card.name" />
              </div>
            </div>
          </div>
          <div class="trade-logo">
            <img src="../../assets/images/tradeLogo.png" alt="Trading Logo" />
          </div>
          <div class="trade-cards">
            <h3>Looking For:</h3>
            <div class="cards">
              <div class="card" v-for="card in trade.acceptorCards.slice(0, 3)" :key="card.id">
                <img :src="card.card.imageUrl" :alt="card.card.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTradesStore } from '@/stores/trades';
import { computed, onMounted } from 'vue';

export default {
  setup() {
    const tradesStore = useTradesStore();

    const trades = computed(() => tradesStore.trades);
    const totalItems = computed(() => tradesStore.totalItems);
    const loading = computed(() => tradesStore.loading);
    const error = computed(() => tradesStore.error);

    const fetchTrades = () => {
      tradesStore.fetchTrades();
    };

    onMounted(() => {
      fetchTrades();
    });

    return {
      trades,
      totalItems,
      loading,
      error,
      fetchTrades,
    };
  },
};
</script>

<style scoped>
.trades-list {
  background-color: #1A1E3E;
  color: white;
  padding: 16px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.trades-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}

.trade {
  flex: 0 1 calc(50% - 24px); /* Ensure each trade takes up half the width minus the gap */
  max-width: calc(50% - 24px); /* Same calculation for max-width */
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #000;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
}

.trade-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.username {
  font-weight: bold;
}

.updated-at {
  font-style: italic;
}

.trade-details {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.trade-cards {
  width: 45%;
}

.trade-cards h3 {
  margin: 0;
  margin-bottom: 8px;
}

.cards {
  display: flex;
  gap: 8px;
}

.card {
  width: calc(33.33% - 8px);
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card img {
  max-width: 100%;
  height: auto;
}

.trade-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.trade-logo img {
  max-width: 50px;
  height: auto;
}
</style>

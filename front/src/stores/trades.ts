// stores/trades.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTradesStore = defineStore('trades', {
    state: () => ({
        trades: [],
        totalItems: 0,
        loading: false,
        error: null,
    }),
    actions: {
        async fetchTrades(pageIndex = 0, pageSize = 10) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_PROXY}/trades`, {
                    params: {
                        pageIndex,
                        pageSize,
                        sortBy: 'createdAt',
                        sortDirection: 'DESC',
                    },
                });
                this.trades = response.data.items;
                this.totalItems = response.data.totalItems;
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },
    },
});

import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DecksView from '@/views/DecksView.vue'
import DeckBuilderView from '@/views/DeckBuilderView.vue'
import CollectionView from '@/views/CollectionView.vue'
import TradingView from '@/views/TradingView.vue'
import CreateTradeView from '@/views/CreateTradeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from '@/layout/MainLayout.vue'
import { isAuthenticated } from '@/auth/auth'
import TradeView from '@/views/TradeView.vue'
import PersonalTradeView from '@/views/PersonalTradeView.vue'
import { decodeToken, getAccessToken } from '@/auth/token'
import { useTradeStore } from '@/stores/trade'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import type { Trade } from '@/types/trade'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: [redirectToHome]
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/cards',
          name: 'collection',
          component: CollectionView
        },
        {
          path: '/decks',
          name: 'decks',
          component: DecksView,
          beforeEnter: [redirectToLogin]
        },
        {
          path: '/deck-builder',
          name: 'deck-builder',
          component: DeckBuilderView,
          beforeEnter: [redirectToLogin]
        },
        {
          path: '/:pathMatch(.*)*',
          redirect: { name: 'home' }
        },
        {
          path: '/trading',
          name: 'trading',
          component: TradingView,
          beforeEnter: [redirectToLogin]
        },
        {
          path: '/trading/create',
          name: 'create-trade',
          component: CreateTradeView,
          beforeEnter: [redirectToLogin]
        },
        {
          path: '/trading/:id',
          name: 'trade',
          component: TradeView,
          beforeEnter: [redirectToLogin, isTraders]
        },
        {
          path: '/my-trades',
          name: 'my-trades',
          component: PersonalTradeView,
          beforeEnter: [redirectToLogin]
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

async function isTraders(to: RouteLocationNormalized) {
  const sub = decodeToken(getAccessToken()).sub;

  if(to.params.id) {
    const tradeStore = useTradeStore();
    const { trade } = storeToRefs(tradeStore);
    
    try {
      trade.value = (await axios.get<Trade>(`${import.meta.env.VITE_BACKEND_PROXY}/trades/${to.params.id}`)).data;
      if(trade.value.proposer.keycloakUUID === sub) return true;
      if(trade.value.acceptor?.keycloakUUID && trade.value.acceptor?.keycloakUUID == sub) return true;
    } catch {
      return {name: 'my-trades'};
    }
  }
  
  return {name: 'my-trades'};
}

function redirectToLogin() {
  if (!isAuthenticated()) return { name: 'login' }
}

function redirectToHome() {
  if (isAuthenticated()) return { name: 'home' }
}

export default router

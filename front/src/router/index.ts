import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DecksView from '@/views/DecksView.vue'
import DeckBuilderView from '@/views/DeckBuilderView.vue'
import CollectionView from '@/views/CollectionView.vue'
import TradingView from '@/views/TradingView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionView
    },
    {
      path: '/decks',
      name: 'decks',
      component: DecksView
    },
    {
      path: '/deck-builder',
      name: 'deck-builder',
      component: DeckBuilderView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    },
    {
      path: '/trading',
      name: 'trading',
      component: TradingView
    },
    {
      path: '/login',
      name: 'trading',
      component: LoginView
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DecksView from '@/views/DecksView.vue'
import DeckBuilderView from '@/views/DeckBuilderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
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
  ]
})

export default router

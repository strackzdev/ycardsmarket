import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DecksView from '@/views/DecksView.vue'
import DeckBuilderView from '@/views/DeckBuilderView.vue'
import CollectionView from '@/views/CollectionView.vue'
import TradingView from '@/views/TradingView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from '@/layout/MainLayout.vue'
import { isAuthenticated } from '@/auth/auth'

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
          path: '/collection',
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
        }
      ]
    }
  ]
})

function redirectToLogin() {
  if (!isAuthenticated()) return { name: 'login' }
}

function redirectToHome() {
  if (isAuthenticated()) return { name: 'home' }
}

export default router

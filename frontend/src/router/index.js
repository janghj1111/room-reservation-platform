import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../features/rooms/pages/HomePage.vue'
import { ROUTE_NAMES } from '../shared/constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.HOME,
      component: HomePage,
      meta: {
        requiresAuth: false,
      },
    },
  ],
})

export default router

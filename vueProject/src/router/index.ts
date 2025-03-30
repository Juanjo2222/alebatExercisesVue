import CataloguePage from '@/pages/CataloguePage.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/catalogue',
    name: 'catalogue',
    component: CataloguePage,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  }
],
})

export default router

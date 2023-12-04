import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form/:id?',
      name: 'form',
      component: () => import('../views/Form/index.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List/index.vue')
    }
  ]
})

export default router

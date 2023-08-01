import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {layout: 'DashboardLayout'}
    },
    {
      path: '/about',
      name: 'about',
      meta: {layout: 'DashboardLayout'},
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'DashboardLayout'},
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'NoAuthLayout'},
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'NoAuthLayout'},
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/request',
      name: 'request',
      meta: {layout: 'PlaygroundLayout'},
      component: () => import('../views/RequestView.vue')
    },
    {
      path: '/response',
      name: 'response',
      meta: {layout: 'PlaygroundLayout'},
      component: () => import('../views/Response.vue')
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import UserProfile from '../views/UserProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/LoginView.vue',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/UserProfileView.vue',
    name: 'userProfile',
    component: () => import('../views/UserProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

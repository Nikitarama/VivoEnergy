import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Home
  },
  {
    path: '/HomeView',
    name: 'home',
    component: Home
  },
  {
    path: '/UserProfileView',
    name: 'userProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfileView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

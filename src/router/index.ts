import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'   // pakai path relatif, bukan '@'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

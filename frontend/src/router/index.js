import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: "Index",
    path: "/",
    component: () => import('../views/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
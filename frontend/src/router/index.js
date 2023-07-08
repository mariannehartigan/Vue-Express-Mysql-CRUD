import { createRouter, createWebHistory } from 'vue-router'
import UpdateMood from "../components/UpdateMood.vue"

const routes = [
  {
    name: "Index",
    path: "/",
    component: () => import('../views/Index.vue')
  },
  {
    name: "UpdateMood",
    path: "/updatemood/:id",
    component: UpdateMood
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
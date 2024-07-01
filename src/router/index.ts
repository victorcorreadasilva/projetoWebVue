//@ts-ignore
import routes from 'virtual:generated-pages'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

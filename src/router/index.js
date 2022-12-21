import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './main'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 切換頁面時，回到最頂端
    return {
      x: 0,
      y: 0,
      // behavior: 'smooth'
    }
  }
})

export default router

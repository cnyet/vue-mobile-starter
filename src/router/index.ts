/*
 * @Description: 路由规则
 */
import Vue from 'vue'
import VueRouter, { Route, RawLocation } from 'vue-router'
import { ErrorHandler } from 'vue-router/types/router'
import commonRouter from './common'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: commonRouter
})

// 全局导航守卫中检查元字段
router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    store.dispatch('app/setTransitionName', 'fade')
  } else if (to.path.startsWith(from.path)) {
    store.dispatch('app/setTransitionName', 'slide-forward')
  } else if (from.path.startsWith(to.path)) {
    store.dispatch('app/setTransitionName', 'slide-backward')
  }
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (getCookie()) {
  //     if (to.path === '/login') {
  //       next('/')
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   next()
  // }
  next()
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location: RawLocation): Promise<Route> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (originalPush.call(this, location) as any).catch(
    (err: ErrorHandler) => err
  )
}

export default router

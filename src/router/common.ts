/**
 * 公共路由配置
 */
import Coral from './modules/coral'
import Identify from './modules/identify'
import Honor from './modules/honor'
import Donate from './modules/donate'

export default [
  {
    path: '/',
    meta: {
      requiresAuth: true,
      isHome: true
    },
    component: (): any => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: (): any => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  }, {
    path: '*',
    component: (): any => import(/* webpackChunkName: "404" */ '@/views/404.vue')
  },
  ...Coral,
  ...Identify,
  ...Honor,
  ...Donate
]

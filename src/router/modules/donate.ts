/**
 * 我的捐赠路由规则
 */
export default [
  {
    path: '/donate',
    name: 'Donate',
    meta: {
      title: '我的捐赠'
    },
    component: (): any => import(/* webpackChunkName: "donate" */ '@/views/donate/index.vue')
  }
]

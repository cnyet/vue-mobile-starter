/**
 * 珊瑚识别路由规则
 */
export default [
  {
    path: '/identify',
    name: 'Identify',
    meta: {
      title: '珊瑚识别'
    },
    component: (): any => import(/* webpackChunkName: "identify" */ '@/views/identify/index.vue')
  }, {
    path: '/identify/detail',
    name: 'IdentifyDetail',
    meta: {
      title: '识别详情'
    },
    component: (): any => import(/* webpackChunkName: "myScore" */ '@/views/identify/IdentifyDetail.vue')
  }
]

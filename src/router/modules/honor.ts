/**
 * 我的荣誉路由规则
 */
export default [
  {
    path: '/honor',
    name: 'Honor',
    meta: {
      title: '我的荣誉'
    },
    component: (): any => import(/* webpackChunkName: "honor" */ '@/views/honor/index.vue')
  }, {
    path: '/honor/detail',
    name: 'HonorDetail',
    meta: {
      title: '荣誉证书'
    },
    component: (): any => import(/* webpackChunkName: "myIndex" */ '@/views/honor/HonorDetail.vue')
  }
]

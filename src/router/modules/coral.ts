/**
 * 我的珊瑚路由规则
 */
export default [
  {
    path: '/coral',
    name: 'Coral',
    meta: {
      title: '我的珊瑚'
    },
    component: (): any => import(/* webpackChunkName: "coral" */ '@/views/coral/index.vue')
  }, {
    path: '/coral/detail',
    name: 'CoralDetail',
    meta: {
      title: '珊瑚详情'
    },
    component: (): any => import(/* webpackChunkName: "adoptCoral" */ '@/views/coral/CoralDetail.vue')
  }, {
    path: '/coral/map',
    name: 'CoralMap',
    meta: {
      title: '地图分布'
    },
    component: (): any => import(/* webpackChunkName: "mycoral" */ '@/views/coral/CoralMap.vue')
  }, {
    path: '/coral/ar',
    name: 'CoralAR',
    meta: {
      title: 'AR拍照'
    },
    component: (): any => import(/* webpackChunkName: "mycoral" */ '@/views/coral/CoralAR.vue')
  }
]

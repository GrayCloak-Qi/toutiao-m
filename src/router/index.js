import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'layout',
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        // name: 'home',
        path: '',
        component: () => import('@/views/home/index.vue')
      },
      {
        name: 'qa',
        path: '/qa',
        component: () => import('@/views/qa/index.vue')
      },
      {
        name: 'video',
        path: '/video',
        component: () => import('@/views/video/index.vue')
      },
      {
        name: 'my',
        path: '/my',
        component: () => import('@/views/my/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

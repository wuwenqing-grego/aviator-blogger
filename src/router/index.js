import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../pages/index/Index.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/login/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../pages/register/Register.vue')
  },
  {
    path: '/home',
    component: () => import('../pages/home/Home.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/create',
    component: () => import('../pages/create/Create.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/edit/:blogId',
    component: () => import('../pages/edit/Edit.vue'),
    meta: { requireAuth: true }
  },
  {
    path: '/blog/:blogId',
    component: () => import('../pages/blog/Blog.vue')
  },
  {
    path: '/user/:userId',
    component: () => import('../pages/user/User.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router

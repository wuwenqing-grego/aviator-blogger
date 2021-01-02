import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index/Index.vue'
import Login from '../pages/login/Login.vue'
import Register from '../pages/register/Register.vue'
import Home from '../pages/home/Home.vue'
import Create from '../pages/create/Create.vue'
import Edit from '../pages/edit/Edit.vue'
import Blog from '../pages/blog/Blog.vue'
import User from '../pages/user/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/create',
    component: Create
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/user',
    component: User
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

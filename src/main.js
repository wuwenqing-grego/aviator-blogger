import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import request from './helpers/request.js'
// import auth from './api/auth.js'
// import blog from './api/blog.js'
// auth.register({username: 'wenqing1', password: '12344321'}).then(data => console.log(data))
// auth.getInfo().then(data => console.log(data))
// blog.getBlogs().then(data => console.log(data))
// blog.getBlogsByUserId(131).then(data => console.log(data))
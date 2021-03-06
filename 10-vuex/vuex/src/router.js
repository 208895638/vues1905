import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        // 加这个属性就代表进入之前需要验证
        isLogin:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/user',
      name: 'about',
      meta:{
        // 加这个属性就代表进入之前需要验证
        isLogin:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/user.vue')
    }
  ]
})

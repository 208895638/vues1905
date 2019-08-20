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
      component: Home,
      meta:{
        isFootShow:true
      },
    },
    {
      path: '/car',
      name: 'car',
      meta:{
        isFootShow:true,
        // 加requireAuth 默认代表进入这个页面之前需要进行登陆判断
        requireAuth:true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/car/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta:{
        isFootShow:true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/user/index.vue')
    },
    {
      path: '/info/:id',
      name: 'info',
      meta:{
        isFootShow:false
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/info/index.vue')
    }
  ]
})

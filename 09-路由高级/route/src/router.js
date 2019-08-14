import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import info from './views/info.vue'
import login from './views/login.vue'

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
      }
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        isFootShow:true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path:"/info/:id",
      component: info,
      meta:{
        isFootShow:false
      },
    },
    {
      path:"/login",
      component: login,
      meta:{
        isFootShow:false
      },
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import about from "./views/About.vue";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 页面切换的时候 滚动条就处于顶部的位置 vue-router 默认的切换页面的时候滚动条位置是不变的
  // scrollBehavior (to, from, savedPosition) {
  //   return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //       resolve({ x: 0, y: 0 })
  //       })
  //   })
  //   },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // 路由元信息
      meta:{
        title:"首页"
      }
    },
    {
      path: '/login',
      name: 'login',
      // 懒加载的写法
      component: () => import(/* webpackChunkName: "group-foo" */ './views/login/index.vue'),
      meta:{
        title:"登陆页"
      }
    },
    {
      path: '/list/:id',
      name: 'list',
      // 懒加载的写法 对页面加载耗时有很大的提升
      component: () => import( './views/list/index.vue'),
      meta:{
        title:"列表页"
      }
    },
    {
      path: '/about',
      name: 'about',
      component:about,
      meta:{
        title:"about页面",
        // 代表需要登陆
        isLogin:false
      },
      // 路由守卫
      // beforeEnter(to , from , next){
      //   if(to.path == "/about"){
      //     if(localStorage.getItem("username")){
      //       next()
      //     }else{
      //       next("/login")
      //     }
      //   }
      // },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

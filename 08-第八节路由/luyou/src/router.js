import Vue from 'vue'
// 引入安装的路由插件
import Router from 'vue-router'

//  注册路由插件 
Vue.use(Router)
//  上面三个是固定的写法  注册路由插件
import Home from './views/Home.vue'
//  引入home页面
import home from "@/views/home/index.vue"
import user from "@/views/user/index.vue"
import weather from "@/views/weather/index.vue"
import other from "@/views/other/index.vue"
import dc from "@/views/dc/index.vue"
import yd from "@/views/yd/yd.vue"
import wm from "@/views/wm/wm.vue"
import joinus from "@/views/joinus/index.vue"

export default new Router({
  // mode  history  hash
  // 使用history 跟原生的地址很像
  mode: 'history',
  // base: process.env.BASE_URL,
  // routes 定义的路由规则
  // 自定义激活的class名称
  linkActiveClass:"v-active",
  routes: [
    {
      //  /home/bj  由 home ==> home/wather  to home/wather from home to.length > from.length 代表进入 否则 返回
      path:"/home",
      component : home,
      //  嵌套路由 路由中的路由
      children : [
        //  在children里面写path 不需要加/ 
        {
          //  北京  上海 郑州
          path:"weather/:id",
          component : weather,
        }
      ]
    },
    
    // {
    //   path:"/user",
    //   component : user
    // },
    //  动态路由 user
    {
      // id代指用户的id id就是需要传递的参数
      // /user?id=""
      path:"/user/:id",
      component : user,
      name:"user"
    },
    {
      path:"/other",
      component : other,
      //  redirect 重定向 匹配到other页面的时候把它定向到某个路由
      redirect:"/other/yd",
      children:[
        {
          path:"dc",
          component : dc
        },
        {
          path:"wm",
          component : wm
        },
        {
          path:"yd",
          component : yd
        },
      ]
    },
    {
      path:"/joinus",
      component:joinus,
      name:"join"
    },
    // {
    //   // path 定义的路由地址 
    //   path: '/user',
    //   // name: 'home',
    //   // component 组件  访问路由地址对应的这个组件
    //   component: Home
    // },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

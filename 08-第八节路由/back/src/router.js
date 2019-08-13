import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import info from './views/info.vue'
import infos from './views/infos.vue'
import user from './views/user.vue'
import phone from './views/phone.vue'
import icon from './views/icon.vue'
Vue.use(Router)

export default new Router({
  //  mode 控制路由的模式 hash  history 
  mode: 'history',
  //  routes 定义路由的规则
  linkActiveClass:"active",
  routes: [
    {
      // path 定义url的路径
      path:"/home",
      // component 路由地址对应显示的组件
      component : Home
    },
    {
      path:"/info",
      component : info
    },
    {
      path:"/home/info/:id",
      component : infos,
      // 命名路由
      name:"info"
    },
    // 嵌套路由
    {
      path:"/user",
      component:user,
      redirect:"/user/phone",
      children:[
        // 修改头像
        {
          path:"icon",
          component:icon
        },
        // 修改电话号码
        {
          path:"phone",
          component:phone
        },
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册路由
Vue.use(VueRouter)

import home from "@/views/home/index.vue"
export default new VueRouter({
    // hash  history
    mode:"history",
    routes:[
        {
            path:"/home",
            component:home
        }
    ]
})
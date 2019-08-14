import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 只有有这个islogin属性 我们都需要判断是否登陆
    if(to.meta.isLogin == true){
        if(localStorage.getItem("user")){
          next()
        }else{
          alert("暂未登陆 请先登陆！")
        }
    }else{
      next()
    }
    
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

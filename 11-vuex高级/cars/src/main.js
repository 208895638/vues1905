import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(localStorage["user"]){
      next()
    }else{
      next("/user")
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

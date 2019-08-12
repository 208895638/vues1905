import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 引入js文件的时候 可以把.js后缀省略
import router from "./router"
Vue.config.productionTip = false

new Vue({
  store,
  // 把router挂载到vue实例类里面
  router,
  render: h => h(App)
}).$mount('#app')

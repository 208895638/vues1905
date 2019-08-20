import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 当一个文件夹里面有index.js 引入路径的时候可以省略index.js
import axios from "./api"
Vue.config.productionTip = false
Vue.prototype.$ajax = axios;
// this.$ajax
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// import export  es6 提供的js模块化  import 导入 
// 查找的是node-modules里面安装的依赖
import Vue from 'vue'
// 导入app.vue这个 根组件 
import App from './App.vue'
//   路由  全局状态管理
import router from './router'
import store from './store'
Vue.directive("focus", {
  inserted(el){
      el.focus();
  }
})
Vue.config.productionTip = false
//  实例化vue   有且只能有一个
new Vue({
  router,
  store,
  el:"#app",
  //  把app.vue转换成虚拟dom节点  
  render: h => h(App)
})

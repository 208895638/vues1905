import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 每次导航的时候就会经过导航守卫
// 全局前置守卫
// router.beforeEach((to, from, next) => { 
//   console.log(to, from, next)
//   // a -> b a代表from b 代表to
//   // to代表将要去的地址
//   // form代表上一个地址 
//   // next  控制a页面是否能进入b页面
//   // 直接jianext代表放行  
//   // next();
//   // // 不让放下
//   // next(false);
//   // // 直接定位新页面 
//   // next({
//   //   path:"/login"
//   // });
//   // 如果需要去往的路径 等于 about页面的话 
//   // 变量代表是否登陆
//   var islogin = false;
//   if(to.fullPath == '/about'){
//     // 判断是否登陆
//     if(islogin){
//       // 如果登陆  放行 
//       // next() 一定要写 如果写守卫之后 next一定要写
//       next()
//     }else{
//       // 如果没登陆 重定向到login页面
//       next({
//           path:"/login"
//         });
//     }
//   }
//   next()
// })
// router.beforeEach 每次路由变化的时候都会经过全局守卫  全局前置守卫
router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title;
  // 
  // if(to.meta.isLogin == false){
  //   next("/login")
  // }
  // if(to.path == "/about"){
  //   if(localStorage.getItem("username")){
  //     next()
  //   }else{
  //     alert("暂未登陆 跳转到登陆页");
  //     next({
  //       path:"/login"
  //     })
  //   }
  // }
  
  next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

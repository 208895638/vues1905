<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/list/1">商品1</router-link>|
      <router-link to="/list/2">商品2</router-link>
    </div>
    <!-- router-view 动态组件 -->
    <!-- <component is=""></component> -->
    <transition :name="transitionName">
      <router-view/>
    </transition>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName:""
    }
  },
  watch: {
  '$route' (to, from) {
    //  from  /site/zaowu/main   to /site/zaowu/main/order?type=0
    // to 的地址 /user
    const toDepth = to.path.split('/').length  // 4
    // from /home/1
    const fromDepth = from.path.split('/').length // 2
    console.log("toDepth",toDepth)
    // slide-left 需要的页面动效从右往左
    // slide-right 需要的动效从左往右
    // 默认地址长度比较长的代表进入  地址长度比较短的代表上一级
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
}
</script>
<style lang="scss">
body,html{
  height: 100%;
}
#app{
  height:100%;
}
// 代表返回 
.slide-right-enter{
  transform: translateX(-100%);
}
.slide-right-leave{
  transform: translateX(0);
}
.slide-right-enter-active{
  transition: .3s ease-in;
}
.slide-left-enter{
  transform: translateX(100%);
}
.slide-left-leave{
  transform: translateX(0);
}
.slide-left-enter-active{
  transition: .3s ease-in;
}
// .left-enter{ // 进入的时候执行的class名称
//   transform: translateX(100%);
// }
// .left-enter-active{ // 进入 结束这一阶段执行的class名称
//   transition: .3s ease-in;
// }
// .left-leave{ // 进入结束时执行的class名称
//   transform: translateX(0);
// }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

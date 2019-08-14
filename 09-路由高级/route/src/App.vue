<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
   <!-- 关键怎么找到一个值 控制nav显示和隐藏 -->
   
   <div class="navs" v-if="$route.meta.isFootShow == true">
     <router-link to="/">首页</router-link>|
     <router-link to="/about">user页面</router-link>|
     <router-link to="/login">login页面</router-link>
   </div>
   
  </div>
</template>
<script>
export default {
  data () {
    return {
        isfootshow:true
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>
<style lang="scss" scoped>
.main{
  flex: 1;
}
.navs{
  border-top: 1px solid red;
  padding: 10px;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
flex: 1;
overflow: auto;
}
</style>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
}
#app{
  height: 100%;
}
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

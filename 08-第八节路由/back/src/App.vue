<template>
  <div id="app">
    <div id="nav">
      <div class="box">
          <router-link to="/home">home页</router-link>
      <!-- js的方式跳转 -->
          <h2 @click="goto">home页</h2>
          <router-link to="/user">user页面</router-link>
      </div>
      <!--  -->
      
      <router-link to="/info?id=3">跳转到详情也</router-link>|
      <router-link to="/home/info/4">动态路由跳转到详情也1</router-link>|
      <router-link to="/home/info/5">动态路由跳转到详情也2</router-link>|
      <router-link :to="{name:'info',params:{id:4}}">动态路由跳转到详情也</router-link>
      <hr>
      <h2>下面是js的方式跳转页面传递参数</h2>
      <h3 @click="query">query传值</h3>
      <h3 @click="params">params传值</h3>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      current:""
    }
  },
  methods: {
    goto(){
      // $router 代表的是全部的路由对象
      this.$router.push({path:"/home"})
    },
    query(){
      this.$router.push({path:"/info",query:{id:5}});
    },
    params(){
      // 动态路由传值path 与 params不能共存
      this.$router.push({name:"info",params:{id:5}});
    }
  },
  created () {
    console.log
    //this.current = this.$route.path
  }
}
</script>
<style lang="scss" scoped>
.active{
  color: red!important;
}
.box{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style lang="scss">
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

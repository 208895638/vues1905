<template>
  <div id="app">
    <div id="nav">
      vue项目
    </div>
    <!-- <a href=""></a> -->
    <!-- router-link vue-router提供的标签 作用是用于页面间的跳转 -->
    <div class="nav">
      <img src="http://www.bufantec.com/pages/tec/static/img/bd_logo.png" alt="">
      <ul>
        <!-- vue-router默认使用的是全包含匹配 -->
        <!-- exact 精准匹配 只有to的地址/home  浏览器地址栏相同的时候才会应用class名称 -->
        <router-link to="/home" tag="li" exact>首页</router-link>
        <router-link to="/user/1212313131" tag="li"  exact>项目案例</router-link>
        <router-link to="/other"  tag="li"  exact>其他业务</router-link>
        <!-- <router-link to="/joinus"  tag="li"  exact>加入我们</router-link> -->
        <!-- 动态路由的写法 -->
        <!-- 在动态路由的时候  动态路由的写法 如果使用to="{path}" -->
        <!-- <router-link :to="{path:'/user',params:{id:1}}">user页面</router-link> -->
        <router-link :to="{name:'user',params:{id:1}}">user页面</router-link>
        <!-- 命名视图的写法 存在及合理 -->
        <router-link :to="{name:'join'}">加入我们1</router-link>
        <!-- <li>首页</li>
        <li>项目案例</li>
        <li>加入我们</li>
        <li>联系我们</li> -->
      </ul>
    </div>
    <hr>
    <div class="nav">
      <img src="http://www.bufantec.com/pages/tec/static/img/bd_logo.png" alt="">
      <ul>
        <!-- vue-router默认使用的是全包含匹配 -->
        <!-- exact 精准匹配 只有to的地址/home  浏览器地址栏相同的时候才会应用class名称 -->
        <li @click="gotoquery('/home','1')">首页</li>
        <li @click="gotoparams('user','1234')">项目案例</li>
        <li @click="goto('/other')">其他业务</li>
        <li @click="goto('/joinus')">加入我们1</li>
      </ul>
    </div>
    <button @click="back">后退</button>
    <!-- <router-link to="/home" class="router-link-active">跳转到home页</router-link>|
    <router-link to="/home" >跳转到home页</router-link>| -->
    <!-- 动态路由跳转 -->
    <!--  动态路由相当于post传值  query相当于get传值 -->
    <!-- <router-link to="/user/1212313131">用户信息页</router-link> -->
    <!-- <router-link to="/user?username='张三'&age='40'&sex='男'" tag="h2">跳转到user页</router-link> -->
    <!-- router-view 是vue-router提供的一个标签  用于存放路由对应的组件 router-view 容器 存放路由的容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bool:false
    }
  },
  methods: {
    goto(val1 ){
      // $router 代指的是全部的路由对象
      // $route  代指的是当前的路由对象
      // js跳转路由
      this.$router.push(
        { 
          path: val1
        }
      )
    },
    gotoparams(val , val1){ // js 动态路由传参 如果使用path传递的话欧仁传递不过去 只能通过命名路由的方式传递
      this.$router.push(
        { 
          name: val,
          params:{
            id:val1
          }
        }
      )
    },
    gotoquery(val , val1){ // js query传值
      this.$router.push(
        { 
          path: val,
          query:{
            id:val1
          }
        }
      )
    },
    back(){
      this.$router.go(-1);
    }
  },
  created () {
    console.log(this)
  }
}
</script>

<style lang="scss">
.router-link-active{
  color: blue!important;
}
.red{
  color: red!important;
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

<style lang="scss" scoped>
// scoped 在这个style里面写的样式只作用域当前组件
.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    li{
     width: 73px;
     padding: 20px 0;
     margin-left: 60px;
    }
    .v-active{
      border-bottom:1px solid red
    }
  }
}
</style>
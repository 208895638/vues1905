<template>
  <div id="app">
    
    <div class="content">
      <router-view/>
    </div>
    <div id="nav" v-if="$route.meta.isFootShow">
      <router-link to="/">首页</router-link> |
      <router-link to="/car">购物车</router-link> |
      <router-link to="/user">个人信息</router-link>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$store.state.car.list)
  }
}
</script>
<style lang="scss" >
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html{
  height: 100%;
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
    .content{
      flex: 1;
      overflow: auto;
    }
    #nav {
      padding: 20px;
      border-top: 1px solid #ccc;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
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

</style>

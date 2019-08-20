<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/add">用户添加</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  created () {
    // 封装后的axios写法 
    // this.$ajax.get 
    // 
    // this.$ajax.get("/top250")
    // .then(val=>{
    //   console.log(val,333)
    // })
    var obj = {
                name:"张飞3",
                age:10,
                sex:"女", // 
                tel:123,
                address:"不凡3",
                school:"不凡3",
            }
            this.$ajax.post("/ajax/user/save",obj)
            .then(val =>{
              console.log(val,444)
            })
            //axios.post("http://59.110.138.169/api/ajax/user/save",obj)
  }
}
</script>
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

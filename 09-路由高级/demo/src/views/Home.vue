<template>
  <div class="home">
    <label for="">用户名称<input type="text" v-model.trim="username"></label>
    <label for="">用户密码<input type="text" v-model="userpass"></label>
      <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:"",
      userpass:""
    }
  },
  methods: {
    login(){
      if(this.username == ""){
        
      }else{
        localStorage.setItem("username",this.username);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  height:200%;
  background: red;
}
</style>

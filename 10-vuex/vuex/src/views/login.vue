<template>
  <div class="">
      <label for="">用户名<input type="text" name="" v-model="username"></label>
      <label for="">密码<input type="password" name="" v-model="userpass"></label>
      <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        username:"",
        userpass:""
    }
  },
  methods: {
      login(){
          localStorage.setItem("user",this.username);
          localStorage.setItem("userpass",this.username);
          alert("登陆成功");
          this.$router.push("/user");
      }
  }
 }
</script>

<style lang='scss' scoped>
</style>
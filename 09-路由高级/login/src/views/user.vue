<template>
  <div class="">
      <div>
          用户名 : {{ user }}
      </div>
      <div>
          密码 : {{ pass }}
      </div>
      <div>
          <button @click="logout">退出登陆</button>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        user:"",
        pass:""
    }
  },
  methods: {
      logout(){
          localStorage.clear();
          this.$router.push("/login");
      }
  },
  created () {
      this.user = localStorage.getItem("user");
      this.pass = localStorage.getItem("userpass");
  }
 }
</script>

<style lang='scss' scoped>
</style>
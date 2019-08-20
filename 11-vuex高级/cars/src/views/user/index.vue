<template>
  <div class="">
    <div class="login" v-if="username1 == '' || username1 == undefined">
      <label for="">用户名<input type="text" v-model.trim="username"></label>
      <label for="">密码<input type="password" v-model.trim="userpass"></label>
      <button @click="login">登陆</button>
    </div>
    <div class="user" v-else>
      <div>
        用户名: {{ username1 }}
      </div>
      <div>
        密码: {{ userpass1 }}
      </div>
      <button @click="logout">
        退出登陆
      </button>
    </div>
  </div>
</template>

<script>
import { mapState , mapMutations , mapGetters } from "vuex";
export default {
  name: '',
  data() { 
    return {
      username:"",
      userpass:""
    }
  },
  computed: {
    // mapState 模块的时候 函数的写法
    ...mapState({
      username1:(state)=>state.user.username,
      userpass1:(state)=>state.user.userpass
    })
  },
  methods: {
    ...mapMutations({
      addUser:"user/addUser"
    }),
    login(){
      if(this.username == "" || this.userpass == ""){
        alert("用户名或密码不符合规则");
        return 
      }else{
        var username = this.username;
        var userpass = this.userpass;
        localStorage["user"] = this.username;
        this.addUser({username , userpass});
      }
    },
    logout(){

    }
  }
 }
</script>

<style lang='scss' scoped>
</style>
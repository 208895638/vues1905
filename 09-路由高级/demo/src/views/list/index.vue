<template>
  <div class="">
      list页面 {{ currentData }}
      <label for="">用户名称<input type="text" v-model.trim="username"></label>
    <label for="">用户密码<input type="text" v-model="userpass"></label>
      <button @click="login">登陆</button>
  </div>
</template>

<script>
var timer;
export default {
  name: '',
  data() { 
    return {
        currentData:"",
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
  },
  created () {
      this.currentData = this.$route.params.id;
    console.log("页面参数",this.$route.params.id);
    timer = setInterval(()=>{
        console.log(1);
    },500)
  },
  // 进入组件的时候执行的钩子函数
  beforeRouteEnter(to, from, next){
      
    console.log("beforeRouteEnter",to, from, next);
    next();
  },
  // 组件被复用的时候执行的钩子函数
  beforeRouteUpdate(to, from, next){
      
      console.log(this.currentData)
    console.log("beforeRouteUpdate",to, from, next);
    next();
    this.currentData = this.$route.params.id;
  },
  // 组件被销毁的时候执行的钩子函数
//   destroyed () {
//       clearInterval(timer);
//   },
  // 将要离开的时候执行的钩子函数
  // 对用户点击浏览器的前进后退进行一个控制
  beforeRouteLeave(to, from, next){
      clearInterval(timer);
      const answer = window.confirm('表单内容还没完成 确定要离开吗')
        if (answer) {
            next()
        } else {
            next(false)
        }
    console.log("beforeRouteLeave",to, from, next)
  }
 }
</script>

<style lang='scss' scoped>
</style>
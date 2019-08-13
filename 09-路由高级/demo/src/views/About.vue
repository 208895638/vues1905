<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  // // 进入组件的时候执行的钩子函数
  // beforeRouteEnter(to, from, next){
  //   console.log("beforeRouteEnter",to, from, next);
  //   next();
  // },
  // // 组件被复用的时候执行的钩子函数
  // beforeRouteUpdate(to, from, next){
  //   console.log("beforeRouteUpdate",to, from, next)
  // },
  // // 将要离开的时候执行的钩子函数
  // beforeRouteLeave(to, from, next){
  //   console.log("beforeRouteLeave",to, from, next)
  // }
}
</script>
<style scoped>
.about{
  height:200%;
  background: blue;
}
</style>
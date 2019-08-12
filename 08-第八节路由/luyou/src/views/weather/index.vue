<template>
  <div class="">
      {{ now }} 的天气
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
        now:""
    }
  },
  watch: {
    '$route' (to, from) {
        // to 将要去往的一个地址 
        // from  从哪里来的地址
        console.log(to,from);
        this.now = to.params.id
      // 对路由变化作出响应...
    }
  },
  created () {
      this.now = this.$route.params.id;
      console.log(this.$route)
  }
 }
</script>

<style lang='scss' scoped>
</style>
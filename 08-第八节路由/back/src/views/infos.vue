<template>
  <div class="">
      动态路由传值 
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  watch: {
    "$route":function(to,form){ // to 代表将要去的路由 from代表上一个路由
      console.log(to,form)
    }
  },
  // 
  created () {
      var id = this.$route.params.id;
      console.log(id)
  }
 }
</script>

<style lang='scss' scoped>
</style>